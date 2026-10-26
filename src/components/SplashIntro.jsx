import React, { useState, useEffect } from 'react';
import './SplashIntro.css';

export default function SplashIntro({ onEnter }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the enter button after a short delay for dramatic effect
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsLeaving(true);
    // Wait for the exit animation to complete before unmounting
    setTimeout(() => {
      onEnter();
    }, 1200); // 1.2s matches the CSS transition duration
  };

  return (
    <div className={`splash-overlay ${isLeaving ? 'splash-leave' : ''}`}>
      
      {/* ── Left Door: Editorial Image ── */}
      <div className={`splash-door splash-door-left ${isLeaving ? 'open-left' : ''}`}>
        <div className="splash-image-container"></div>
      </div>

      {/* ── Right Door: Content & Interaction ── */}
      <div className={`splash-door splash-door-right ${isLeaving ? 'open-right' : ''}`}>
        <div className="splash-content-editorial">
          <div className="splash-logo-wrapper">
            <img src="/logo.png" alt="Riva Diamonds Logo" className="splash-logo" />
          </div>

          <div className={`splash-action ${showButton ? 'show' : ''}`}>
            <button className="btn-enter-editorial" onClick={handleEnter}>
              <span className="btn-text">Enter the World</span>
              <span className="btn-line-horizontal"></span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
