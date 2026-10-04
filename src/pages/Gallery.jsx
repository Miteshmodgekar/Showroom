import React, { useState, useMemo } from 'react';
import { Eye, MessageCircle, Play, Video, Sparkles } from 'lucide-react';
import { business as defaultBusiness, getWhatsAppLink, openWhatsApp } from '../config/business';
import { useShowroom } from '../context/ShowroomContext';
import { InstagramIcon } from '../components/SocialIcons';
import ProductImage from '../components/ProductImage';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

export const galleryCategories = [
  { id: 'all', label: 'All Works' },
  { id: 'Sofas', label: 'Bespoke Sofas' },
  { id: 'Curtains', label: 'Designer Curtains' },
  { id: 'Mattresses', label: 'Orthopedic Mattresses' },
  { id: 'Interiors', label: 'Turnkey Interiors' },
  { id: 'Videos', label: 'Video Showcase 🎥' },
];

export const galleryItems = [
  {
    id: 'g-1',
    title: 'The Grand Horizon U-Shape Sectional & Cocktail Ottoman',
    category: 'Sofas',
    src: '/images/real_work/sofa-u-sectional-slate.jpg',
    description: 'Bespoke smoke slate velvet U-sectional with vertical fluted backrest, dual chaise wings, gold electroplated stiletto legs, and matching cocktail ottoman.'
  },
  {
    id: 'g-2',
    title: 'Milano Italian Leather Living Suite & Recliner',
    category: 'Sofas',
    src: '/images/real_work/lounge-milano-leather-suite.jpg',
    description: 'Top-grain almond Italian leather lounge suite with ratchet headrests, high-back swivel recliner, and bespoke marble table.'
  },
  {
    id: 'g-3',
    title: 'Royal Fluted Ivory L-Sectional & Velvet Coffee Table',
    category: 'Sofas',
    src: '/images/real_work/sofa-fluted-ivory-l.jpg',
    description: 'Continuous vertical channel tufted ivory velvet corner suite with signature diamond gold accents and matching glass-top ottoman.'
  },
  {
    id: 'g-4',
    title: 'Sovereign Pearl Grey Modular Suite',
    category: 'Sofas',
    src: '/images/real_work/sofa-executive-grey-l.jpg',
    description: 'Contemporary deep-seated grey suede modular suite with segmented bolster headrests and gold block feet.'
  },
  {
    id: 'g-5',
    title: 'Milano 2-Seater Italian Loveseat Detail',
    category: 'Sofas',
    src: '/images/real_work/lounge-loveseat-detail.jpg',
    description: 'Precision French seam stitching and articulating neck cushions on almond leather loveseat.'
  },
  {
    id: 'g-6',
    title: 'Royal Navy & Cream Double-Layer Pinch-Pleat Drapery',
    category: 'Curtains',
    src: '/images/real_work/curtains-navy-pinchpleat.jpg',
    description: 'Textured royal navy jacquard blackout curtains with satin tiebacks, sheer white linen, and solid teak bed.'
  },
  {
    id: 'g-7',
    title: 'Champagne Metallic Drapes & Custom Pelmet Box',
    category: 'Curtains',
    src: '/images/real_work/curtains-champagne-pelmet.jpg',
    description: 'Channel-quilted fabric pelmet valance box concealing ceiling tracks with ripple-fold sheer drapes.'
  },
  {
    id: 'g-8',
    title: 'Bespoke Backlit Halo Feature Wall & Headboard',
    category: 'Interiors',
    src: '/images/real_work/interior-bedroom-illuminated-halo.jpg',
    description: 'Monumental circular floral acoustic wall medallion with 360-degree ambient warm LED backlight and leatherette headboard.'
  },
  {
    id: 'g-9',
    title: 'Master Orthopedic Suite & Fluted Mirror Wall',
    category: 'Mattresses',
    src: '/images/real_work/mattress-luxury-master-suite.jpg',
    description: 'Deep-quilted 7-zone orthopedic mattress, caramel leatherette headboard, and fluted dressing mirror with cove LED.'
  },
  {
    id: 'g-10',
    title: 'Botanical TV Wall, Fluted Oak Console & Recliner',
    category: 'Interiors',
    src: '/images/real_work/interior-tv-entertainment-wall.jpg',
    description: 'Botanical accent wall behind TV, custom floating fluted oak credenza, and sage leather swivel recliner.'
  },
  {
    id: 'g-11',
    title: 'Grand Hall Triple Pelmet Drapes & Wall Medallion',
    category: 'Interiors',
    src: '/images/real_work/interior-living-hall-drapery.jpg',
    description: 'Turnkey villa living hall with 3 coordinated window pelmet treatments and illuminated teak wood medallion.'
  },
  {
    id: 'g-12',
    title: 'Integrated Living & Dining Open Concept',
    category: 'Interiors',
    src: '/images/real_work/interior-living-dining-view.jpg',
    description: 'Harmonious coordination of Italian marble dining, fluted wooden entrance doors, and living suite.'
  },
  {
    id: 'g-13',
    title: 'CozyCorner Craftsmanship & Installation Video Tour',
    category: 'Videos',
    isVideo: true,
    videoSrc: '/images/real_work/video-cozycorner-craftsmanship.mp4',
    src: '/images/real_work/sofa-u-sectional-slate.jpg',
    description: 'Live video walkthrough inspecting velvet sheen, high-resilience foam rebound, and seamless stitching.'
  }
];

export default function Gallery() {
  const { gallery, businessInfo } = useShowroom();
  const business = businessInfo || defaultBusiness;
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const displayList = (gallery && gallery.length > 0) ? gallery : galleryItems;

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return displayList;
    return displayList.filter((item) => item.category === activeCategory);
  }, [activeCategory, displayList]);

  const openLightbox = (index) => {
    // If it's a video, let user play video directly on card
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="gallery-page">
      {/* ── HERO BANNER ── */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Real Client Projects</span>
          <h1 className="section-title">Photo & Video Showcase</h1>
          <p className="section-subtitle">
            Authentic photographs and live video walkthroughs of completed residential installations, custom sofa suites, designer curtains, and turnkey interior styling by CozyCorner Interiors.
          </p>
        </div>
      </div>

      {/* ── FEATURED VIDEO SHOWCASE SECTION ── */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="gallery-featured-card">
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', background: '#000' }}>
              <video
                controls
                playsInline
                preload="metadata"
                style={{ width: '100%', height: 'auto', maxHeight: '420px', display: 'block', objectFit: 'cover' }}
                poster="/images/real_work/sofa-u-sectional-slate.jpg"
              >
                <source src="/images/real_work/video-cozycorner-craftsmanship.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.4)', color: 'var(--color-accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
                <Video size={16} />
                <span>Live Residential Walkthrough</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: '#ffffff', marginBottom: '14px', lineHeight: 1.25 }}>
                See Real Craftsmanship In Motion
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '20px', fontSize: '0.95rem' }}>
                Take a close look at our actual residential installations. From high-sheen Italian velvet upholstery to seamless vertical fluting and durable 40D/45D high-resilience foam rebound. No 3D mockups—just real master craftsmanship.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={getWhatsAppLink("Hello CozyCorner! I watched your video walkthrough and would love to get a quote for my home.", business.whatsapp)}
                  onClick={(e) => openWhatsApp("Hello CozyCorner! I watched your video walkthrough and would love to get a quote for my home.", business.whatsapp, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--md"
                >
                  <MessageCircle size={18} />
                  <span>Book Free Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          {/* Category filter pills */}
          <div className="filter-bar">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card fade-up"
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-card-img">
                  {item.isVideo ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <ProductImage src={item.src} alt={item.title} />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                          <Play size={24} style={{ marginLeft: '3px' }} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ProductImage src={item.src} alt={item.title} />
                  )}
                  <div className="gallery-card-overlay">
                    <span className="gallery-zoom-badge">
                      {item.isVideo ? <Play size={18} /> : <Eye size={18} />}
                      <span>{item.isVideo ? 'Play Video' : 'Enlarge'}</span>
                    </span>
                  </div>
                </div>
                <div className="gallery-card-caption">
                  <span className="gallery-card-cat">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '4px', lineHeight: 1.4 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom WhatsApp & Instagram Consult */}
          <div className="gallery-bottom-cta">
            <h3>Love One of These Real Setups?</h3>
            <p>Send us a photo on WhatsApp or check out our daily reel walkthroughs on Instagram. Our master craftsmen will customize the exact dimensions, fabric, and foam density for your living space.</p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '18px' }}>
              <a
                href={getWhatsAppLink("Hello! I saw an item in your gallery and would like to check price and availability.", business.whatsapp)}
                onClick={(e) => openWhatsApp("Hello! I saw an item in your gallery and would like to check price and availability.", business.whatsapp, e)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa btn--md"
              >
                <MessageCircle size={18} />
                <span>Discuss on WhatsApp</span>
              </a>

              {business.social?.instagram && (
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--md"
                  style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
                >
                  <InstagramIcon size={18} />
                  <span>Follow @cozy_corner26326</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
