import React from 'react';
import ffr from './assets/ffr.jpeg';
import '@fontsource/roboto';

const ShippingDisc = () => {
  return (
    <section style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={ffr} alt="Candles" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>Buy More, Save More</h2>
        <p style={textStyle}>
          Shipping is usually about the same rate — whether you buy one candle or four. Fill your box
          and make the most of your order by mixing and matching scents you love.
          <br></br><br></br>Shipping times may vary based on order volume, but we strive to process and ship all orders within 3-5 business days. Please contact us with any questions or concerns.
        </p>
      </div>
      <div style={arrowContainerStyle}>
        <div style={arrowStyle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 16l-6-6h12z"/>
          </svg>
        </div>
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
  padding: '80px 40px',
  boxSizing: 'border-box',
};

const imageContainerStyle = {
  flex: '1 1 400px',
  maxWidth: '500px',
  paddingRight: '40px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  objectFit: 'cover',
};

const textContainerStyle = {
  flex: '1 1 400px',
  maxWidth: '500px',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '20px',
  color: '#111',
  fontFamily: "'Roboto', sans-serif",
};

const textStyle = {
  fontSize: '1.2rem',
  color: '#555',
  lineHeight: '1.6',
  fontFamily: "'Roboto', sans-serif",
};

const arrowContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const arrowStyle = {
  fontSize: '2rem',
  color: '#555',
  animation: 'bounce 2s infinite',
  display: 'block',
};

// Add keyframes for bounce animation
const styleSheet = document.styleSheets[0];
const keyframes =
`@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(10px); }
    60% { transform: translateY(5px); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default ShippingDisc;
