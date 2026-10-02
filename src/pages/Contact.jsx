import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { useShowroom } from '../context/ShowroomContext';
import { InstagramIcon } from '../components/SocialIcons';
import './Contact.css';

export default function Contact() {
  const { businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name} ${business.address} ${business.city}`
  )}`;

  return (
    <div className="contact-page">
      {/* ── HERO BANNER ── */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Connect With Us</span>
          <h1 className="section-title">Contact & Showroom Visit</h1>
          <p className="section-subtitle">
            Have questions about custom sofas, foam densities, or want to schedule a showroom visit? Reach us directly below.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* ── LEFT: CONTACT DETAILS & BUTTONS ── */}
            <div className="contact-info-panel">
              <span className="section-label">Showroom Information</span>
              <h2>{business.name}</h2>
              <p className="contact-subtext">
                Speak directly with our team for enquiries, pricing estimates, fabric swatches, or wholesale foam requirements.
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
                  href={getWhatsAppLink("Hello! I would like to contact your showroom directly.", business.whatsapp)}
                  onClick={(e) => openWhatsApp("Hello! I would like to contact your showroom directly.", business.whatsapp, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--md"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--md"
                >
                  <Navigation size={18} />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Contact Details List */}
              <div className="contact-details-cards">
                <div className="contact-detail-card">
                  <div className="detail-icon"><MapPin size={22} /></div>
                  <div>
                    <span className="detail-title">Showroom Address</span>
                    <p className="detail-value">{business.address}</p>
                    <p className="detail-sub">{business.city}, {business.state} - {business.pincode}</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="detail-icon"><Phone size={22} /></div>
                  <div>
                    <span className="detail-title">Telephone / Mobile</span>
                    <a href={`tel:${business.phone}`} className="detail-value">{business.phone}</a>
                    <p className="detail-sub">Mon-Sat during business hours</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="detail-icon"><MessageCircle size={22} /></div>
                  <div>
                    <span className="detail-title">WhatsApp Support</span>
                    <p className="detail-value">+{business.whatsapp}</p>
                    <p className="detail-sub">Instant response for pricing & catalogues</p>
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

                <div className="contact-detail-card">
                  <div className="detail-icon"><Mail size={22} /></div>
                  <div>
                    <span className="detail-title">Email Address</span>
                    <a href={`mailto:${business.email}`} className="detail-value">{business.email}</a>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="detail-icon"><Clock size={22} /></div>
                  <div>
                    <span className="detail-title">Showroom Hours</span>
                    <p className="detail-value">{business.businessHours.weekdays}</p>
                    <p className="detail-sub">{business.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: MAP LOCATION PLACEHOLDER ── */}
            <div className="contact-map-panel">
              <div className="map-wrapper">
                {business.mapEmbedUrl ? (
                  <iframe
                    title="Showroom Location Map"
                    src={business.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                ) : (
                  <div className="map-placeholder-box">
                    <MapPin size={48} className="map-placeholder-icon" />
                    <h3>Showroom Location Map</h3>
                    <p className="map-placeholder-addr">{business.address}, {business.city}</p>
                    <span className="map-placeholder-note">
                      (To display a live map, paste your Google Maps Embed URL into <code>src/config/business.js</code>)
                    </span>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm"
                      style={{ marginTop: '16px' }}
                    >
                      <Navigation size={16} />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
