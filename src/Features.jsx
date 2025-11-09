import React from 'react';
import ffr from './assets/ffr.jpeg';
import '@fontsource/roboto';

const SpecialFeatures = () => {
  return (
    <section style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={ffr} alt="Candles" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>What's so special about these candles?</h2>
        <p style={textStyle}>
          Our candles are crafted with non-toxic ingredients and 100% soy wax, ensuring a clean and safe burn. Each piece is handcrafted in Tsawwassen, BC, reflecting our commitment to quality and community. Embracing minimalism and clean luxury design, our scents are thoughtfully curated to evoke deep emotions and nostalgic memories.
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

export default SpecialFeatures;
