import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-content">
            <span className="about-subtitle">The Legacy of Craft</span>
            <h2 className="about-title">Riva Diamonds Pvt Ltd</h2>
            <div className="about-divider"></div>
            
            <p className="about-lead">
              Founded on the pillars of purity, transparency, and absolute luxury, Riva Diamonds has been a trusted custodian of fine diamonds for years. 
            </p>
            
            <p className="about-body">
              Our journey is one of continuous search for the exceptional. We select only the most brilliant, ethically sourced diamonds and pair them with high-end metals. In 2026, Riva Diamonds embarked on an artistic chapter by collaborating with visionary designer <strong>Pooja Soni</strong>, creating story-driven collections that bridge natural wonder with high jewelry.
            </p>

            <div className="about-values">
              <div className="value-item">
                <span className="value-number">01</span>
                <div>
                  <h4>Ethical Brilliance</h4>
                  <p>Every stone is sourced responsibly and graded under strict laboratory compliance standards.</p>
                </div>
              </div>

              <div className="value-item">
                <span className="value-number">02</span>
                <div>
                  <h4>Signature Rarity</h4>
                  <p>Limited-edition runs, ensuring your acquired piece remains a rare, individual treasure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-stack">
              <div className="stack-img-wrapper primary-stack">
                <img src="/images/ivy_vine_ring.png" alt="Ivy Vine Ring Close-up" />
              </div>
              <div className="stack-img-wrapper secondary-stack">
                <img src="/images/valley_mist_necklace.png" alt="Valley Mist Necklace detailed view" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
