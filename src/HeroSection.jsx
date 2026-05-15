import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './assets/SummerCollection.jpg';

const GOLDEN_RATIO = 1.618;

const styles = {
  hero: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundImage: 'none',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: window.innerWidth <= 600 ? '3rem' : '0',
    zIndex: 1,
    transform: window.innerWidth <= 600 ? 'translateY(40px)' : 'translateY(-40px)',
  },
  heading: {
    color: '#214723',
    textShadow: '0 0 18px rgba(255, 255, 255, 0.95), 0 0 40px rgba(255, 255, 255, 0.5)',
    fontSize: '3rem',
    fontWeight: 300,
    marginBottom: window.innerWidth <= 600 ? '3rem' : '1.5rem',
    textAlign: 'center',
    letterSpacing: '1px',
    zIndex: 2,
    transform: window.innerWidth <= 600 ? 'translateY(calc(-200px - 3vh))' : 'translateY(calc(-150px - 3vh))',
    fontFamily: '"Merriweather", serif',
  },
  button: {
    background: 'transparent',
    color: '#000',
    border: '2px solid #000',
    borderRadius: '0.5rem',
    padding: `0.6rem ${GOLDEN_RATIO}rem`,
    fontSize: '1.15rem',
    fontWeight: 400,
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    zIndex: 2,
    maxWidth: '300px',
    position: 'absolute',
    top: window.innerWidth <= 600 ? '75%' : '91%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const HeroSection = () => {

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      <div style={styles.hero}>
          <img
            src={heroImage}
            alt=""
            fetchpriority="high"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center bottom',
              zIndex: 0,
              clipPath: 'inset(2% 0 0 0)',
            }}
          />
        <div style={styles.overlay}>
          <h1 style={styles.heading}>The Summer Collection is Here!
          </h1>
          <Link to="/collection" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Shop now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;