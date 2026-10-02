import React, { useState, useEffect, useCallback } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, X, Send, MessageSquarePlus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh & Sunita Mehra',
    product: 'Custom 5-Seater L-Sectional (40D Foam)',
    rating: 5,
    quote: 'We spent weeks visiting branded furniture stores that wanted 2.5x the price for mediocre foam. EduFusion built our custom L-shape sofa in just 10 days with genuine 40D high-resilience foam. Two years in, it feels brand new!',
    initials: 'RM',
  },
  {
    id: 2,
    name: 'Vikramaditya Sengupta',
    product: 'Commercial Lounge Sofas & Foam Refills',
    rating: 5,
    quote: 'As an interior architect, cushion density and structural hardwood frames are non-negotiable. Their custom foam cutting accuracy is millimetre-precise, and the fabric tailoring is runway-grade. Absolute perfection.',
    initials: 'VS',
  },
  {
    id: 3,
    name: 'Dr. Ananya Joshi',
    product: 'Daybed Sofa Cum Bed with Orthopedic Base',
    rating: 5,
    quote: 'Dual-purpose sofa beds are usually uncomfortable for guests. The 50D orthopedic core and velvet finish from EduFusion changed everything. It glides open effortlessly and supports the back perfectly.',
    initials: 'AJ',
  },
  {
    id: 4,
    name: 'Suresh & Kavitha Nair',
    product: 'Wave-Fold Motorized Curtains & Interiors',
    rating: 5,
    quote: 'The motorized wave-fold curtains transformed our living room completely. Smooth, silent operation and the blackout lining keeps the room cool. The entire turnkey project was delivered on time and exceeded our expectations.',
    initials: 'KN',
  },
];

/* ── Review Modal ── */
function ReviewModal({ onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!rating) e.rating = 'Please select a star rating.';
    if (!review.trim() || review.trim().length < 20) e.review = 'Review must be at least 20 characters.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmit({ name, product, rating, review });
    setSubmitted(true);
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const starLabel = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  return (
    <div className="review-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="review-modal-title" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="review-modal-card">
        <button className="review-modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>

        {submitted ? (
          <div className="review-success">
            <div className="review-success-icon">🎉</div>
            <h3>Thank you for your review!</h3>
            <p>Your feedback helps others make confident choices. We appreciate you taking the time to share your experience.</p>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="review-modal-header">
              <MessageSquarePlus size={26} className="review-modal-icon" />
              <div>
                <h2 id="review-modal-title" className="review-modal-title">Share Your Experience</h2>
                <p className="review-modal-subtitle">Help others discover quality craftsmanship</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="review-form">
              {/* Star Rating */}
              <div className="review-field">
                <label className="review-label">Your Rating <span className="review-required">*</span></label>
                <div className="review-stars-input" role="radiogroup" aria-label="Star rating">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`review-star-btn ${s <= (hovered || rating) ? 'active' : ''}`}
                      onMouseEnter={() => setHovered(s)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => { setRating(s); setErrors((e) => ({ ...e, rating: undefined })); }}
                      aria-label={`${s} star${s > 1 ? 's' : ''}`}
                    >
                      <Star size={32} fill={s <= (hovered || rating) ? '#c4a35a' : 'none'} color={s <= (hovered || rating) ? '#c4a35a' : '#ccc'} />
                    </button>
                  ))}
                  {(hovered || rating) > 0 && (
                    <span className="review-star-label">{starLabel[hovered || rating]}</span>
                  )}
                </div>
                {errors.rating && <span className="review-error">{errors.rating}</span>}
              </div>

              {/* Name */}
              <div className="review-field">
                <label className="review-label" htmlFor="review-name">Your Name <span className="review-required">*</span></label>
                <input
                  id="review-name"
                  type="text"
                  className={`review-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((er) => ({ ...er, name: undefined })); }}
                />
                {errors.name && <span className="review-error">{errors.name}</span>}
              </div>

              {/* Product */}
              <div className="review-field">
                <label className="review-label" htmlFor="review-product">Product / Service <span className="review-optional">(optional)</span></label>
                <input
                  id="review-product"
                  type="text"
                  className="review-input"
                  placeholder="e.g. Custom L-Sectional Sofa"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </div>

              {/* Review text */}
              <div className="review-field">
                <label className="review-label" htmlFor="review-text">Your Review <span className="review-required">*</span></label>
                <textarea
                  id="review-text"
                  className={`review-textarea ${errors.review ? 'input-error' : ''}`}
                  placeholder="Tell us about your experience — quality, delivery, craftsmanship…"
                  rows={4}
                  value={review}
                  onChange={(e) => { setReview(e.target.value); setErrors((er) => ({ ...er, review: undefined })); }}
                />
                <span className="review-char-count">{review.length} / 500</span>
                {errors.review && <span className="review-error">{errors.review}</span>}
              </div>

              <button type="submit" className="btn btn-primary review-submit-btn" id="review-submit-btn">
                <Send size={16} />
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animDir, setAnimDir] = useState(''); // 'left' | 'right'
  const [showModal, setShowModal] = useState(false);
  const ref = useScrollReveal();

  const goTo = useCallback((idx, dir = 'right') => {
    setAnimDir(dir);
    setTimeout(() => {
      setActiveIdx(idx);
      setAnimDir('');
    }, 50);
  }, []);

  const prev = useCallback(() => {
    const idx = (activeIdx - 1 + testimonials.length) % testimonials.length;
    goTo(idx, 'left');
  }, [activeIdx, goTo]);

  const next = useCallback(() => {
    const idx = (activeIdx + 1) % testimonials.length;
    goTo(idx, 'right');
  }, [activeIdx, goTo]);

  // Auto-advance every 6 seconds — pause when modal is open
  useEffect(() => {
    if (showModal) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, showModal]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  const t = testimonials[activeIdx];

  return (
    <>
      <section className="section testimonials-section" ref={ref}>
        <div className="container">
          {/* Header */}
          <div className="section-header text-center reveal">
            <span className="section-label">Real Home Transformations</span>
            <h2 className="section-title">Loved by 1,200+ Discerning Homeowners</h2>
            <p className="section-subtitle">
              See why homeowners, architects, and interior stylists choose our showroom craftsmanship over mass-produced flatpack furniture.
            </p>
          </div>

          {/* Carousel */}
          <div className="testimonials-carousel reveal delay-2">
            {/* Background decorative quote mark */}
            <div className="testimonial-bg-quote" aria-hidden="true">"</div>

            {/* Active card */}
            <div className={`testimonial-featured ${animDir ? `anim-${animDir}` : ''}`} key={t.id}>
              {/* Stars */}
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#c4a35a" color="#c4a35a" className="star-item" style={{ animationDelay: `${i * 80}ms` }} />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="testimonial-featured-quote">
                "{t.quote}"
              </blockquote>

              {/* Product pill */}
              <div className="verified-product-pill">
                <CheckCircle size={14} className="check-verified" />
                <span>Verified: {t.product}</span>
              </div>

              {/* Author — no location */}
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  <span>{t.initials}</span>
                </div>
                <p className="testimonial-author-name">{t.name}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="testimonials-controls">
              <button
                className="testimonial-ctrl-btn"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="testimonials-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => goTo(i, i > activeIdx ? 'right' : 'left')}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="testimonial-ctrl-btn"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Write a review CTA */}
          <div className="review-cta reveal delay-3">
            <p className="review-cta-text">Had an experience with us?</p>
            <button
              id="write-review-btn"
              className="btn btn-outline-gold review-cta-btn"
              onClick={() => setShowModal(true)}
            >
              <MessageSquarePlus size={18} />
              Write a Review
            </button>
          </div>

          {/* Stats row */}
          <div className="testimonials-stats reveal delay-4">
            {[
              { value: '1,500+', label: 'Homes Styled' },
              { value: '4.9 ★', label: 'Average Rating' },
              { value: '10 Yr', label: 'Sag Guarantee' },
              { value: '48 Hr', label: 'Custom Delivery' },
            ].map((s) => (
              <div key={s.label} className="tstat-item">
                <strong className="tstat-value">{s.value}</strong>
                <span className="tstat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showModal && (
        <ReviewModal
          onClose={() => setShowModal(false)}
          onSubmit={(data) => {
            console.log('New review submitted:', data);
            // Future: POST to backend / store in state
          }}
        />
      )}
    </>
  );
}
