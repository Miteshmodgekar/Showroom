import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductImage from './ProductImage';
import './Lightbox.css';

export default function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const current = items[activeIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close image">
          <X size={26} />
        </button>

        {items.length > 1 && (
          <>
            <button
              className="lightbox-nav-btn lightbox-prev"
              onClick={onPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="lightbox-nav-btn lightbox-next"
              onClick={onNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        <div className="lightbox-img-wrapper">
          <ProductImage
            src={current.src}
            alt={current.title}
            className="lightbox-img"
          />
        </div>

        <div className="lightbox-caption">
          <h3>{current.title}</h3>
          <p>{current.category} • {current.description}</p>
        </div>
      </div>
    </div>
  );
}
