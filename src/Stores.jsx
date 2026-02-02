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
        <div style={{ ...textContainerStyle, marginTop: '100px' }}>
          <h2 style={{ ...titleStyle, textAlign: 'center' }}>2026 markets</h2>
          <ul style={listStyle}>
            <li>
              <div style={storeNameStyle}>Girls Night Out at the Revlery</div>
              <div style={locationStyle}>Jan 31 - 1383 Ellis St, Kelowna, BC V1Y 1Z9</div>
            </li>
            <li>
              <div style={storeNameStyle}>Girls Night Out at Skyhanger</div>
              <div style={locationStyle}>Feb 13 - 18799 Airport Wy #170, Pitt Meadows, BC V3Y 2M5</div>
            </li>
            <li>
              <div style={storeNameStyle}>Spring at Southlands</div>
              <div style={locationStyle}>April 4 - 6313 Market Ave, Delta, BC V4L 0B1</div>
            </li>
            <li>
              <div style={storeNameStyle}>Spring at Clayton</div>
              <div style={locationStyle}>April 5 - 7155 187a St. Surrey, BC, V4N 6L9</div>
            </li>
            <li>
              <div style={storeNameStyle}>Spring at Harris Barn</div>
              <div style={locationStyle}>April 11, 12 - 4140 Arthur Dr, Delta, BC V4K 1C7</div>
            </li>
            <li>
              <div style={storeNameStyle}>Kelowna Spring Pop Up</div>
              <div style={locationStyle}>May 3 - 1304 Ellis St, Kelowna, BC V1Y 1Z9</div>
            </li>
            <li>
              <div style={storeNameStyle}>Langley Mother's Day Spring Market</div>
              <div style={locationStyle}>May 9 - 20098 22 Avenue, Langley Township, BC V2Z 1X4</div>
            </li>
            <li>
              <div style={storeNameStyle}>Shipyards Night Market</div>
              <div style={locationStyle}>Fridays, May 15 to Sept 11 - 1371 Kebet Way, Port Coquitlam, BC V3C 6G1</div>
            </li>
            <li>
              <div style={storeNameStyle}>North Delta Farmers Market</div>
              <div style={locationStyle}>Saturdays, May 30 to Oct 3 - 11415 84 Ave, Delta, BC V4C 2L9</div>
            </li>
            <li>
              <div style={storeNameStyle}>Portabello West Summer Shoppe Market</div>
              <div style={locationStyle}>Aug 29 & 30 - 181 Roundhouse Mews, Vancouver, BC V6Z 2W3</div>
            </li>
            <li>
              <div style={storeNameStyle}>Langley Grand Christmas Market</div>
              <div style={locationStyle}>Nov 21 - 20098 22 Ave, Langley Twp, BC V2Z 1X4</div>
            </li>
            <li>
              <div style={storeNameStyle}>Chilliwack Grand Festive Market</div>
              <div style={locationStyle}>Nov 21 - 45530 Spadina Ave, Chilliwack, BC V2P 1V3</div>
            </li>
          </ul>
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
