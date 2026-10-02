import React, { useState } from 'react';
import { Calculator, MessageCircle, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../config/business';
import './FoamCalculator.css';

const densities = [
  { id: '28d', name: '28D Soft Cushion Foam', color: '#f9f373', ratePerCuIn: 0.16, feel: 'Plush & Soft', bestFor: 'Back cushions & decorative pads', lifespan: '4-6 Years' },
  { id: '32d', name: '32D Medium Firm Foam', color: '#68b5ff', ratePerCuIn: 0.22, feel: 'Balanced Comfort', bestFor: 'Standard sofa seats & dining chairs', lifespan: '7-9 Years' },
  { id: '40d', name: '40D High Resilience (HD)', color: '#4ade80', ratePerCuIn: 0.29, feel: 'Supreme Support (Zero Sag)', bestFor: 'Heavy daily use sofa seats & luxury mattresses', lifespan: '10-12 Years' },
  { id: '50d', name: '50D Orthopedic Rebonded', color: '#c084fc', ratePerCuIn: 0.36, feel: 'Extra Firm & Therapeutic', bestFor: 'Spinal alignment, daybed bases, gym flooring', lifespan: '12+ Years' }
];

export default function FoamCalculator() {
  const [length, setLength] = useState(72); // inches
  const [width, setWidth] = useState(36);   // inches
  const [thickness, setThickness] = useState(4); // inches
  const [quantity, setQuantity] = useState(1);
  const [selectedDensity, setSelectedDensity] = useState(densities[2]); // 40D default

  // Volume in cubic inches
  const volumeCuIn = length * width * thickness;
  const estimatedPiecePrice = Math.max(350, Math.round(volumeCuIn * selectedDensity.ratePerCuIn));
  const totalPrice = estimatedPiecePrice * quantity;

  const inquiryText = `Hello! I used your Foam Cut-to-Size Calculator:
• Dimensions: ${length}" L × ${width}" W × ${thickness}" Thickness
• Grade: ${selectedDensity.name} (${selectedDensity.feel})
• Quantity: ${quantity} pc(s)
• Estimated Total: ₹${totalPrice.toLocaleString('en-IN')}

Can you confirm availability, exact cutting turnaround, and delivery to my location?`;

  return (
    <section className="section foam-calc-section" id="foam-calculator">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Custom Foam Workshop</span>
          <h2 className="section-title">Cut-to-Size Foam & Price Estimator</h2>
          <p className="section-subtitle">
            Need custom foam for sofa cushion refill, bench pads, or orthopedic mattress toppers? Enter your dimensions for an instant estimate.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-inputs-col">
            <h3 className="calc-col-title">
              <Calculator size={20} className="icon-gold" />
              <span>1. Enter Dimensions (Inches)</span>
            </h3>

            <div className="dims-grid">
              <div className="dim-field">
                <label>Length (Inches)</label>
                <div className="input-with-suffix">
                  <input
                    type="number"
                    min="6"
                    max="120"
                    value={length}
                    onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                  />
                  <span>in</span>
                </div>
                <small>approx. {(length / 12).toFixed(1)} ft</small>
              </div>

              <div className="dim-field">
                <label>Width (Inches)</label>
                <div className="input-with-suffix">
                  <input
                    type="number"
                    min="6"
                    max="84"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                  />
                  <span>in</span>
                </div>
                <small>approx. {(width / 12).toFixed(1)} ft</small>
              </div>

              <div className="dim-field">
                <label>Thickness</label>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="select-dropdown"
                >
                  <option value={1}>1 inch (Topper / Dining pad)</option>
                  <option value={2}>2 inches (Medium pad)</option>
                  <option value={3}>3 inches (Firm seat cushion)</option>
                  <option value={4}>4 inches (Luxury sofa seat)</option>
                  <option value={5}>5 inches (Deep plush sofa)</option>
                  <option value={6}>6 inches (Mattress block)</option>
                </select>
              </div>

              <div className="dim-field">
                <label>Quantity</label>
                <div className="qty-control">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <h3 className="calc-col-title" style={{ marginTop: '28px' }}>
              <Sparkles size={20} className="icon-gold" />
              <span>2. Select Foam Density</span>
            </h3>

            <div className="density-selector-grid">
              {densities.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDensity(d)}
                  className={`density-card-btn ${selectedDensity.id === d.id ? 'active' : ''}`}
                >
                  <div className="density-top">
                    <span className="density-color-tag" style={{ backgroundColor: d.color }}></span>
                    <span className="density-name">{d.name}</span>
                  </div>
                  <div className="density-feel">{d.feel}</div>
                  <div className="density-best">{d.bestFor}</div>
                  <div className="density-life">⚡ {d.lifespan} Lifespan</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Estimate Output Box */}
          <div className="calc-result-col">
            <div className="result-glass-card">
              <div className="result-badge">
                <ShieldCheck size={16} />
                <span>Showroom Grade Quality</span>
              </div>

              <h4 className="result-heading">Custom Foam Quotation</h4>

              <div className="result-breakdown">
                <div className="breakdown-item">
                  <span>Dimensions:</span>
                  <strong>{length}" × {width}" × {thickness}"</strong>
                </div>
                <div className="breakdown-item">
                  <span>Selected Density:</span>
                  <strong>{selectedDensity.name}</strong>
                </div>
                <div className="breakdown-item">
                  <span>Feel / Firmness:</span>
                  <strong>{selectedDensity.feel}</strong>
                </div>
                <div className="breakdown-item">
                  <span>Quantity:</span>
                  <strong>{quantity} pc{quantity > 1 ? 's' : ''}</strong>
                </div>
                <div className="breakdown-item">
                  <span>Precision CNC Cutting:</span>
                  <strong style={{ color: '#25D366' }}>FREE Included</strong>
                </div>
              </div>

              <div className="result-price-box">
                <span className="calc-price-label">Estimated Showroom Price</span>
                <div className="calc-price-amount">₹{totalPrice.toLocaleString('en-IN')}</div>
                <span className="calc-tax-note">Approximate estimate • Exact quote via WhatsApp</span>
              </div>

              <div className="calc-action">
                <a
                  href={getWhatsAppLink(inquiryText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--lg w-full"
                >
                  <MessageCircle size={18} />
                  <span>Send Cut-to-Size Order</span>
                </a>
              </div>

              <div className="result-perks">
                <div className="perk-item">
                  <CheckCircle2 size={16} className="perk-icon" />
                  <span>Custom sizes cut within 24-48 hours</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} className="perk-icon" />
                  <span>100% Virgin High-Resilience polyurethane</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
