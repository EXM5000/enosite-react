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
        <h2 style={titleStyle}>About Us</h2>
        <p style={textStyle}>
          Sam and I have been in business together since we were 14. The both of us have always loved the idea of creating and growing something from scratch. After a series of failed T-shirt brands and coffee supply companies, we had our first crack at candles in the fall of 2024. <br></br><br></br>Concrete jars, soy wax, and a shed in my backyard created Flame. As it turns out, Concrete is not easy to work with, and we ended up ditching the project around Febuary. The scent and wax we're great, but the jars just weren't practical. Then, come summer 2025, I receive a text from Sam asking for the supplies to make candles. <br></br><br></br>He wanted a summer project; It was never supposed to be a business. A few days later, he came back with these awesome, minimalist candles, and I just knew we had to sell them. When we posted them on Facebook, we had something like 20 orders in the first 2 hours. And so, here we are! <br></br><br></br> - Evan
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
