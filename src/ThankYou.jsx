import React from 'react';
import heart from './assets/heart.png';
import '@fontsource/roboto';

const ThankYou = () => {
  return (
    <section style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={heart} alt="Thank You" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Thank you for your order!</h1>
        <p style={textStyle}>We appreciate your support. Your order is being processed. Contact us for order details.</p>
      </div>
    </section>
  );
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100vw',
  padding: '100px 40px',
  boxSizing: 'border-box',
  backgroundColor: '#f9f9f9',
  minHeight: '100vh',
};

const imageContainerStyle = {
  flex: '1 1 300px',
  maxWidth: '400px',
  paddingRight: '40px',
};

const imageStyle = {
  width: '80%',
  height: 'auto',
  borderRadius: '12px',
  objectFit: 'cover',
};

const textContainerStyle = {
  flex: '1 1 300px',
  maxWidth: '500px',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: '700',
  marginBottom: '20px',
  color: '#222',
  fontFamily: "'Roboto', sans-serif",
};

const textStyle = {
  fontSize: '1.3rem',
  color: '#555',
  lineHeight: '1.6',
  fontFamily: "'Roboto', sans-serif",
};

export default ThankYou;
