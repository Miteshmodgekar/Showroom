import React, { useState, useEffect, useRef } from 'react';
import { Compass, RotateCw, Smartphone, Sparkles, MessageCircle, ShieldCheck, Layers, Eye, Check } from 'lucide-react';
import { useMotionSensor } from '../hooks/useMotionSensor';
import { getWhatsAppLink, openWhatsApp } from '../config/business';
import './MotionSensorShowroom.css';

const motionSofaModels = [
  {
    id: 'grand-horizon-u',
    name: 'The Grand Horizon U-Shape Sectional',
    subtitle: 'Bespoke Smoke Slate Velvet with Dual Chaises',
    price: '₹78,500',
    image: '/images/real_work/sofa-u-sectional-slate.jpg',
    foam: '40D High-Resilience Virgin Foam',
    fabric: 'Heavy GSM Stain-Resistant Slate Velvet',
    depth: '12 ft x 8 ft x 5.5 ft Full U-Suite',
    features: ['Continuous vertical fluting', 'Titanium gold stiletto legs', 'Matching cocktail ottoman included'],
    highlightPin: { x: '24%', y: '44%', text: 'Vertical Fluted Channels' },
    pin2: { x: '78%', y: '52%', text: 'Gold Electroplated Legs' }
  },
  {
    id: 'milano-leather',
    name: 'Milano Italian Leather Living Suite',
    subtitle: 'Almond Italian Top-Grain Leather with Recliner',
    price: '₹94,000',
    image: '/images/real_work/lounge-milano-leather-suite.jpg',
    foam: '45D Ergonomic High-Resilience Core',
    fabric: '100% Genuine Italian Top-Grain Leather',
    depth: '3-Seater + 2-Seater + Swivel Recliner',
    features: ['German ratchet headrests', '360° swivel single recliner', 'French tailored seams'],
    highlightPin: { x: '35%', y: '40%', text: 'Adjustable Headrests' },
    pin2: { x: '75%', y: '60%', text: '360° Swivel Recliner' }
  },
  {
    id: 'curtains',
    name: 'Royal Wave-Fold Curtains',
    subtitle: 'Motorized Architectural Drapes',
    price: 'From ₹1,250 / panel',
    image: '/images/curtains/curtains-01.jpg',
    foam: 'Concealed Motorized Track',
    fabric: 'Belgian Linen Sheer + Blackout',
    depth: 'Custom Height up to 14 ft',
    features: ['Uniform S-wave pleating', 'Smart motorized remote', 'Thermal heat blocking'],
    highlightPin: { x: '20%', y: '40%', text: 'S-Fold Sheer Linen' },
    pin2: { x: '82%', y: '50%', text: 'Thermal Blackout Drapery' }
  },
  {
    id: 'mattress',
    name: 'Grand Orthopedic 7-Zone Mattress',
    subtitle: 'Natural Latex & Pocket Spring',
    price: 'From ₹28,900',
    image: '/images/mattresses/mattress-01.jpg',
    foam: '100% Organic Pin-Core Latex',
    fabric: 'Breathable Quilted Bamboo Cover',
    depth: '12-inch Euro-Top Platform',
    features: ['Zero partner disturbance', 'Doctor recommended 7-zone support', '10-Year sag guarantee'],
    highlightPin: { x: '52%', y: '45%', text: 'Organic Natural Latex' },
    pin2: { x: '72%', y: '30%', text: 'Tufted Velvet Bedframe' }
  },
  {
    id: 'interior-fluted',
    name: 'Acoustic Fluted Oak Paneling',
    subtitle: 'Turnkey Luxury Architectural Wall',
    price: 'From ₹350 / sq ft',
    image: '/images/interiors/interior-01.jpg',
    foam: 'NRC 0.85 Acoustic Core',
    fabric: 'European White Oak Veneer',
    depth: 'Custom Room Dimensions',
    features: ['Sound-dampening acoustic felt', 'Warm 3000K LED channel lights', 'Floating credenza'],
    highlightPin: { x: '55%', y: '38%', text: 'Concealed Warm LED Cove' },
    pin2: { x: '70%', y: '65%', text: 'Floating Credenza' }
  }
];

export default function MotionSensorShowroom() {
  const [activeModel, setActiveModel] = useState(motionSofaModels[0]);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [isCalibratedNotice, setIsCalibratedNotice] = useState(false);

  // Direct DOM Refs for 120fps hardware acceleration (ZERO React re-renders while tilting!)
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const ambientGlowRef = useRef(null);
  const sofaImgRef = useRef(null);
  const specularGlareRef = useRef(null);
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pitchGaugeRef = useRef(null);
  const rollGaugeRef = useRef(null);

  const isVisibleRef = useRef(true);
  const touchStartRef = useRef({ x: 0, y: 0 });

  // High performance sensor hook
  const { motionRef, hasSensor, permissionNeeded, source, calibrate, requestPermission } = useMotionSensor({
    sensitivity: 1.15,
  });

  // Keep motionEnabled in sync with ref and smoothly reset to default when turned off
  useEffect(() => {
    motionRef.current.motionEnabled = motionEnabled;

    if (!motionEnabled) {
      // 1. Reset all physics velocity and angle baselines to 0
      const m = motionRef.current;
      m.targetX = 0;
      m.targetY = 0;
      m.currentX = 0;
      m.currentY = 0;
      m.pitch = 0;
      m.roll = 0;

      // 2. Smoothly animate all DOM elements back to default resting position
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
        cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      }
      if (ambientGlowRef.current) {
        ambientGlowRef.current.style.transition = 'transform 0.45s ease-out';
        ambientGlowRef.current.style.transform = 'translate3d(0px, 0px, 0)';
      }
      if (sofaImgRef.current) {
        sofaImgRef.current.style.transition = 'transform 0.45s ease-out';
        sofaImgRef.current.style.transform = 'scale(1) translate3d(0px, 0px, 0)';
      }
      if (specularGlareRef.current) {
        specularGlareRef.current.style.transition = 'background 0.45s ease-out';
        specularGlareRef.current.style.background = 'radial-gradient(circle 350px at 50% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 75%)';
      }
      if (pin1Ref.current) {
        pin1Ref.current.style.transition = 'transform 0.45s ease-out';
        pin1Ref.current.style.transform = 'translate3d(0px, 0px, 0px)';
      }
      if (pin2Ref.current) {
        pin2Ref.current.style.transition = 'transform 0.45s ease-out';
        pin2Ref.current.style.transform = 'translate3d(0px, 0px, 0px)';
      }
      if (pitchGaugeRef.current) pitchGaugeRef.current.textContent = '0°';
      if (rollGaugeRef.current) rollGaugeRef.current.textContent = '0°';
    } else {
      // When re-enabling motion, clear the slow transition so tracking is instant at 60fps
      const timer = setTimeout(() => {
        if (cardRef.current) cardRef.current.style.transition = 'none';
        if (ambientGlowRef.current) ambientGlowRef.current.style.transition = 'none';
        if (sofaImgRef.current) sofaImgRef.current.style.transition = 'none';
        if (pin1Ref.current) pin1Ref.current.style.transition = 'none';
        if (pin2Ref.current) pin2Ref.current.style.transition = 'none';
      }, 460);
      return () => clearTimeout(timer);
    }
  }, [motionEnabled, motionRef]);

  // Handle Calibrate action
  const handleCalibrate = () => {
    calibrate();
    setIsCalibratedNotice(true);
    setTimeout(() => setIsCalibratedNotice(false), 2000);
  };

  // IntersectionObserver: PAUSE RAF LOOP WHEN SECTION IS OFF-SCREEN TO PREVENT ANY SCROLL LAG!
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 60-120fps Hardware-Accelerated Physics Loop (Direct DOM mutation, no React state overhead)
  useEffect(() => {
    let animId;
    const smoothing = 0.12;

    const renderFrame = () => {
      // If user scrolled away or motion is paused, idle gracefully
      if (isVisibleRef.current && motionRef.current.motionEnabled) {
        const m = motionRef.current;

        // Lerp physics interpolation
        m.currentX += (m.targetX - m.currentX) * smoothing;
        m.currentY += (m.targetY - m.currentY) * smoothing;

        const tiltX = -m.currentY * 13;
        const tiltY = m.currentX * 15;
        const glareX = 50 + (m.currentX * 38);
        const glareY = 50 + (m.currentY * 38);

        // 1. Perspective 3D Tilt Card
        if (cardRef.current) {
          cardRef.current.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(0)`;
        }

        // 2. Ambient room backlight parallax
        if (ambientGlowRef.current) {
          ambientGlowRef.current.style.transform = `translate3d(${(-m.currentX * 22).toFixed(1)}px, ${(-m.currentY * 22).toFixed(1)}px, 0)`;
        }

        // 3. Sofa Image Inner Parallax
        if (sofaImgRef.current) {
          sofaImgRef.current.style.transform = `scale(1.05) translate3d(${(m.currentX * 10).toFixed(1)}px, ${(m.currentY * 9).toFixed(1)}px, 0)`;
        }

        // 4. Specular Glare / Sheen Lighting
        if (specularGlareRef.current) {
          specularGlareRef.current.style.background = `radial-gradient(circle 350px at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 80%)`;
        }

        // 5. Holographic 3D Floating Pins (Independent Depth Layers)
        if (pin1Ref.current) {
          pin1Ref.current.style.transform = `translate3d(${(m.currentX * 20).toFixed(1)}px, ${(m.currentY * 16).toFixed(1)}px, 50px)`;
        }
        if (pin2Ref.current) {
          pin2Ref.current.style.transform = `translate3d(${(m.currentX * 22).toFixed(1)}px, ${(m.currentY * 18).toFixed(1)}px, 50px)`;
        }

        // 6. Direct DOM readout for HUD telemetry gauges (no React re-renders)
        if (pitchGaugeRef.current) {
          pitchGaugeRef.current.textContent = `${m.pitch}°`;
        }
        if (rollGaugeRef.current) {
          rollGaugeRef.current.textContent = `${m.roll}°`;
        }
      }

      animId = requestAnimationFrame(renderFrame);
    };

    animId = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(animId);
  }, [motionRef]);

  // Touch Drag Rotation fallback on mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && !hasSensor) {
      const dx = e.touches[0].clientX - touchStartRef.current.x;
      const dy = e.touches[0].clientY - touchStartRef.current.y;
      const m = motionRef.current;
      m.targetX = Math.max(-1, Math.min(1, m.targetX + dx * 0.005));
      m.targetY = Math.max(-1, Math.min(1, m.targetY + dy * 0.005));
      m.pitch = Math.round(m.targetY * 25);
      m.roll = Math.round(m.targetX * 25);
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const inquiryMsg = `Hello! I am viewing the 3D Motion Sensor Showroom for "${activeModel.name}" (${activeModel.price}):
• Foam: ${activeModel.foam}
• Fabric: ${activeModel.fabric}
• Dimensions: ${activeModel.depth}

Can you share the full catalog, fabric swatches, and quote?`;

  return (
    <section ref={sectionRef} className="section motion-showroom-section" id="motion-showroom">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="motion-status-badge">
            <span className="pulse-dot"></span>
            <Compass size={15} />
            <span>Interactive 3D Motion Sensor Engine</span>
          </div>
          <h2 className="section-title">Motion-Reactive Showroom</h2>
          <p className="section-subtitle">
            Tilt your smartphone in your hand or move your cursor on desktop to inspect dimensional contouring, depth parallax, and specular light sheen in real time.
          </p>
        </div>

        {/* Telemetry Bar & Controls */}
        <div className="motion-telemetry-bar">
          <div className="telemetry-info">
            <div className={`sensor-source-chip ${hasSensor ? 'gyro-active' : ''}`}>
              {hasSensor ? (
                <>
                  <span className="live-radar-dot"></span>
                  <Smartphone size={16} style={{ color: '#25D366' }} />
                  <span>Physical Gyroscope Active</span>
                </>
              ) : (
                <>
                  <Compass size={16} className="text-gold" />
                  <span>Interactive Cursor & Touch Motion</span>
                </>
              )}
            </div>

            <div className="telemetry-gauges">
              <span className="gauge-item">
                <span className="gauge-lbl">Pitch (β):</span>
                <span ref={pitchGaugeRef} className="gauge-val">0°</span>
              </span>
              <span className="gauge-item">
                <span className="gauge-lbl">Roll (γ):</span>
                <span ref={rollGaugeRef} className="gauge-val">0°</span>
              </span>
            </div>
          </div>

          <div className="telemetry-actions">
            <button
              type="button"
              onClick={handleCalibrate}
              className="btn btn--sm telemetry-btn"
              title="Calibrate current position as center (0°, 0°)"
            >
              {isCalibratedNotice ? <Check size={14} style={{ color: '#25D366' }} /> : <RotateCw size={14} />}
              <span>{isCalibratedNotice ? 'Calibrated!' : 'Calibrate'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMotionEnabled(!motionEnabled)}
              className={`btn btn--sm ${motionEnabled ? 'telemetry-btn active' : 'telemetry-btn'}`}
            >
              <span>{motionEnabled ? 'Motion: ON' : 'Motion: PAUSED'}</span>
            </button>

            {permissionNeeded && !hasSensor && (
              <button
                type="button"
                onClick={requestPermission}
                className="btn btn--sm btn--outline telemetry-btn"
                style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
              >
                <Smartphone size={14} />
                <span>Enable Phone Gyro</span>
              </button>
            )}
          </div>
        </div>

        {/* 3D Motion Stage */}
        <div
          className="motion-stage-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{ touchAction: 'pan-y' }}
        >
          {/* Main 3D Perspective Card with direct DOM ref */}
          <div
            ref={cardRef}
            className="motion-3d-card"
            style={{ willChange: 'transform' }}
          >
            {/* Background Parallax Room Light */}
            <div
              ref={ambientGlowRef}
              className="motion-ambient-glow"
              style={{ willChange: 'transform' }}
            />

            {/* Sofa Photo Display */}
            <div className="motion-image-container">
              <img
                ref={sofaImgRef}
                src={activeModel.image}
                alt={activeModel.name}
                className="motion-sofa-img"
                style={{ willChange: 'transform' }}
              />

              {/* Dynamic Specular Glare / Lighting Sheen */}
              <div
                ref={specularGlareRef}
                className="motion-specular-glare"
              />

              {/* Holographic 3D Floating Tags with independent Z-depth parallax */}
              <div
                ref={pin1Ref}
                className="motion-3d-pin pin-1"
                style={{
                  left: activeModel.highlightPin.x,
                  top: activeModel.highlightPin.y,
                  willChange: 'transform',
                }}
              >
                <div className="pin-pulse"></div>
                <span className="pin-text">{activeModel.highlightPin.text}</span>
              </div>

              <div
                ref={pin2Ref}
                className="motion-3d-pin pin-2"
                style={{
                  left: activeModel.pin2.x,
                  top: activeModel.pin2.y,
                  willChange: 'transform',
                }}
              >
                <div className="pin-pulse"></div>
                <span className="pin-text">{activeModel.pin2.text}</span>
              </div>
            </div>

            {/* Holographic HUD Overlay */}
            <div className="motion-card-footer">
              <div>
                <span className="motion-model-tag">{activeModel.subtitle}</span>
                <h3 className="motion-model-name motion-model-title">{activeModel.name}</h3>
              </div>
              <div className="motion-model-price">
                <span className="price-label">Ex-Showroom</span>
                <span className="price-num">{activeModel.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Model Selector Carousel */}
        <div className="motion-models-carousel">
          <span className="switcher-heading">Select Interactive 3D Showcase Model</span>
          <div className="models-selector-grid">
            {motionSofaModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model)}
                className={`model-card-btn ${activeModel.id === model.id ? 'active' : ''}`}
              >
                <div className="model-btn-thumb">
                  <img src={model.image} alt={model.name} />
                </div>
                <div className="model-btn-text">
                  <span className="model-btn-name">{model.name}</span>
                  <span className="model-btn-price">{model.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Technical Anatomy Strip */}
        <div className="motion-specs-strip">
          <div className="motion-spec-card">
            <div className="motion-spec-icon"><Layers size={20} /></div>
            <div>
              <span className="motion-spec-lbl">Structural Cushioning</span>
              <strong className="motion-spec-val">{activeModel.foam}</strong>
            </div>
          </div>
          <div className="motion-spec-card">
            <div className="motion-spec-icon"><Sparkles size={20} /></div>
            <div>
              <span className="motion-spec-lbl">Luxury Upholstery</span>
              <strong className="motion-spec-val">{activeModel.fabric}</strong>
            </div>
          </div>
          <div className="motion-spec-card">
            <div className="motion-spec-icon"><Eye size={20} /></div>
            <div>
              <span className="motion-spec-lbl">Spatial Footprint</span>
              <strong className="motion-spec-val">{activeModel.depth}</strong>
            </div>
          </div>
          <div className="motion-spec-card">
            <div className="motion-spec-icon"><ShieldCheck size={20} /></div>
            <div>
              <span className="motion-spec-lbl">Showroom Warranty</span>
              <strong className="motion-spec-val">10-Year Sag Guarantee</strong>
            </div>
          </div>
        </div>

        {/* WhatsApp Quote Action */}
        <div className="text-center" style={{ marginTop: '36px' }}>
          <a
            href={getWhatsAppLink(inquiryMsg)}
            onClick={(e) => openWhatsApp(inquiryMsg, null, e)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa btn--lg motion-wa-btn"
          >
            <MessageCircle size={20} />
            <span>Enquire About {activeModel.name} on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
