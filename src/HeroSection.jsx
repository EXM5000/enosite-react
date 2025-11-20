import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './assets/hero.jpg';

const GOLDEN_RATIO = 1.618;

const styles = {
  hero: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',         // scale to cover entire container
    backgroundRepeat: 'no-repeat',   // prevent repeating
    backgroundPosition: 'center',    // center the image
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    transform: 'translatey(-20px)',
  },
  heading: {
    color: '#fff',
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '3rem',
    textAlign: 'center',
    letterSpacing: '1px',
    zIndex: 2,
    transform: 'translatey(-50px)',
    fontFamily: '"Orange Avenue Demo", sans-serif',
  },
  subtitle: {
    color: '#fff',
    fontSize: `${3 / GOLDEN_RATIO}rem`,
    fontWeight: 400,
    marginBottom: '0.75rem',
    textAlign: 'center',
    maxWidth: '600px',
    zIndex: 2,
  },
  button: {
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#222222cb',
    border: 'none',
    borderRadius: '1rem',
    padding: `0.6rem ${GOLDEN_RATIO}rem`,
    fontSize: '1.15rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    transition: 'background 0.2s, color 0.2s',
    zIndex: 2,
    transform: 'translatey(-97px)',
  },
};

const HeroSection = () => (
  <div style={styles.hero}>
      <img
        src={heroImage}
        alt=""
        fetchpriority="high"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
    <div style={styles.overlay}>
      <h1 style={styles.heading}>Handcrafted Luxury</h1>
      <Link to="/collection" style={{ textDecoration: 'none' }}>
        <button style={styles.button}>Shop Now</button>
      </Link>
    </div>
  </div>
);

export default HeroSection;