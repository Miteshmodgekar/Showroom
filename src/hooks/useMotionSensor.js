import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useMotionSensor: High-performance, zero-re-render motion sensing engine.
 * Supports iOS & Android physical gyroscopes with auto-calibration and
 * desktop cursor / touch-drag fallback.
 */
export function useMotionSensor({ sensitivity = 1.0 } = {}) {
  const [sensorStatus, setSensorStatus] = useState({
    hasSensor: false,
    permissionNeeded: false,
    source: 'idle', // 'gyro' | 'pointer' | 'touch' | 'idle'
  });

  // Mutable telemetry reference accessed by 60fps / 120fps RAF loop without React re-renders
  const motionRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    pitch: 0,
    roll: 0,
    hasSensor: false,
    source: 'idle',
    baseBeta: null,
    baseGamma: null,
    motionEnabled: true,
  });

  // Check if iOS DeviceOrientationEvent permission is required
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      setSensorStatus((prev) => ({ ...prev, permissionNeeded: true }));
    }
  }, []);

  // Calibrate current orientation as the new 0,0 center baseline
  const calibrate = useCallback(() => {
    const m = motionRef.current;
    m.baseBeta = null;
    m.baseGamma = null;
    m.targetX = 0;
    m.targetY = 0;
    m.pitch = 0;
    m.roll = 0;
  }, []);

  // Request explicit permission for iOS 13+ devices
  const requestPermission = useCallback(async () => {
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      try {
        const state = await DeviceOrientationEvent.requestPermission();
        if (state === 'granted') {
          setSensorStatus({ hasSensor: true, permissionNeeded: false, source: 'gyro' });
          calibrate();
          return true;
        }
      } catch (err) {
        console.warn('DeviceOrientation permission request failed:', err);
      }
    }
    return false;
  }, [calibrate]);

  // Physical Gyroscope Listener (Android & iOS)
  useEffect(() => {
    const handleOrientation = (e) => {
      const { beta, gamma } = e;
      if (beta === null || gamma === null) return;

      const m = motionRef.current;

      // First time reading: calibrate current posture as center
      if (m.baseBeta === null || m.baseGamma === null) {
        m.baseBeta = beta;
        m.baseGamma = gamma;
      }

      // Delta relative to calibrated baseline
      let deltaBeta = beta - m.baseBeta;
      let deltaGamma = gamma - m.baseGamma;

      // Clamp to natural viewing window (±30 degrees)
      const clampedPitch = Math.max(-30, Math.min(30, deltaBeta));
      const clampedRoll = Math.max(-30, Math.min(30, deltaGamma));

      m.pitch = Math.round(clampedPitch);
      m.roll = Math.round(clampedRoll);

      // Normalize to -1.0 .. +1.0
      m.targetX = (clampedRoll / 30) * sensitivity;
      m.targetY = (clampedPitch / 30) * sensitivity;
      m.source = 'gyro';
      m.hasSensor = true;

      if (!sensorStatus.hasSensor) {
        setSensorStatus({
          hasSensor: true,
          permissionNeeded: false,
          source: 'gyro',
        });
      }
    };

    window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    // Also listen to absolute orientation on Android Chrome
    window.addEventListener('deviceorientationabsolute', handleOrientation, { passive: true });

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('deviceorientationabsolute', handleOrientation);
    };
  }, [sensitivity, sensorStatus.hasSensor]);

  // Desktop Pointer / Mouse movement fallback
  useEffect(() => {
    const handlePointerMove = (e) => {
      const m = motionRef.current;
      // If physical gyroscope is actively streaming, don't overwrite with mouse
      if (m.hasSensor && m.source === 'gyro') return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const normX = ((e.clientX / width) - 0.5) * 2;
      const normY = ((e.clientY / height) - 0.5) * 2;

      m.targetX = normX * sensitivity;
      m.targetY = normY * sensitivity;
      m.pitch = Math.round(normY * 25);
      m.roll = Math.round(normX * 25);
      m.source = 'pointer';

      if (sensorStatus.source !== 'pointer' && !sensorStatus.hasSensor) {
        setSensorStatus((prev) => ({ ...prev, source: 'pointer' }));
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [sensitivity, sensorStatus.source, sensorStatus.hasSensor]);

  return {
    motionRef,
    hasSensor: sensorStatus.hasSensor,
    permissionNeeded: sensorStatus.permissionNeeded,
    source: sensorStatus.source,
    calibrate,
    requestPermission,
  };
}
