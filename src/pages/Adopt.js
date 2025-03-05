import React, { useState, useEffect } from "react";
import axios from "axios";

const Adopt = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dogs")
      .then(response => setDogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Dogs for Adoption 🐾</h2>
      <div className="row">
        {dogs.map(dog => (
          <div key={dog._id} className="col-md-4">
            <div className="card p-3">
              <img src={dog.image} className="card-img-top" alt={dog.name} />
              <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <p>Age: {dog.age} years</p>
                <button className="btn btn-success">Adopt</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;
