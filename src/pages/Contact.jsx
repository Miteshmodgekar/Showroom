import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { useShowroom } from '../context/ShowroomContext';
import { InstagramIcon } from '../components/SocialIcons';
import './Contact.css';

export default function Contact() {
  const { businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;

  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('Bespoke Sofas');
  const [formMsg, setFormMsg] = useState('');

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const text = `Hello ${business.name}, my name is ${formName || 'a customer'}. I would like to enquire about ${formCategory}.${formMsg ? ` Note: ${formMsg}` : ''}`;
    openWhatsApp(text, business.whatsapp, e);
  };

  const hasRealEmail = business.email && !business.email.includes('example.com');
  const hasRealAddress = business.address && business.address !== 'YOUR FULL ADDRESS';

  return (
    <div className="contact-page">
      {/* ── HERO BANNER ── */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Connect With Us</span>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have questions about custom sofas, foam densities, curtains, or want a personalized quotation? Reach out directly below.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* ── LEFT: CONTACT DETAILS & BUTTONS ── */}
            <div className="contact-info-panel">
              <span className="section-label">Studio Direct Line</span>
              <h2>{business.name}</h2>
              <p className="contact-subtext">
                Speak directly with our team for pricing estimates, fabric swatches, custom dimensions, or wholesale foam requirements.
              </p>

              {/* Action Buttons Row */}
              <div className="contact-primary-actions">
                <a
                  href={`tel:${business.phone}`}
                  className="btn btn--primary btn--md"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppLink("Hello! I would like to enquire about your sofas and furnishings.", business.whatsapp)}
                  onClick={(e) => openWhatsApp("Hello! I would like to enquire about your sofas and furnishings.", business.whatsapp, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--md"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Contact Details List */}
              <div className="contact-details-cards">
                <div className="contact-detail-card">
                  <div className="detail-icon"><Phone size={22} /></div>
                  <div>
                    <span className="detail-title">Telephone / Mobile</span>
                    <a href={`tel:${business.phone}`} className="detail-value">{business.phone}</a>
                    <p className="detail-sub">Direct call for fast assistance</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="detail-icon"><MessageCircle size={22} /></div>
                  <div>
                    <span className="detail-title">WhatsApp Support</span>
                    <a
                      href={getWhatsAppLink("Hi! I would like details on your products and catalogues.", business.whatsapp)}
                      onClick={(e) => openWhatsApp("Hi! I would like details on your products and catalogues.", business.whatsapp, e)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-value"
                    >
                      +{business.whatsapp}
                    </a>
                    <p className="detail-sub">Instant response for pricing, photos & catalogues</p>
                  </div>
                </div>

                {business.social?.instagram && (
                  <div className="contact-detail-card">
                    <div className="detail-icon" style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', color: '#fff' }}>
                      <InstagramIcon size={22} />
                    </div>
                    <div>
                      <span className="detail-title">Instagram Portfolio & Reels</span>
                      <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="detail-value" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span>@cozy_corner26326</span>
                        <span style={{ fontSize: '0.8rem' }}>↗</span>
                      </a>
                      <p className="detail-sub">Daily customer installations, videos & reels</p>
                    </div>
                  </div>
                )}

                {hasRealEmail && (
                  <div className="contact-detail-card">
                    <div className="detail-icon"><Mail size={22} /></div>
                    <div>
                      <span className="detail-title">Email Address</span>
                      <a href={`mailto:${business.email}`} className="detail-value">{business.email}</a>
                    </div>
                  </div>
                )}

                {hasRealAddress ? (
                  <div className="contact-detail-card">
                    <div className="detail-icon"><MapPin size={22} /></div>
                    <div>
                      <span className="detail-title">Location</span>
                      <p className="detail-value">{business.address}</p>
                      <p className="detail-sub">{business.city}, {business.state}</p>
                    </div>
                  </div>
                ) : (
                  <div className="contact-detail-card">
                    <div className="detail-icon"><MapPin size={22} /></div>
                    <div>
                      <span className="detail-title">Service Region</span>
                      <p className="detail-value">{business.city}, {business.state}</p>
                      <p className="detail-sub">Doorstep consultations & home delivery</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT: INSTANT WHATSAPP ENQUIRY CARD ── */}
            <div className="contact-inquiry-panel">
              <div className="inquiry-card">
                <div className="inquiry-card-header">
                  <span className="card-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Sparkles size={13} /> Quick Consultation
                  </span>
                  <h3>Send Direct Enquiry</h3>
                  <p>Choose what you are looking for and get prompt pricing and photos directly on WhatsApp.</p>
                </div>

                <form onSubmit={handleSendInquiry} className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="inquiry-name">Your Name</label>
                    <input
                      id="inquiry-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rahul Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-cat">Product / Requirement</label>
                    <select
                      id="inquiry-cat"
                      className="form-select"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                    >
                      <option value="Bespoke Sofas & Couches">Bespoke Living Sofas & Sectionals</option>
                      <option value="Sofa Cum Beds">Multi-functional Sofa Cum Beds</option>
                      <option value="High-Density Mattress Foam">High-Density Mattress & Cushion Foam</option>
                      <option value="Wave-Fold Motorized Curtains">Wave-Fold Designer Curtains</option>
                      <option value="Full Home Turnkey Interior">Full Home Turnkey Interior</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-msg">Specific Requirements (Optional)</label>
                    <textarea
                      id="inquiry-msg"
                      rows="3"
                      className="form-textarea"
                      placeholder="e.g. Need 3+2 seater in velvet fabric, or 40D foam sheet sizes..."
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn--wa btn--lg w-full" style={{ justifyContent: 'center' }}>
                    <MessageCircle size={18} />
                    <span>Send via WhatsApp</span>
                  </button>
                  <p className="inquiry-note">⚡ Direct connection to our team on WhatsApp with instant response.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
