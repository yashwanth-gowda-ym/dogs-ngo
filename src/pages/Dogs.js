import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dogs = () => {
  const [dogs] = useState([
    {
      id: 1,
      name: 'Max',
      age: '2 years',
      breed: 'Golden Retriever',
      description: 'Friendly and energetic dog who loves to play fetch.',
      image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'Luna',
      age: '1 year',
      breed: 'Husky',
      description: 'Sweet and gentle soul looking for an active family.',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'Charlie',
      age: '3 years',
      breed: 'Labrador Mix',
      description: 'Loving companion who enjoys cuddles and walks.',
      image: 'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      name: 'Bella',
      age: '4 years',
      breed: 'German Shepherd',
      description: 'Intelligent and loyal dog, great with children.',
      image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&h=600&fit=crop'
    }
  ]);

  return (
    <div className="container my-5">
      <div className="row mb-5">
        <div className="col text-center">
          <h1 className="display-4">Available Dogs</h1>
          <p className="lead">Meet our wonderful dogs waiting for their forever homes</p>
        </div>
      </div>

      <div className="row">
        {dogs.map(dog => (
          <div key={dog.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={dog.image}
                className="card-img-top"
                alt={dog.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <p className="card-text">
                  <strong>Age:</strong> {dog.age}<br />
                  <strong>Breed:</strong> {dog.breed}
                </p>
                <p className="card-text">{dog.description}</p>
              </div>
              <div className="card-footer bg-white border-top-0">
                <button className="btn btn-success w-100">Adopt Me</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <h2>Adoption Process</h2>
          <p className="mb-4">
            Interested in adopting? Here's our simple 4-step process:
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className="p-3">
                <h4>1. Application</h4>
                <p>Fill out our adoption application form</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <h4>2. Meeting</h4>
                <p>Meet your potential new family member</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <h4>3. Home Check</h4>
                <p>We'll visit your home to ensure it's suitable</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <h4>4. Adoption</h4>
                <p>Complete the adoption and welcome your new friend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dogs; 