import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative">
          <div className="row min-vh-100 align-items-center">
            <div className="col-md-6 text-white">
              <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                <h1 className="display-4 fw-bold mb-4">
                  Give a Dog a Second Chance at Life
                </h1>
                <p className="lead mb-4">
                  Join us in our mission to rescue, rehabilitate, and rehome dogs in need.
                  Every dog deserves a loving home.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-success btn-lg">Adopt Now</button>
                  <button className="btn btn-outline-light btn-lg">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="stat-card">
                <h2 className="display-4 fw-bold text-success">500+</h2>
                <p className="text-muted">Dogs Rescued</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-card">
                <h2 className="display-4 fw-bold text-success">400+</h2>
                <p className="text-muted">Happy Adoptions</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-card">
                <h2 className="display-4 fw-bold text-success">50+</h2>
                <p className="text-muted">Active Volunteers</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-card">
                <h2 className="display-4 fw-bold text-success">100%</h2>
                <p className="text-muted">Love & Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dogs Section */}
      <section className="featured-dogs py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="display-5 fw-bold">Featured Dogs</h2>
              <p className="lead text-muted">Meet some of our wonderful dogs waiting for their forever homes</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=600&fit=crop"
                  className="card-img-top"
                  alt="Max"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Max</h5>
                  <p className="card-text">Friendly Golden Retriever looking for an active family</p>
                  <button className="btn btn-success">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&h=600&fit=crop"
                  className="card-img-top"
                  alt="Luna"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Luna</h5>
                  <p className="card-text">Sweet Husky who loves adventure and cuddles</p>
                  <button className="btn btn-success">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?w=800&h=600&fit=crop"
                  className="card-img-top"
                  alt="Charlie"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Charlie</h5>
                  <p className="card-text">Loving Labrador mix perfect for first-time owners</p>
                  <button className="btn btn-success">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="how-to-help py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="display-5 fw-bold">How You Can Help</h2>
              <p className="lead text-muted">There are many ways to support our cause</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="help-card text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Adopt</h4>
                <p>Give a dog a loving forever home</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="help-card text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4>Foster</h4>
                <p>Provide temporary care for dogs in need</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="help-card text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>Donate</h4>
                <p>Support our rescue and care efforts</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="help-card text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Volunteer</h4>
                <p>Join our team of dedicated volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 bg-success text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-4">Stay Updated</h2>
              <p className="mb-4">Subscribe to our newsletter for updates on our dogs and events</p>
              <form className="d-flex gap-2 justify-content-center">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  style={{ maxWidth: '400px' }}
                />
                <button className="btn btn-light btn-lg">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
