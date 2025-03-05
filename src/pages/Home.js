import React from "react";
import "./Home.css";  // Create a CSS file for styling

const Home = () => {
  return (
    <section className="container my-5 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6">
          <h1 className="fw-bold">Love is a four-legged word. Open your heart and adopt</h1>
          <p className="text-muted">
            Join us in making a difference for dogs through rescue, adoption, and care.
          </p>
          <button className="btn btn-success">Join Us Now</button>
        </div>
        <div className="col-md-6">
        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d" alt="Happy Dog" />
        </div>
      </div>
    </section>
  );
};

export default Home;
