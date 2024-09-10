import React, { useState } from 'react';
import './Landing.css';
import landingImage from '../../assets/images/Landing.png'; 

const Landing = () => {
  
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);

  return (
    <div className="landing-container">
      <div className="header-section">
        <div className="header-content">
        <div className="header-title">
          Grow Your Wealth with Expert Capital Advisory
        </div>
        <div className="header-description">
          <ul>
            <li><strong>Hassle-Free Investments:</strong> Diversify your portfolio with minimal effort, managed by seasoned capital advisors.</li>
            <li><strong>Tailored Investment Plans:</strong> Choose from real estate projects aligned with your financial goals and risk tolerance.</li>
            <li><strong>Community-Driven Opportunities:</strong> Join investor communities, share insights, and access exclusive opportunities.</li>
            <li><strong>Comprehensive Portfolio Management:</strong> Track and optimize your real estate investments on a user-friendly platform.</li>
          </ul>
        </div>
          <button
            className="scroll-button"
            onClick={() => {
              const scrollTarget = document.getElementById('scrollTarget');
              if (scrollTarget) {
                scrollTarget.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn More
          </button>
        </div>
        <img src={landingImage} alt="landing" className="header-image" />
      </div>

      <div id="scrollTarget" className="card-container">
        <div
          className="card"
          onMouseEnter={() => setShowContent1(true)}
          onMouseLeave={() => setShowContent1(false)}
        >
          <div className="card-title">Diverse Portfolio</div>
          {showContent1 && (
            <div className="hidden-content">
              Dive into a vast investment landscape and ecosystem. From real estate properties, cash flowing businesses to infrastructure and new development projects.
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowContent2(true)}
          onMouseLeave={() => setShowContent2(false)}
        >
          <div className="card-title">Flexible Investment</div>
          {showContent2 && (
            <div className="hidden-content">
              Sophtera empowers you to dictate your investment, be it active or passive investing.
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowContent3(true)}
          onMouseLeave={() => setShowContent3(false)}
        >
          <div className="card-title">AI Driven Decisions</div>
          {showContent3 && (
            <div className="hidden-content">
              Experience the cutting-edge advantage of AI-driven decisions with Sophtera, transforming the way you approach and strategize your investments.
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowContent4(true)}
          onMouseLeave={() => setShowContent4(false)}
        >
          <div className="card-title">Worldwide Access</div>
          {showContent4 && (
            <div className="hidden-content">
              Embark on a global investment journey with Sophtera, accessing untapped markets and opportunities beyond borders.
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-text">Copyright 2024</div>
        <div className="footer-text">Investment Made Easy!</div>
      </footer>
    </div>
  );
};

export default Landing;
