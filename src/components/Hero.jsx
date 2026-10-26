import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-minimal">
      {/* ── Minimal Video Background ── */}
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-background-video"
        >
          <source src="https://www.pexels.com/download/video/6263177/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      {/* ── Centered Content ── */}
      <div className="hero-content-centered">
        
        <h1 className="hero-title-minimal">
          Whispers<br />
          <span className="serif-italic-minimal">from the</span><br />
          Valley
        </h1>
        
        <p className="hero-subtitle-minimal">
          An elegant tribute to Kashmir's changing seasons.<br />
          Crafted in pure gold, diamonds, and rare gemstones.
        </p>
        
        <a href="#collection" className="btn-hero-minimal">
          Discover The Collection
        </a>
      </div>

    </section>
  );
}
