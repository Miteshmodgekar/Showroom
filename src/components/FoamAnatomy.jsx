import React, { useState } from 'react';
import { Layers, ShieldCheck, Check, Sparkles } from 'lucide-react';
import './FoamAnatomy.css';

const layers = [
  {
    id: 1,
    title: 'Top Layer: Designer Luxury Upholstery',
    subtitle: '50,000+ Martindale Rub Count',
    desc: 'Bespoke Italian velvets, Belgian linens, and breathable organic fabrics treated with stain-resistant nanotech. Resists spills, pet scratches, and UV fading.',
    icon: '✨',
    badge: 'Surface Touch'
  },
  {
    id: 2,
    title: 'Comfort Cushioning: Cloud Microfiber Batting',
    subtitle: 'Hypoallergenic Virgin Dacron Wrap',
    desc: 'Soft silken loft wrap that eliminates wrinkles, provides immediate plush sinking sensation, and protects the underlying foam core from friction.',
    icon: '☁️',
    badge: 'Initial Comfort'
  },
  {
    id: 3,
    title: 'Core Engine: 40D Virgin High-Resilience Foam',
    subtitle: 'Zero Sagging • 10-Year Shape Guarantee',
    desc: 'High-density micro-cellular open structure provides dynamic spring-back support. Distributes body weight evenly to prevent back strain and indentation marks.',
    icon: '🧱',
    badge: '10-Yr Guarantee'
  },
  {
    id: 4,
    title: 'Suspension Base: Heavy-Gauge Sinuous Springs & Webbing',
    subtitle: 'Elastic Pirelli Webbing + Carbon Steel Springs',
    desc: 'Treated with rust-proof coating, interlinked with tension clips to eliminate squeaks and absorb heavy dynamic weight without deformation.',
    icon: '〰️',
    badge: 'Structural Base'
  },
  {
    id: 5,
    title: 'Foundation Frame: Kiln-Dried Hardwood Structure',
    subtitle: 'Corner-Blocked & Dowelled Joinery',
    desc: 'Moisture content controlled below 10% to prevent warping, cracking, or termite infestation. Built to withstand over 500kg load capacity.',
    icon: '🪵',
    badge: 'Lifetime Skeleton'
  }
];

export default function FoamAnatomy() {
  const [activeLayer, setActiveLayer] = useState(layers[2]); // 40D default

  return (
    <section className="section anatomy-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Behind the Craftsmanship</span>
          <h2 className="section-title">The Anatomy of 10-Year Sag-Free Comfort</h2>
          <p className="section-subtitle">
            Most market sofas sag within 6 to 12 months due to low-density recycled foam. Explore how our multi-layered showroom construction guarantees lasting resilience.
          </p>
        </div>

        <div className="anatomy-layout">
          {/* Visual Cutaway Graphic / Image Box */}
          <div className="anatomy-visual-card">
            <div className="anatomy-image-holder">
              <img
                src="/images/foam/foam-02.jpg"
                alt="Multi-layer sofa and mattress foam anatomy cutaway"
                className="anatomy-img"
              />
              <div className="anatomy-floating-badge">
                <ShieldCheck size={18} />
                <span>100% Virgin Certified Foam Core</span>
              </div>
            </div>

            <div className="anatomy-highlight-box">
              <div className="active-layer-header">
                <span className="layer-icon-lg">{activeLayer.icon}</span>
                <div>
                  <span className="active-badge">{activeLayer.badge}</span>
                  <h4 className="active-title">{activeLayer.title}</h4>
                  <div className="active-sub">{activeLayer.subtitle}</div>
                </div>
              </div>
              <p className="active-desc">{activeLayer.desc}</p>
            </div>
          </div>

          {/* Layer Selector List */}
          <div className="anatomy-list">
            {layers.map((layer, index) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayer(layer)}
                  className={`layer-item-btn ${isSelected ? 'active' : ''}`}
                >
                  <div className="layer-step-num">0{index + 1}</div>
                  <div className="layer-item-content">
                    <div className="layer-item-top">
                      <span className="layer-item-title">{layer.title}</span>
                      <span className="layer-item-badge">{layer.badge}</span>
                    </div>
                    <p className="layer-item-sub">{layer.subtitle}</p>
                  </div>
                  {isSelected && <Sparkles size={16} className="sparkle-active" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
