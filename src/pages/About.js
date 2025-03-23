import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center mb-5">
          <h1 className="display-4 mb-4">About Dogs NGO</h1>
          <p className="lead">Dedicated to giving every dog a loving home</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
            alt="Dogs playing"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Our Mission</h2>
          <p>
            At Dogs NGO, we believe that every dog deserves a chance at happiness. Our mission
            is to rescue, rehabilitate, and rehome abandoned and neglected dogs, while also
            educating the community about responsible pet ownership.
          </p>
          <p>
            Since our founding in 2020, we have successfully rescued over 500 dogs and found
            loving homes for more than 400 of them.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Rescue</h3>
              <p className="card-text">
                We work tirelessly to rescue dogs from dangerous situations and provide them
                with immediate medical care and shelter.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Rehabilitate</h3>
              <p className="card-text">
                Our team of experts provides medical care, behavioral training, and lots of
                love to prepare dogs for their forever homes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Rehome</h3>
              <p className="card-text">
                We carefully match dogs with loving families, ensuring a perfect fit for both
                the dog and their new family.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <h2 className="mb-4">Join Our Cause</h2>
          <p>
            Whether through adoption, fostering, volunteering, or donation, there are many
            ways to support our mission. Together, we can make a difference in the lives of
            countless dogs.
          </p>
          <button className="btn btn-success btn-lg mt-3">Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default About; 