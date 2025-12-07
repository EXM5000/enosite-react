import React from 'react';
import us from './assets/us.png';
import '@fontsource/roboto';

const ShippingDisc = () => {
  return (
    <section style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={us} alt="Candles" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>About Our Brand</h2>
        <p style={textStyle}>
          Our candles are lovingly handcrafted by two friends in Tsawwassen, BC. Each candle is made with care, using non-toxic ingredients and 100% soy wax, designed to bring warmth, comfort, and a touch of nostalgia to your home. Thank you for sharing in our journey and supporting our small, heartfelt craft.
        </p>
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
  padding: '130px 40px 80px',
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

export default ShippingDisc;
