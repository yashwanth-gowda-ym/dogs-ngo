import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

// Error handling component for 3D elements
function ErrorFallback({error}) {
  console.error("3D rendering error:", error);
  return (
    <div className="error-container p-3 bg-light text-center">
      <p className="mb-0">3D elements couldn't load. Enjoy the rest of the site!</p>
    </div>
  );
}

// Simple 3D Dog Component using Three.js primitives
function SimpleDog(props) {
  const group = useRef();
  
  // Animation for the dog
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) / 10 + Math.PI / 4;
    group.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Body */}
      <mesh position={[0, 0.2, 0]} scale={[1.5, 1, 1]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#a67c52" roughness={0.8} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0.8, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#a67c52" roughness={0.8} />
      </mesh>
      
      {/* Snout */}
      <mesh position={[1.1, 0.4, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      
      {/* Ears */}
      <mesh position={[0.7, 0.8, 0.25]} rotation={[0.1, 0, 0.4]} castShadow>
        <boxGeometry args={[0.1, 0.2, 0.05]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      <mesh position={[0.7, 0.8, -0.25]} rotation={[-0.1, 0, 0.4]} castShadow>
        <boxGeometry args={[0.1, 0.2, 0.05]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      
      {/* Tail */}
      <mesh position={[-0.9, 0.35, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
        <meshStandardMaterial color="#a67c52" roughness={0.8} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[0.4, -0.4, 0.4]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      <mesh position={[0.4, -0.4, -0.4]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      <mesh position={[-0.4, -0.4, 0.4]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      <mesh position={[-0.4, -0.4, -0.4]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[1, 0.55, 0.2]} castShadow>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#000000" roughness={0.2} />
      </mesh>
      <mesh position={[1, 0.55, -0.2]} castShadow>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#000000" roughness={0.2} />
      </mesh>
      
      {/* Nose */}
      <mesh position={[1.3, 0.4, 0]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" roughness={0.2} />
      </mesh>
    </group>
  );
}

// Animated Counter Component
function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    
    if (start === end) return;
    
    const incrementTime = (duration / end) * 1000;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);
  
  return <span>{count}</span>;
}

// Main Component
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section position-relative" ref={heroRef}>
        <div className="hero-overlay"></div>
        
        {/* Replace 3D model with animated image */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ opacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920&q=80" 
            alt="Happy dog"
            className="hero-image"
          />
        </motion.div>

        <div className="container position-relative z-index-1">
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
                  <button className="btn btn-success btn-lg">
                    Adopt Now
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Counters */}
      <section className="stats-section py-5" style={{ display: 'block', clear: 'both' }}>
        <div className="container">
          <div className="row text-center">
            {[
              { value: "500+", label: "Dogs Rescued" },
              { value: "400+", label: "Happy Adoptions" },
              { value: "50+", label: "Active Volunteers" },
              { value: "100%", label: "Love & Care" }
            ].map((stat, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="stat-card">
                  <h2 className="display-4 fw-bold text-success">
                    {stat.value.includes('%') ? (
                      <>
                        <Counter value={stat.value.replace('%', '')} />%
                      </>
                    ) : (
                      <Counter value={stat.value.replace('+', '')} />
                    )}
                    {stat.value.includes('+') && '+'}
                  </h2>
                  <p className="text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dogs Section with 3D Cards */}
      <section className="featured-dogs py-5 bg-light" style={{ display: 'block', clear: 'both' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="display-5 fw-bold">Featured Dogs</h2>
              <p className="lead text-muted">Meet some of our wonderful dogs waiting for their forever homes</p>
            </div>
          </div>
          <div className="row">
            {[
              {
                name: "Max",
                image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=600&fit=crop",
                description: "Friendly Golden Retriever looking for an active family"
              },
              {
                name: "Luna",
                image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&h=600&fit=crop",
                description: "Sweet Husky who loves adventure and cuddles"
              },
              {
                name: "Charlie",
                image: "https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?w=800&h=600&fit=crop",
                description: "Loving Labrador mix perfect for first-time owners"
              }
            ].map((dog, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 dog-card">
                  <div className="card-img-wrapper">
                    <img
                      src={dog.image}
                      className="card-img-top"
                      alt={dog.name}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-img-overlay"></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{dog.name}</h5>
                    <p className="card-text">{dog.description}</p>
                    <button className="btn btn-success">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help Section with 3D Icons */}
      <section className="how-to-help py-5" style={{ display: 'block', clear: 'both' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="display-5 fw-bold">How You Can Help</h2>
              <p className="lead text-muted">There are many ways to support our cause</p>
            </div>
          </div>
          <div className="row">
            {[
              { icon: "fas fa-heart", title: "Adopt", description: "Give a dog a loving forever home" },
              { icon: "fas fa-hand-holding-heart", title: "Foster", description: "Provide temporary care for dogs in need" },
              { icon: "fas fa-hand-holding-usd", title: "Donate", description: "Support our rescue and care efforts" },
              { icon: "fas fa-users", title: "Volunteer", description: "Join our team of dedicated volunteers" }
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="help-card text-center">
                  <div className="icon-circle mb-3">
                    <i className={item.icon}></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with 3D Effect */}
      <section className="newsletter-section py-5 bg-success text-white" style={{ display: 'block', clear: 'both' }}>
        <div className="container">
          <div className="newsletter-3d-bg"></div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-4">Stay Updated</h2>
              <p className="mb-4">Subscribe to our newsletter for updates on our dogs and events</p>
              <form className="d-flex gap-2 justify-content-center newsletter-form">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  style={{ maxWidth: '400px' }}
                />
                <button className="btn btn-light btn-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
