import React from 'react';
import { Link } from 'react-router-dom';
import { Award, HeartHandshake, Layers, Palette, CircleDollarSign, Headphones, MessageCircle, MapPin, Phone } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { useShowroom } from '../context/ShowroomContext';
import './About.css';

export default function About() {
  const { businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const reasons = [
    {
      icon: <Award size={28} />,
      title: "Quality Products",
      desc: "We supply only durable frames, high-density foam, and premium upholstery fabrics built to last."
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Reliable Service",
      desc: "Transparent guidance, timely delivery, and dedicated customer relationship from showroom to home."
    },
    {
      icon: <Layers size={28} />,
      title: "Wide Selection",
      desc: "Extensive catalogue spanning 3-seaters, L-shapes, sofa cum beds, and assorted density foam blocks."
    },
    {
      icon: <Palette size={28} />,
      title: "Customisation",
      desc: "Modify dimensions, cushion softness, and fabric textures to match your distinct home interior."
    },
    {
      icon: <CircleDollarSign size={28} />,
      title: "Competitive Pricing",
      desc: "Direct dealership rates providing genuine value without sacrificing durability or craftsmanship."
    },
    {
      icon: <Headphones size={28} />,
      title: "Customer Support",
      desc: "Accessible directly via phone and WhatsApp for consultations, queries, and after-purchase support."
    }
  ];

  return (
    <div className="about-page">
      {/* ── HERO BANNER ── */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Story & Mission</span>
          <h1 className="section-title">About {business.name}</h1>
          <p className="section-subtitle">
            Your trusted local dealership for fine sofas, high-resilience foam, and tailored furniture solutions.
          </p>
        </div>
      </div>

      {/* ── BUSINESS INTRODUCTION ── */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <span className="section-label">Showroom Overview</span>
              <h2 className="section-title">Crafting Comfort For Homes & Businesses</h2>
              <p className="about-para">
                <strong>{business.name}</strong> is a dedicated foam and sofa dealership offering top-grade seating solutions and raw foam materials. Whether you are furnishing a new living room, upgrading your existing sofa cushioning, or designing bespoke lounge furniture, we provide high quality products tailored to your preferences.
              </p>
              <p className="about-para">
                We believe that great furniture begins from the inside out — starting with high-density foam that maintains its shape, paired with sturdy frames and upholstery materials that withstand everyday living.
              </p>

              {/* Showroom Specs / Overview */}
              <div className="business-specs-box">
                <div className="about-spec-item">
                  <span className="about-spec-label">Showroom Location</span>
                  <strong className="about-spec-val">
                    {business.address && business.address !== 'YOUR FULL ADDRESS'
                      ? `${business.address}, ${business.city}`
                      : `${business.city}, Karnataka`}
                  </strong>
                </div>
                <div className="about-spec-item">
                  <span className="about-spec-label">Primary Categories</span>
                  <strong className="about-spec-val">Sofas, Sofa Beds, Mattress Foam, Custom Upholstery</strong>
                </div>
                <div className="about-spec-item">
                  <span className="about-spec-label">Service Area</span>
                  <strong className="about-spec-val">{business.city} & Surrounding Regions</strong>
                </div>
                <div className="about-spec-item">
                  <span className="about-spec-label">Business Direct Contact</span>
                  <strong className="about-spec-val">{business.phone}</strong>
                </div>
              </div>

              <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={getWhatsAppLink("Hello! I would like to learn more about your showroom and product offerings.", business.whatsapp)}
                  onClick={(e) => openWhatsApp("Hello! I would like to learn more about your showroom and product offerings.", business.whatsapp, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--md"
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link to="/contact" className="btn btn--outline btn--md">
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            <div className="about-intro-card">
              <div className="showroom-card-inner">
                <span className="card-badge">Digital Showroom</span>
                <h3>Direct Showroom Consultation</h3>
                <p>
                  Visit us in person or reach out digitally on WhatsApp. We provide fabric swatches, foam density samples, and personalised advice to help you select the ideal configuration.
                </p>
                <div className="card-contact-points">
                  <div>
                    <MapPin size={18} className="text-gold" />
                    <span>
                      {business.address && business.address !== 'YOUR FULL ADDRESS'
                        ? business.address
                        : `${business.city}, Karnataka`}
                    </span>
                  </div>
                  <div>
                    <Phone size={18} className="text-gold" />
                    <span>{business.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CUSTOMERS CHOOSE US ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Commitment</span>
            <h2 className="section-title">Why Customers Choose Us</h2>
            <p className="section-subtitle">
              We focus on comfort, durability, and personalised service to ensure your complete satisfaction.
            </p>
          </div>

          <div className="reasons-grid" style={{ marginTop: '48px' }}>
            {reasons.map((item, idx) => (
              <div key={idx} className="reason-card">
                <div className="reason-icon-box">{item.icon}</div>
                <h3 className="reason-title">{item.title}</h3>
                <p className="reason-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
