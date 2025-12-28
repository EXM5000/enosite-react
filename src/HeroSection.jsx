import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './assets/hero.jpg';

const reviews = [
  "\"Beautifully crafted candles, long burn time and unforgettable cozy fragrances.\" - Mario O. Jr.",
  "\"My girlfriend loved these, 100% recommend.\" - Mac M.",
  "\"These candles make for perfect gifts!\" - Ella M.",
  "\"Everyone keeps asking how my house smells so good!\" - Chantelle G.",
  "\"This company, no joke, restores my faith in humanity.\" - Gregory M.",
];

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
    justifyContent: window.innerWidth <= 600 ? 'flex-end' : 'center',
    paddingBottom: window.innerWidth <= 600 ? '3rem' : '0',
    zIndex: 1,
    transform: 'translatey(-20px)',
  },
  heading: {
    color: '#fff',
    fontSize: '3rem',
    fontWeight: 300,
    marginBottom: window.innerWidth <= 600 ? '3rem' : '1.5rem',
    textAlign: 'center',
    letterSpacing: '1px',
    zIndex: 2,
    transform: window.innerWidth <= 600 ? 'translateY(-260px)' : 'translateY(-90px)',
    fontFamily: '"Merriweather", serif',
  },
  tickerContainer: {
    position: 'relative',
    width: window.innerWidth <= 600 ? '80%' : '40%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginBottom: window.innerWidth <= 600 ? '1rem' : '2rem',
    zIndex: 2,
    transform: window.innerWidth <= 600 ? 'translateY(0)' : 'translateY(-107px)',
    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
  },
  ticker: {
    display: 'inline-block',
    paddingLeft: '0',
    animation: 'scrollRightToLeft 150s linear infinite',
    color: '#ffffffa6',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    userSelect: 'none',
  },
  review: {
    display: 'inline-block',
    marginRight: '4rem',
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
    transform: window.innerWidth <= 600 ? 'translateY(0)' : 'translateY(-120px)',
  },
};

const HeroSection = () => (
  <>
    <link 
      href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" 
      rel="stylesheet" 
    />
    <style>{`
      @keyframes scrollRightToLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
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
        <div style={styles.tickerContainer}>
          <div style={styles.ticker}>
            {[...reviews, ...reviews].map((review, index) => (
              <span key={index} style={styles.review}>{review}</span>
            ))}
          </div>
        </div>
        <Link to="/collection" style={{ textDecoration: 'none' }}>
          <button style={styles.button}>Shop now</button>
        </Link>
      </div>
    </div>
  </>
);

export default HeroSection;