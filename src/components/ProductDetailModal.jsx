import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import './ProductDetailModal.css';

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "917600044200"; // Riva Diamonds Contact
    const message = `Hello Riva Diamonds, I am interested in the following design by Pooja Soni:

Product Name: ${product.name}
Reference ID: ${product.id}
Category: ${product.category}
Theme: ${product.theme}

Please provide more details on pricing and availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={24} />
        </button>

        <div className="modal-grid">
          <div className="modal-visual">
            <img src={product.image} alt={product.name} className="modal-img" />
            <div className="modal-theme-badge">Collection: {product.theme}</div>
          </div>

          <div className="modal-info">
            <span className="modal-product-id">{product.id}</span>
            <h2 className="modal-product-title">{product.name}</h2>
            <p className="modal-designer-tag">Designed by: <span>{product.designer}</span></p>
            
            <div className="modal-divider"></div>
            
            <div className="modal-description-section">
              <h3>The Inspiration</h3>
              <p>{product.description}</p>
            </div>

            <div className="modal-specs-section">
              <h3>Technical Specifications</h3>
              <div className="specs-table">
                <div className="specs-row">
                  <span className="specs-label">Metal Composition</span>
                  <span className="specs-value">{product.details.metal}</span>
                </div>
                <div className="specs-row">
                  <span className="specs-label">Metal Weight (Approx)</span>
                  <span className="specs-value">{product.details.metalWeight}</span>
                </div>
                {product.details.diamondWeight !== "0.00 carats" && (
                  <>
                    <div className="specs-row">
                      <span className="specs-label">Diamond Weight</span>
                      <span className="specs-value">{product.details.diamondWeight}</span>
                    </div>
                    <div className="specs-row">
                      <span className="specs-label">Diamond Quality</span>
                      <span className="specs-value">{product.details.diamondClarity}</span>
                    </div>
                  </>
                )}
                {product.details.gemstone !== "None" && (
                  <>
                    <div className="specs-row">
                      <span className="specs-label">Precious Stone</span>
                      <span className="specs-value">{product.details.gemstone}</span>
                    </div>
                    <div className="specs-row">
                      <span className="specs-label">Stone Weight</span>
                      <span className="specs-value">{product.details.gemstoneWeight}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-whatsapp-inquiry" onClick={handleWhatsAppInquiry}>
                <MessageCircle size={18} strokeWidth={0} fill="currentColor" className="btn-icon-wa" />
                <span>INQUIRE ON WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
