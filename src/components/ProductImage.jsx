import React, { useState } from 'react';
import { Armchair } from 'lucide-react';

export default function ProductImage({ src, alt, className = '', category = 'sofas' }) {
  const [hasError, setHasError] = useState(false);

  // Fallback visual aesthetic if local image file is not present yet
  if (hasError || !src) {
    return (
      <div className={`img-placeholder ${className}`}>
        <div style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: 'rgba(139, 105, 20, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-primary)',
          marginBottom: '8px'
        }}>
          <Armchair size={28} />
        </div>
        <span style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          {alt || 'Product Image'}
        </span>
        <span style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>
          Digital Showroom Item
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
