import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Designer from './components/Designer';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import SplashIntro from './components/SplashIntro';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Lock body scroll while splash is active
  React.useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [hasEntered]);

  return (
    <div className="riva-luxury-app">
      {/* Interactive Entry Experience */}
      {!hasEntered && (
        <SplashIntro onEnter={() => setHasEntered(true)} />
      )}

      {/* Header Navigation */}
      <Navbar />

      {/* Main Luxury Story Intro */}
      <Hero />

      {/* Story-driven Asymmetric Gallery with Category filtering */}
      <Gallery onSelectProduct={handleSelectProduct} />

      {/* Showcase Pooja Soni the designer */}
      <Designer />

      {/* Legacy about us history and brand details */}
      <About />

      {/* Inquiry Form and Atelier Address details */}
      <ContactForm />

      {/* Fine-print details, contacts, and copyright */}
      <Footer />

      {/* Product specification modal overlay */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}
