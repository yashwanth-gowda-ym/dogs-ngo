import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="container my-5">
      <div className="row mb-5">
        <div className="col text-center">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="mb-4">Get in Touch</h2>
          <div className="mb-4">
            <h5>Address</h5>
            <p>vijayapura,devanhalli TQ<br /> 562135</p>
          </div>
          <div className="mb-4">
            <h5>Phone</h5>
            <p>9845296400</p>
          </div>
          <div className="mb-4">
            <h5>Email</h5>
            <p>anugami@gmail.com</p>
          </div>
          <div className="mb-4">
            <h5>Hours</h5>
            <p>Monday - Friday: 9:00 AM - 5:00 PM<br />
               Saturday: 10:00 AM - 4:00 PM<br />
               Sunday: Closed</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
