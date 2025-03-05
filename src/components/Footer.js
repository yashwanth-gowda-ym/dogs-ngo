import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3> About Us</h3>
          <p>
            We are dedicated to rescuing, rehabilitating, and rehoming abandoned dogs.  
            Join us in giving every pup a loving home. 🏡❤️
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/adopt"> Adopt</a></li>
            <li><a href="/donate"> Donate</a></li>
            <li><a href="/contact"> Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          </div>
          <p> In partnership with:</p>
          <div className="partners">
            <img src="https://via.placeholder.com/100x50?text=Partner+1" alt="Partner 1" />
            <img src="https://via.placeholder.com/100x50?text=Partner+2" alt="Partner 2" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Dogs Trust NGO | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
