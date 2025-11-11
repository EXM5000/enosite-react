import React from 'react';
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
    background: 'rgba(0,0,0,0.45)',
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
    transform: 'translatey(-0px)',
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
    background: '#fff',
    color: '#222',
    border: 'none',
    borderRadius: '2rem',
    padding: `1rem ${GOLDEN_RATIO}rem`,
    fontSize: '1.15rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    transition: 'background 0.2s, color 0.2s',
    zIndex: 2,
  },
};

const HeroSection = () => (
  <div style={styles.hero}>
    <div style={styles.overlay}>
      <h1 style={styles.heading}>Handcrafted Luxury</h1>
      <button style={styles.button}>Shop Now</button>
    </div>
  </div>
);

export default HeroSection;