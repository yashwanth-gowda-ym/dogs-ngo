import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    experience: '',
    interests: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add API integration here)
    console.log('Form submitted:', formData);
    alert('Thank you for volunteering! We will contact you soon.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Join Our Volunteer Team</h1>
      
      <div className="row mb-5">
        <div className="col-md-6">
          <h3>Why Volunteer With Us?</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Make a direct impact on dogs' lives</li>
            <li className="list-group-item">Gain valuable experience in animal care</li>
            <li className="list-group-item">Join a passionate community</li>
            <li className="list-group-item">Flexible scheduling options</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Volunteer Opportunities</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Dog Walking & Exercise</li>
            <li className="list-group-item">Feeding & Care</li>
            <li className="list-group-item">Event Support</li>
            <li className="list-group-item">Administrative Help</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Volunteer Application Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Availability</label>
                  <select
                    className="form-select"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Previous Experience</label>
                  <textarea
                    className="form-control"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;