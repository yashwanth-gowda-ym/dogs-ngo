import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when page loads
  }, []);

  return (
    <section className={`hero ${animate ? "animate" : ""}`}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>🐾 Give a Dog a Loving Home! 🏡</h1>
        <p>
          Every dog deserves **love, care, and a second chance**. Join us in our mission to rescue, rehabilitate, and rehome 
          abandoned and stray dogs. **Adopt, Donate, or Volunteer today!** 💛
        </p>
        <div className="hero-buttons">
          <a href="/adopt" className="btn btn-primary">🐶 Adopt a Dog</a>
          <a href="/donate" className="btn btn-secondary">💰 Donate Now</a>
        </div>
      </div>

      <div className="hero-images">
        <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg" alt="Cute Puppy" className="img1" />
        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" alt="Happy Dog" className="img2" />
        <img src="https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg" alt="Rescue Dog" className="img3" />
      </div>
    </section>
  );
};

export default Hero;
