import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-content">
        <p>Questions? Call 1-800-NETFLIX</p>
        <div className="footer-links">
          <a href="#FAQ">FAQ</a>
          <a href="#InvestorRelations">Investor Relations</a>
          <a href="#Privacy">Privacy</a>
          <a href="#SpeedTest">Speed Test</a>
        </div>
        <p className="footer-note">Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
