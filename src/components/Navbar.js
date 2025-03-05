import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Anugami</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About Use</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/adopt">Adopt</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/donate">Donate</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Volunteer">Volunteer/Join Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Success Storiess">Success Stories</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Awareness Section">Awareness Section</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
