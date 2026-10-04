import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { useShowroom } from '../context/ShowroomContext';
import { InstagramIcon } from './SocialIcons';
import './Navbar.css';

export default function Navbar() {
  const { businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-highlight">INTERIOR STUDIO</span>
            <span>Bespoke Sofas, Wave-Fold Curtains, Orthopedic Mattresses & Full Home Interiors</span>
          </div>
          <div className="top-bar-right desktop-only">
            <a href={`tel:${business.phone}`} className="top-bar-phone">
              <Phone size={12} />
              <span>{business.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-logo-mark">
            <img
              src={business.logo || "/images/logo/cozycorner-logo.png"}
              alt={business.name}
              className="brand-logo-img"
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">{business.name}</span>
            <span className="brand-tagline">Sofas • Curtains • Mattresses • Interiors</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-nav desktop-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Right CTA */}
        <div className="navbar-cta desktop-only">
          {business.social?.instagram && (
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="btn btn--outline btn--sm"
              title="Follow @cozy_corner26326 on Instagram"
              style={{
                padding: '8px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderColor: 'rgba(196,163,90,0.35)',
                color: 'var(--color-text)'
              }}
            >
              <InstagramIcon size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Instagram</span>
            </a>
          )}

          <a
            href={getWhatsAppLink("Hi, I would like to enquire about your sofas and foam products.", business.whatsapp)}
            onClick={(e) => openWhatsApp("Hi, I would like to enquire about your sofas and foam products.", business.whatsapp, e)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa btn--sm"
          >
            <MessageCircle size={17} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="mobile-header-actions">
          <a
            href={getWhatsAppLink("", business.whatsapp)}
            onClick={(e) => openWhatsApp("", business.whatsapp, e)}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-quick-wa"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <button
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links">
            <NavLink to="/" end className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Products & Catalogue
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Showroom Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Contact Us
            </NavLink>
          </nav>

          <div className="mobile-drawer-cta">
            <a
              href={getWhatsAppLink("", business.whatsapp)}
              onClick={(e) => openWhatsApp("", business.whatsapp, e)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--lg w-full"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>

            {business.social?.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--lg w-full"
              >
                <InstagramIcon size={18} />
                <span>Follow on Instagram</span>
              </a>
            )}

            <a href={`tel:${business.phone}`} className="btn btn--outline btn--lg w-full">
              <Phone size={18} />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
