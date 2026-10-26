import React, { useState } from 'react';
import { products } from '../data/products';
import { Eye, ArrowRight } from 'lucide-react';
import './Gallery.css';

export default function Gallery({ onSelectProduct }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Map category filters
  const categories = ['All', 'Necklace', 'Rings', 'Pendants', 'Bracelets'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="collection" className="gallery-section">
      <div className="container">
        <div className="luxury-title-wrap">
          <p>The Masterpieces</p>
          <h2>Whispers from the Valley</h2>
          <div className="luxury-divider"></div>
        </div>

        {/* Filter Navigation */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'All' ? 'All Creations' : cat}
            </button>
          ))}
        </div>

        {/* Flowing Grid */}
        <div className="gallery-grid">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className={`gallery-card card-index-${idx % 3}`}
              onClick={() => onSelectProduct(product)}
            >
              <div className="card-visual-wrapper">
                <img src={product.image} alt={product.name} className="card-image" />
                <div className="card-overlay-hover">
                  <span className="btn-card-admire">
                    <span>Admire Details</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              
              <div className="card-info">
                <span className="card-theme">{product.theme}</span>
                <h3 className="card-title">{product.name}</h3>
                <div className="card-footer-meta">
                  <span className="card-category">{product.category}</span>
                  <span className="card-designer">by {product.designer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-curation-note">
          <p className="curation-quote">
            "Each design is curated individually. Materials are hand-selected and stones are cut to match the natural flow of the design."
          </p>
          <span className="curation-author">— Pooja Soni</span>
        </div>
      </div>
    </section>
  );
}
