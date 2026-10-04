import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Sparkles, MessageCircle, Phone, Check } from 'lucide-react';
import { getProductById as getFallbackProduct } from '../data/products';
import { useShowroom } from '../context/ShowroomContext';
import { business as defaultBusiness, getProductWhatsAppLink, getProductWhatsAppMessage, openWhatsApp } from '../config/business';
import ProductImage from '../components/ProductImage';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const { getProductById, businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const product = (getProductById ? getProductById(id) : null) || getFallbackProduct(id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '16px' }}>Product Not Found</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            The requested product catalogue item does not exist or has been removed.
          </p>
          <Link to="/products" className="btn btn--primary">
            <ArrowLeft size={16} />
            <span>Return to Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    category,
    subcategory,
    description,
    images = [],
    colors = [],
    specifications = {},
    features = [],
  } = product;

  const currentImage = images[activeImageIndex] || images[0] || '';

  return (
    <div className="product-details-page">
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + 24px)', paddingBottom: '60px' }}>
        {/* Back Link */}
        <Link to="/products" className="back-link">
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </Link>

        <div className="product-details-grid">
          {/* ── LEFT: IMAGE & GALLERY ── */}
          <div className="product-gallery-section">
            <div className="product-main-image-box">
              <ProductImage src={currentImage} alt={name} category={category} />
            </div>

            {images.length > 1 && (
              <div className="product-thumbnails">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <ProductImage src={img} alt={`${name} preview ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Assurance Card */}
            <div className="showroom-guarantee-card">
              <div className="guarantee-item">
                <Shield size={20} className="text-gold" />
                <div>
                  <strong>Genuine Materials</strong>
                  <p>Certified high-resilience foam and durable wood frame</p>
                </div>
              </div>
              <div className="guarantee-item">
                <Sparkles size={20} className="text-gold" />
                <div>
                  <strong>Customisable Options</strong>
                  <p>Available in your preferred fabric, colour and size</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: DETAILS & ACTIONS ── */}
          <div className="product-info-section">
            <div className="product-header-tags">
              <span className="category-pill">{category.toUpperCase()}</span>
              {subcategory && <span className="subcategory-pill">{subcategory}</span>}
            </div>

            <h1 className="product-detail-title">{name}</h1>

            <div className="product-details-pricing-row" style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '14px 0 20px', flexWrap: 'wrap' }}>
              {product.price && (
                <div className="price-tag-badge" style={{ fontSize: '1.25rem', fontWeight: 700, padding: '8px 18px', background: 'var(--color-primary-bg)', color: 'var(--color-text)', borderRadius: 'var(--radius-full)', border: '1px solid rgba(196,163,90,0.3)' }}>
                  <span>{product.price}</span>
                </div>
              )}
              {product.rating && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  <span style={{ color: '#c4a35a', fontSize: '1.1rem' }}>★</span>
                  <strong style={{ color: 'var(--color-text)' }}>{product.rating}</strong>
                  <span>({product.reviewsCount || 48} showroom reviews)</span>
                </div>
              )}
            </div>

            <div className="product-detail-desc">
              <p>{description}</p>
            </div>

            {/* Colors list if any */}
            {colors.length > 0 && (
              <div className="product-colors-box">
                <h4>Available Colours / Shades:</h4>
                <div className="color-chips">
                  {colors.map((c, i) => (
                    <span key={i} className="color-chip">{c}</span>
                  ))}
                </div>
              </div>
            )}

            {/* ── ACTION BUTTONS ── */}
            <div className="detail-action-buttons">
              <a
                href={getProductWhatsAppLink(name, price)}
                onClick={(e) => openWhatsApp(getProductWhatsAppMessage(name, price), business.whatsapp, e)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa btn--lg w-full-mobile"
              >
                <MessageCircle size={22} />
                <span>Order / Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="btn btn--outline btn--lg w-full-mobile"
              >
                <Phone size={20} />
                <span>Call Us Direct</span>
              </a>
            </div>

            {/* Specifications Table */}
            {Object.keys(specifications).length > 0 && (
              <div className="specs-container">
                <h3>Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-key">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Features Checklist */}
            {features.length > 0 && (
              <div className="features-checklist-box">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {features.map((feat, i) => (
                    <li key={i}>
                      <Check size={18} className="feature-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
