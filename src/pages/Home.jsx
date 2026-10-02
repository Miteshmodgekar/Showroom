import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Sliders, Truck, Star, MapPin, CheckCircle2, Compass } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { featuredProducts as defaultFeatured } from '../data/products';
import { useShowroom } from '../context/ShowroomContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductCard from '../components/ProductCard';
import SofaStudioConfigurator from '../components/SofaStudioConfigurator';
import MotionSensorShowroom from '../components/MotionSensorShowroom';
import FoamCalculator from '../components/FoamCalculator';
import FoamAnatomy from '../components/FoamAnatomy';
import TestimonialsSection from '../components/TestimonialsSection';
import './Home.css';

export default function Home() {
  const { products, businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const [heroSwatch, setHeroSwatch] = useState('Emerald Velvet');
  const featuredRef = useScrollReveal();
  const categoriesRef = useScrollReveal();
  const featuresRef = useScrollReveal();

  const featured = (products && products.length > 0)
    ? (products.filter(p => p.featured).length > 0 ? products.filter(p => p.featured) : products)
    : defaultFeatured;

  const categoryHighlights = [
    {
      id: 'sofas',
      title: 'Luxury Sofas & Lounges',
      desc: 'Bespoke curved sectionals, Chesterfields, and modular 40D/45D high-resilience suites.',
      image: '/images/sofas/sofa-milano.jpg',
      icon: '🛋️',
      items: ['Curved Bouclé', 'Chesterfield', 'L-Sectionals', 'Deep Seaters'],
    },
    {
      id: 'curtains',
      title: 'Designer Curtains & Drapes',
      desc: 'Floor-to-ceiling wave-fold sheers, motorized blackout drapery, and Roman blinds.',
      image: '/images/curtains/curtains-01.jpg',
      icon: '✨',
      items: ['Wave-Fold Sheers', 'Motorized Drapes', 'Blackout Liners', 'Velvet Panels'],
    },
    {
      id: 'mattresses',
      title: 'Orthopedic Mattresses',
      desc: 'Doctor-recommended 7-zone natural latex, pocket springs, and zero partner disturbance.',
      image: '/images/mattresses/mattress-01.jpg',
      icon: '🛏️',
      items: ['7-Zone Latex', 'Pocket Spring', 'Memory Foam', '10-Yr Warranty'],
    },
    {
      id: 'interiors',
      title: 'Wall Paneling & Turnkey Interiors',
      desc: 'Architectural acoustic fluted oak cladding, custom bed headboards & floating media walls.',
      image: '/images/interiors/interior-01.jpg',
      icon: '🪵',
      items: ['Fluted Oak Panels', 'Concealed LED Coves', 'Custom Headboards', 'Media Consoles'],
    },
    {
      id: 'foam',
      title: 'High-Density Foam Solutions',
      desc: 'Certified 28D to 50D virgin foam cut-to-size for sofas, benches & cushion refills.',
      image: '/images/foam/foam-01.jpg',
      icon: '🧱',
      items: ['28D Plush', '32D Medium', '40D High-Resilience', '50D Rebonded'],
    },
    {
      id: 'sofa-beds',
      title: 'Convertible Sofa Cum Beds',
      desc: 'Effortless glide day-to-night sleeper sofas engineered for compact luxury living.',
      image: '/images/sofa-beds/sofa-bed-01.jpg',
      icon: '📐',
      items: ['Pull-out Sleepers', 'Foldable Beds', 'Dual Purpose', 'Washable Covers'],
    },
  ];

  return (
    <div className="home-page">
      {/* ── CINEMATIC LUXURY HERO SECTION ── */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Hero Left Content */}
            <div className="hero-content">
              <div className="hero-badge-row">
                <span className="hero-tag">
                  <Sparkles size={14} className="hero-tag-icon" />
                  Full-Service Luxury Interior Studio
                </span>
                <span className="hero-rating-badge">
                  <Star size={13} fill="#c4a35a" color="#c4a35a" />
                  <strong>4.9/5</strong> (1,500+ Homes Styled)
                </span>
              </div>

              <h1 className="hero-title">
                Sofas, Curtains, Mattresses &{' '}
                <span className="hero-title-accent">Turnkey Interiors</span>
              </h1>

              <p className="hero-subtitle">
                Complete architectural home transformations. From handcrafted curved sofas and smart motorized wave-fold curtains to certified 7-zone orthopedic mattresses and acoustic fluted wall paneling.
              </p>

              <div className="hero-cta-group">
                <a href="#motion-showroom" className="btn btn--primary btn--lg">
                  <Compass size={18} />
                  <span>3D Motion Sensor Room</span>
                </a>
                <a href="#studio-configurator" className="btn btn--outline btn--lg hero-btn-light">
                  <Sliders size={18} />
                  <span>Sofa Studio</span>
                </a>
                <a
                  href={getWhatsAppLink("Hello! I would like to consult with you about complete home interior works (sofas, curtains, mattresses, wall paneling).", business.whatsapp)}
                  onClick={(e) => openWhatsApp("Hello! I would like to consult with you about complete home interior works (sofas, curtains, mattresses, wall paneling).", business.whatsapp, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--lg"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Interior Concierge</span>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="hero-trust-bar">
                <div className="trust-item">
                  <ShieldCheck size={18} className="trust-icon" />
                  <span>10-Yr Sag Guarantee</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={18} className="trust-icon" />
                  <span>100% Virgin Foam Core</span>
                </div>
                <div className="trust-item">
                  <Sliders size={18} className="trust-icon" />
                  <span>Custom Sizes in 48h</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Showcase */}
            <div className="hero-visual">
              <div className="hero-card-frame">
                <img
                  src="/images/hero/hero-main.jpg"
                  alt="Ultra-luxurious Italian sectional sofa in modern penthouse"
                  className="hero-main-image"
                />
                
                {/* Floating Glass Pill 1 */}
                <div className="hero-floating-pill pill-top-left">
                  <div className="pill-dot"></div>
                  <div>
                    <div className="pill-title">Italian Master Sectional</div>
                    <div className="pill-sub">40D High-Resilience Foam</div>
                  </div>
                </div>

                {/* Floating Glass Pill 2 */}
                <div className="hero-floating-pill pill-bottom-right">
                  <Sparkles size={16} color="#c4a35a" />
                  <div>
                    <div className="pill-title">Seasoned Hardwood Frame</div>
                    <div className="pill-sub">10-Year Sag-Free Guarantee</div>
                  </div>
                </div>

                {/* Interactive Swatch Switcher Overlay */}
                <div className="hero-swatch-panel">
                  <span className="swatch-label">Popular Finish:</span>
                  <div className="swatch-chips">
                    {[
                      { name: 'Emerald Velvet', color: '#2d4739' },
                      { name: 'Warm Cream Bouclé', color: '#e8e2d5' },
                      { name: 'Cognac Saddle Leather', color: '#6b3e26' },
                      { name: 'Charcoal Linen', color: '#34383c' },
                    ].map((sw) => (
                      <button
                        key={sw.name}
                        type="button"
                        onClick={() => setHeroSwatch(sw.name)}
                        className={`hero-swatch-dot ${heroSwatch === sw.name ? 'active' : ''}`}
                        style={{ backgroundColor: sw.color }}
                        title={sw.name}
                      />
                    ))}
                  </div>
                  <span className="selected-swatch-name">{heroSwatch}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT BAR ── */}
      <section className="features-bar">
        <div className="container features-grid" ref={featuresRef}>
          <div className="feature-item reveal">
            <div className="feature-icon"><ShieldCheck size={24} /></div>
            <div>
              <h4>Handcrafted Luxury Sofas</h4>
              <p>40D–45D sag-free high-resilience core</p>
            </div>
          </div>
          <div className="feature-item reveal delay-2">
            <div className="feature-icon"><Sparkles size={24} /></div>
            <div>
              <h4>Designer Curtains & Drapes</h4>
              <p>Motorized wave-fold sheers & blackouts</p>
            </div>
          </div>
          <div className="feature-item reveal delay-3">
            <div className="feature-icon"><Sliders size={24} /></div>
            <div>
              <h4>Orthopedic 7-Zone Mattresses</h4>
              <p>Natural latex & zero-disturbance springs</p>
            </div>
          </div>
          <div className="feature-item reveal delay-4">
            <div className="feature-icon"><Truck size={24} /></div>
            <div>
              <h4>Acoustic Wall Paneling & Interiors</h4>
              <p>Fluted wood & turnkey bespoke styling</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE 3D MOTION SENSOR SHOWROOM ── */}
      <MotionSensorShowroom />

      {/* ── INTERACTIVE 3D SOFA STUDIO CONFIGURATOR ── */}
      <SofaStudioConfigurator />

      {/* ── FEATURED PRODUCTS COLLECTION ── */}
      <section className="section" id="featured-collection">
        <div className="container" ref={featuredRef}>
          <div className="section-header text-center reveal">
            <span className="section-label">Showroom Highlights</span>
            <div className="gold-divider" />
            <h2 className="section-title">Masterpiece Collection</h2>
            <p className="section-subtitle">
              Inspect our most coveted living room centrepieces. Built with certified high-density foam, premium fabrics, and heirloom frames.
            </p>
          </div>

          <div className="products-grid" style={{ marginTop: '40px' }}>
            {featured.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/products" className="btn btn--outline btn--lg">
              <span>View Full Catalogue ({products?.length || featured.length}+ Models)</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CUT-TO-SIZE FOAM CALCULATOR ── */}
      <FoamCalculator />

      {/* ── FOAM ANATOMY & LONGEVITY BREAKDOWN ── */}
      <FoamAnatomy />

      {/* ── PRODUCT CATEGORIES CAROUSEL/GRID ── */}
      <section className="section section--alt">
        <div className="container" ref={categoriesRef}>
          <div className="section-header text-center reveal">
            <span className="section-label">Explore by Category</span>
            <div className="gold-divider" />
            <h2 className="section-title">Everything For Your Living Space</h2>
            <p className="section-subtitle">
              From modular living suites to precision cut-to-size foam blocks, discover our full manufacturing catalogue.
            </p>
          </div>

          <div className="categories-grid" style={{ marginTop: '40px' }}>
            {categoryHighlights.map((cat, idx) => (
              <div key={cat.id} className={`category-card category-card--with-thumb reveal delay-${(idx % 4) + 1}`}>
                <div className="category-card__thumb-holder">
                  <img src={cat.image} alt={cat.title} className="category-card__thumb" />
                  <div className="category-card__icon-badge">{cat.icon}</div>
                </div>
                <div className="category-card__body">
                  <h3 className="category-card__title">{cat.title}</h3>
                  <p className="category-card__desc">{cat.desc}</p>
                  <div className="category-card__tags">
                    {cat.items.map((sub, i) => (
                      <span key={i} className="category-tag">{sub}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <Link to={`/products?category=${cat.id}`} className="category-card__link">
                      <span>Explore {cat.title}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── CUSTOM ORDER & SHOWROOM VISIT CALLOUT ── */}
      <section className="section custom-cta-section">
        <div className="container">
          <div className="custom-cta-box">
            <div className="custom-cta-text">
              <span className="section-label" style={{ color: 'var(--color-accent)' }}>Bespoke Craftsmanship</span>
              <h2 style={{ color: '#ffffff', marginBottom: '14px', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                Have a Reference Design or Custom Space?
              </h2>
              <p style={{ color: '#d4ccc2', maxWidth: '620px', marginBottom: '28px', lineHeight: 1.7 }}>
                Share your architectural floor plan, reference Pinterest/Instagram photo, or exact foam dimensions. Our master craftsmen will prepare a detailed quotation with complimentary fabric swatches.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={getWhatsAppLink("Hello! I have a reference photo / custom dimensions for a sofa order. Can we discuss?", business.whatsapp)}
                  onClick={(e) => openWhatsApp("Hello! I have a reference photo / custom dimensions for a sofa order. Can we discuss?", business.whatsapp, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--lg"
                >
                  <MessageCircle size={18} />
                  <span>Send Reference Photo on WhatsApp</span>
                </a>
                <Link to="/contact" className="btn btn--outline btn--lg" style={{ color: '#fff', borderColor: '#fff' }}>
                  <MapPin size={18} />
                  <span>Visit Showroom & Workshop</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
