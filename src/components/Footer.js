import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Dogs NGO</h5>
            <p>Making the world better for our furry friends, one paw at a time.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/dogs" className="text-light">Available Dogs</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@dogsngo.org</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Paw Street, Dogtown, DG 12345</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">© 2024 Dogs NGO. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
