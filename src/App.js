import React from 'react';
import './App.css';

function App() {
  // Scrolling animation items
  const scrollingItems = [
    { icon: '🚀', text: 'Innovation', color: '#667eea' },
    { icon: '⚡', text: 'Speed', color: '#ffeaa7' },
    { icon: '🎯', text: 'Precision', color: '#fd79a8' },
    { icon: '🔒', text: 'Security', color: '#74b9ff' },
    { icon: '💎', text: 'Quality', color: '#fab1a0' },
    { icon: '🌟', text: 'Excellence', color: '#55a3ff' },
    { icon: '🎨', text: 'Design', color: '#a29bfe' },
    { icon: '🔥', text: 'Performance', color: '#fd79a8' },
    { icon: '💡', text: 'Ideas', color: '#fdcb6e' },
    { icon: '🎪', text: 'Magic', color: '#e17055' },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>YardClient</h2>
          </div>
          <div className="nav-menu">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Left Side Scrolling Animation */}
        <div className="scrolling-animation-container">
          <div className="scrolling-column">
            {/* First set of items */}
            <div className="scrolling-items">
              {scrollingItems.map((item, index) => (
                <div key={`first-${index}`} className="scroll-item" style={{'--item-color': item.color}}>
                  <div className="scroll-item-icon">{item.icon}</div>
                  <div className="scroll-item-text">{item.text}</div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="scrolling-items">
              {scrollingItems.map((item, index) => (
                <div key={`second-${index}`} className="scroll-item" style={{'--item-color': item.color}}>
                  <div className="scroll-item-icon">{item.icon}</div>
                  <div className="scroll-item-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your <span className="highlight">Digital Experience</span>
            </h1>
            <p className="hero-subtitle">
              Discover cutting-edge solutions that elevate your business to new heights. 
              Built with modern technology and designed for the future.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="graphic-element element-1"></div>
              <div className="graphic-element element-2"></div>
              <div className="graphic-element element-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>Powerful features designed to help you succeed</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">⚡</div>
              </div>
              <h3>Lightning Fast</h3>
              <p>Experience blazing-fast performance with our optimized architecture and modern technology stack.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">🔒</div>
              </div>
              <h3>Secure & Reliable</h3>
              <p>Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">🚀</div>
              </div>
              <h3>Scalable Solution</h3>
              <p>Grow without limits. Our platform scales seamlessly with your business needs and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">10K+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">99.9%</h3>
              <p className="stat-label">Uptime</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied customers and transform your business today.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Start Free Trial</button>
              <button className="btn btn-outline btn-large">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>YardClient</h3>
              <p>Building the future of digital experiences.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#status">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 YardClient. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;