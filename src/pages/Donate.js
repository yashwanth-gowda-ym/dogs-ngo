import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    // Implement payment gateway integration here
    alert('Thank you for your donation!');
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Support Our Cause</h1>

      <div className="row mb-5">
        <div className="col-md-6">
          <h3>Your Donation Helps Us:</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <h5>🏥 Provide Medical Care</h5>
              <p>Fund vaccinations, treatments, and surgeries</p>
            </li>
            <li className="list-group-item">
              <h5>🏠 Maintain Shelter</h5>
              <p>Keep our facilities clean and comfortable</p>
            </li>
            <li className="list-group-item">
              <h5>🍖 Supply Food</h5>
              <p>Feed our rescued dogs quality nutrition</p>
            </li>
            <li className="list-group-item">
              <h5>💕 Support Rehabilitation</h5>
              <p>Help dogs recover and prepare for adoption</p>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Make a Donation</h3>
              <form onSubmit={handleDonate}>
                <div className="mb-4">
                  <div className="btn-group w-100" role="group">
                    {['500', '1000', '2000', '5000'].map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`btn ${donationAmount === amount ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setDonationAmount(amount)}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Custom Amount (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 btn-lg">
                  Donate Now
                </button>
              </form>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Other Ways to Help</h5>
              <ul className="list-unstyled mb-0">
                <li>📦 Donate Supplies</li>
                <li>🐕 Sponsor a Dog</li>
                <li>🤝 Corporate Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
