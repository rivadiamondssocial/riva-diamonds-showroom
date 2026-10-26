import React from 'react';
import './Designer.css';

export default function Designer() {
  return (
    <section id="designer" className="designer-section">
      <div className="container designer-container">
        <div className="designer-grid">
          <div className="designer-visual">
            <div className="image-frame-gold">
              <img 
                src="/images/blossom_lotus_ring.png" 
                alt="Blossom Lotus Ring design detail" 
                className="designer-jewelry-highlight" 
              />
            </div>
          </div>
          
          <div className="designer-details">
            <span className="section-label">Meet the Visionary</span>
            <h2 className="designer-name">Pooja Soni</h2>
            <p className="designer-title">Lead Jewelry Designer, Riva Diamonds</p>
            
            <div className="designer-divider"></div>
            
            <p className="philosophy-text">
              "For me, designing jewelry is like preserving a fleeting moment of nature's beauty forever. 
              My goal is to translate these organic expressions into modern heirlooms using gold, diamonds, 
              and gemstones, connecting the wearer to the earth's natural poetry."
            </p>
            
            <div className="creative-aspects">
              <div className="aspect-card">
                <h3>Organic Lineage</h3>
                <p>Flowing contours and leaf silhouettes that mimic nature's perfect symmetry and curves.</p>
              </div>
              <div className="aspect-card">
                <h3>Traditional Craft</h3>
                <p>Blending centuries-old Indian filigree techniques with clean, contemporary diamond structures.</p>
              </div>
            </div>

            <div className="signature-signoff">
              <span className="signoff-text">Pooja Soni</span>
              <span className="signoff-sub">Design Director</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
