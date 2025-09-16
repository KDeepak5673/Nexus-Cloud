import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Docs</a>
            <a href="#">Templates</a>
            <a href="#">Integrations</a>
            <a href="#">Pricing</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Discord</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Nexus Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer