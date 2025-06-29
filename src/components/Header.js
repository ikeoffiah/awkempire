import React from 'react';

function Header() {
  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="modern-header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="header-title">Awakening Empire</h1>
        <h2 className="header-subtitle" style={{ textAlign: 'center', margin: '0 auto', width: '100%' }}>
          Inspiring Generations, Creating Opportunities, and Building a Sustainable Future Together
        </h2>
        <div className="header-cta">
          <button className="cta-button primary" onClick={handleLearnMore}>Our Services</button>
          <button className="cta-button secondary" onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
