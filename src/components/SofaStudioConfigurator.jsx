import React, { useState, useEffect } from 'react';
import { Check, Sparkles, MessageCircle, Layers } from 'lucide-react';
import { getWhatsAppLink, openWhatsApp } from '../config/business';
import './SofaStudioConfigurator.css';

const silhouettes = [
  {
    id: '3-seater',
    name: '3-Seater Signature',
    basePrice: 24500,
    dimensions: '82" W × 36" D × 34" H',
    image: '/images/sofas/sofa-01.jpg',
    tag: 'Most Popular'
  },
  {
    id: 'sectional-l',
    name: 'Sectional L-Shape Lounger',
    basePrice: 52000,
    dimensions: '110" W × 68" D × 33" H',
    image: '/images/sofas/sofa-03.jpg',
    tag: 'Spacious Luxury'
  },
  {
    id: '5-seater-suite',
    name: '5-Seater Master Suite',
    basePrice: 48900,
    dimensions: '124" W × 38" D × 35" H',
    image: '/images/sofas/sofa-02.jpg',
    tag: 'Grand Living'
  },
  {
    id: 'sofa-bed',
    name: 'Day-to-Night Sofa Bed',
    basePrice: 21900,
    dimensions: '78" W × 38" D (Opens to Queen)',
    image: '/images/sofa-beds/sofa-bed-01.jpg',
    tag: 'Dual Function'
  }
];

const fabrics = [
  {
    id: 'italian-velvet',
    name: 'Italian Royal Velvet',
    texture: 'Ultra-soft, stain-resistant sheen',
    colorHex: '#2d4739',
    colorName: 'Emerald Green',
    priceOffset: 3500,
    previewImage: '/images/sofas/fabric-emerald-velvet.jpg',
  },
  {
    id: 'boucle-cream',
    name: 'Textured Cloud Bouclé',
    texture: 'Tactile, cosy European weave',
    colorHex: '#e8e2d5',
    colorName: 'Warm Ecru',
    priceOffset: 2500,
    previewImage: '/images/sofas/fabric-boucle-cream.jpg',
  },
  {
    id: 'linen-sand',
    name: 'Belgian Pure Linen',
    texture: 'Breathable, relaxed organic luxury',
    colorHex: '#d1be9d',
    colorName: 'Natural Sand',
    priceOffset: 2000,
    previewImage: '/images/sofas/fabric-linen-sand.jpg',
  },
  {
    id: 'saddle-leatherette',
    name: 'Vintage Saddle Vegan Leather',
    texture: 'Rich grain, easy-wipe durability',
    colorHex: '#6b3e26',
    colorName: 'Cognac Brown',
    priceOffset: 4000,
    previewImage: '/images/sofas/fabric-cognac-leather.jpg',
  },
  {
    id: 'charcoal-matte',
    name: 'Architectural Charcoal Weave',
    texture: 'High abrasion resistance (50k rubs)',
    colorHex: '#34383c',
    colorName: 'Deep Charcoal',
    priceOffset: 1500,
    previewImage: '/images/sofas/fabric-charcoal-weave.jpg',
  },
];

const foamCores = [
  { id: '32d', name: '32D Medium Plush', feel: 'Soft & Cradling, ideal for gentle lounging', priceOffset: 0, warranty: '5 Years' },
  { id: '40d-hr', name: '40D High-Resilience (Recommended)', feel: 'Instant bounce-back, no sagging, ergonomic posture', priceOffset: 3000, warranty: '10 Years' },
  { id: 'dual-memory', name: 'Dual-Core Ortho + Memory Top', feel: 'Orthopedic firm base with cloud-soft memory cushion', priceOffset: 5500, warranty: '10 Years' }
];

const legFinishes = [
  { id: 'brass-gold', name: 'Brushed Champagne Gold', code: '#d4af37' },
  { id: 'matte-black', name: 'Matte Architectural Black', code: '#1a1a1a' },
  { id: 'smoked-walnut', name: 'Smoked Walnut Hardwood', code: '#4a3319' }
];

export default function SofaStudioConfigurator() {
  const [selectedSilhouette, setSelectedSilhouette] = useState(silhouettes[0]);
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0]);
  const [selectedFoam, setSelectedFoam] = useState(foamCores[1]);
  const [selectedLegs, setSelectedLegs] = useState(legFinishes[0]);
  const [imgKey, setImgKey] = useState(0); // bump to re-trigger fade animation

  // Bump key whenever the displayed image would change — triggers CSS fade-in
  useEffect(() => {
    setImgKey((k) => k + 1);
  }, [selectedFabric.id, selectedSilhouette.id]);

  // The preview shows the fabric-specific real photo when a fabric is chosen.
  // Falls back to the silhouette's own image only if fabric has no previewImage.
  const previewSrc = selectedFabric.previewImage || selectedSilhouette.image;


  const estimatedTotal = selectedSilhouette.basePrice + selectedFabric.priceOffset + selectedFoam.priceOffset;

  const inquiryMessage = `Hello! I customized a sofa on your 3D Studio Configurator:
• Silhouette: ${selectedSilhouette.name} (${selectedSilhouette.dimensions})
• Fabric: ${selectedFabric.name} (${selectedFabric.colorName})
• Foam Core: ${selectedFoam.name} (${selectedFoam.warranty} Warranty)
• Legs: ${selectedLegs.name}
• Estimated Price: ₹${estimatedTotal.toLocaleString('en-IN')}

Please share fabric samples, final quote, and delivery timeline.`;

  return (
    <section className="section sofa-studio-section" id="studio-configurator">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Interactive 3D Studio</span>
          <h2 className="section-title">Design Your Custom Showroom Sofa</h2>
          <p className="section-subtitle">
            Tailor dimensions, luxury fabric swatches, high-density foam cores, and leg finishes. Get an instant estimate and direct craftsman consultation.
          </p>
        </div>

        <div className="studio-workspace">
          {/* Left Column: Visual Preview */}
          <div className="studio-preview-card">
            <div className="preview-image-wrapper">
              {/* Sofa image — changes to match selected fabric/color */}
              <img
                key={imgKey}
                src={previewSrc}
                alt={`${selectedSilhouette.name} in ${selectedFabric.colorName}`}
                className="preview-image"
              />

              {/* Fabric identity badge — shows current fabric + color */}
              <div className="live-color-badge">
                <span
                  className="live-color-dot"
                  style={{ backgroundColor: selectedFabric.colorHex }}
                />
                <span className="live-color-text">
                  {selectedFabric.name} · {selectedFabric.colorName}
                </span>
              </div>

              <div className="preview-tag-badge">
                <Sparkles size={14} />
                <span>{selectedSilhouette.tag}</span>
              </div>
              <div className="preview-spec-chips">
                <span className="spec-chip">{selectedSilhouette.dimensions}</span>
                <span className="spec-chip">{selectedFoam.warranty} Warranty</span>
              </div>
            </div>

            {/* Live Config Summary Box */}
            <div className="preview-summary-card">
              <div className="summary-swatch-row">
                <div className="swatch-indicator" style={{ backgroundColor: selectedFabric.colorHex }}></div>
                <div>
                  <div className="summary-title">{selectedSilhouette.name}</div>
                  <div className="summary-sub">
                    {selectedFabric.name} • {selectedFabric.colorName}
                  </div>
                </div>
              </div>

              <div className="summary-specs-list">
                <div className="spec-row">
                  <span>Foam Grade:</span>
                  <strong>{selectedFoam.name}</strong>
                </div>
                <div className="spec-row">
                  <span>Leg Finish:</span>
                  <strong>{selectedLegs.name}</strong>
                </div>
                <div className="spec-row">
                  <span>Showroom Frame:</span>
                  <strong>Kiln-Dried Seasoned Hardwood</strong>
                </div>
              </div>

              <div className="summary-price-box">
                <div>
                  <span className="price-label">Estimated Showroom Build:</span>
                  <div className="price-value">₹{estimatedTotal.toLocaleString('en-IN')}</div>
                  <span className="price-note">*Includes tailoring, padding & assembly</span>
                </div>
                <a
                  href={getWhatsAppLink(inquiryMessage)}
                  onClick={(e) => openWhatsApp(inquiryMessage, null, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--lg studio-wa-btn"
                >
                  <MessageCircle size={18} />
                  <span>Enquire This Build</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="studio-controls-card">
            {/* Step 1: Silhouette */}
            <div className="control-group">
              <div className="control-group-title">
                <span className="step-num">1</span>
                <div>
                  <h4>Choose Silhouette & Seating</h4>
                  <p>Select frame structure and footprint</p>
                </div>
              </div>
              <div className="options-grid-2">
                {silhouettes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSilhouette(s)}
                    className={`option-btn ${selectedSilhouette.id === s.id ? 'active' : ''}`}
                  >
                    <div className="option-name">{s.name}</div>
                    <div className="option-sub">{s.dimensions}</div>
                    <div className="option-price">From ₹{s.basePrice.toLocaleString('en-IN')}</div>
                    {selectedSilhouette.id === s.id && <Check className="check-icon" size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric & Upholstery */}
            <div className="control-group">
              <div className="control-group-title">
                <span className="step-num">2</span>
                <div>
                  <h4>Select Premium Fabric & Texture</h4>
                  <p>Choose high rub-count designer upholstery</p>
                </div>
              </div>
              <div className="fabric-swatches-grid">
                {fabrics.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFabric(f)}
                    className={`fabric-swatch-btn ${selectedFabric.id === f.id ? 'active' : ''}`}
                  >
                    <span className="swatch-circle" style={{ backgroundColor: f.colorHex }} />
                    <div className="fabric-text">
                      <div className="fabric-name">{f.name}</div>
                      <div className="fabric-desc">{f.colorName} • {f.texture}</div>
                    </div>
                    {selectedFabric.id === f.id && <Check className="check-icon" size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Foam Core Density */}
            <div className="control-group">
              <div className="control-group-title">
                <span className="step-num">3</span>
                <div>
                  <h4>High-Density Foam Cushion Core</h4>
                  <p>The foundation of lasting comfort</p>
                </div>
              </div>
              <div className="foam-options-list">
                {foamCores.map((fc) => (
                  <button
                    key={fc.id}
                    type="button"
                    onClick={() => setSelectedFoam(fc)}
                    className={`foam-option-btn ${selectedFoam.id === fc.id ? 'active' : ''}`}
                  >
                    <div className="foam-icon-box">
                      <Layers size={18} />
                    </div>
                    <div className="foam-text">
                      <div className="foam-name">{fc.name}</div>
                      <div className="foam-feel">{fc.feel}</div>
                      <div className="foam-meta">
                        <span className="warranty-tag">{fc.warranty} Sag-Free Guarantee</span>
                        {fc.priceOffset > 0 && <span className="offset-tag">+₹{fc.priceOffset}</span>}
                      </div>
                    </div>
                    {selectedFoam.id === fc.id && <Check className="check-icon" size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Leg Finishes */}
            <div className="control-group">
              <div className="control-group-title">
                <span className="step-num">4</span>
                <div>
                  <h4>Leg Profile & Accent Finish</h4>
                  <p>Elevate floor aesthetics</p>
                </div>
              </div>
              <div className="legs-grid">
                {legFinishes.map((leg) => (
                  <button
                    key={leg.id}
                    type="button"
                    onClick={() => setSelectedLegs(leg)}
                    className={`leg-chip ${selectedLegs.id === leg.id ? 'active' : ''}`}
                  >
                    <span className="leg-dot" style={{ backgroundColor: leg.code }}></span>
                    <span>{leg.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
