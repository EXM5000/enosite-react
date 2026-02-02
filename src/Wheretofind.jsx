import React from 'react';
import '@fontsource/roboto';

const ShippingDisc = () => {
  return (
    <section style={containerStyle}>
      <div style={textContainerStyle}>
        <h2 style={{ ...titleStyle, textAlign: 'center' }}>Where to Find Us</h2>
        <p style={textStyle}>
          You can find our candles stocked at a small selection of thoughtfully chosen retailers. We partner with stores that value craftsmanship, local makers, and timeless design.
        </p>
        <ul style={listStyle}>
          <li>
            <div style={storeNameStyle}>The Hub Refillery</div>
            <div style={locationStyle}>Tsawwassen, BC</div>
          </li>
          <li>
            <div style={storeNameStyle}>The Vault Room</div>
            <div style={locationStyle}>Tsawwassen, BC</div>
          </li>
          <li>
            <div style={storeNameStyle}>Out of the Cellar</div>
            <div style={locationStyle}>Rossland, BC</div>
          </li>
        </ul>
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
  padding: '0 40px 80px',
  boxSizing: 'border-box',
};

const textContainerStyle = {
  flex: '1 1 400px',
  maxWidth: '500px',
  margin: '0 auto',
  textAlign: 'center',
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
  marginBottom: '10px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  fontFamily: "'Roboto', sans-serif",
};

const storeNameStyle = {
  fontSize: '1.15rem',
  fontWeight: '600',
  color: '#111',
  letterSpacing: '0.2px',
};

const locationStyle = {
  fontSize: '0.95rem',
  color: '#777',
  marginTop: '2px',
};

export default ShippingDisc;
