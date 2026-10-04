import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { useShowroom } from '../context/ShowroomContext';
import { categories } from '../data/products';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const { businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        {/* Col 1: About & Info */}
        <div className="footer-col footer-col--brand">
          <div className="footer-brand">
            <img
              src={business.logo || "/images/logo/cozycorner-logo.png"}
              alt={business.name}
              className="footer-brand-logo-img"
            />
            <span className="footer-brand-name">{business.name}</span>
          </div>
          <p className="footer-desc">
            {business.description}
          </p>
          <div className="footer-social-links">
            {business.social?.instagram && (
              <a 
                href={business.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                title="Follow @cozy_corner26326 on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            )}
            {business.social?.facebook && (
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
            )}
            {business.social?.youtube && (
              <a href={business.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Showroom Gallery</Link></li>
            <li><Link to="/contact">Contact & Enquiry</Link></li>
            <li><Link to="/admin" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>🔒 Owner / Staff Portal</Link></li>
          </ul>
        </div>

        {/* Col 3: Categories */}
        <div className="footer-col">
          <h4 className="footer-col-title">Product Categories</h4>
          <ul className="footer-links">
            {categories.filter(c => c.id !== 'all').map((cat) => (
              <li key={cat.id}>
                <Link to={`/products?category=${cat.id}`}>{cat.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Showroom Details */}
        <div className="footer-col footer-col--contact">
          <h4 className="footer-col-title">Showroom Info</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>
                {business.address && business.address !== 'YOUR FULL ADDRESS'
                  ? `${business.address}, ${business.city}`
                  : `${business.city}, ${business.state}`}
              </span>
            </li>
            <li>
              <Phone size={18} className="footer-icon" />
              <a href={`tel:${business.phone}`}>{business.phone}</a>
            </li>
            {business.email && !business.email.includes('example.com') && (
              <li>
                <Mail size={18} className="footer-icon" />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
            )}
          </ul>

          <div style={{ marginTop: '16px' }}>
            <a
              href={getWhatsAppLink("Hello! I want to enquire about sofas & foam.", business.whatsapp)}
              onClick={(e) => openWhatsApp("Hello! I want to enquire about sofas & foam.", business.whatsapp, e)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--sm"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} {business.name}. All Rights Reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <p className="footer-disclaimer">Premium Digital Showroom & Catalogue</p>
            <Link to="/admin" title="Staff Portal" style={{ opacity: 0.4, color: 'inherit', textDecoration: 'none', fontSize: '0.75rem' }}>⚙️ Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
