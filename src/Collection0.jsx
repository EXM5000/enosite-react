import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
import ffr from './assets/ffr.jpeg';
import fusionBg from './assets/fusionBg.jpg';

const CandleModal = ({ candle, onClose, onAddToCart }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (candle) {
      document.body.style.overflow = 'hidden';
      setVisible(true);
    } else {
      document.body.style.overflow = 'auto';
      setVisible(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [candle]);

  if (!candle) return null;

  return (
    <div
      style={modalOverlayStyle}
      onClick={onClose}
    >
      <div
        style={{
          ...modalContentStyle,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={modalCloseButtonStyle} 
          aria-label="Close modal"
          onMouseEnter={e => e.currentTarget.style.color = '#cc6666'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}
        >&times;</button>
        <div style={{ width: '100%', height: 350, overflow: 'hidden', borderRadius: 8, margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={candle.image}
            alt={candle.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <h2 style={{ marginTop: 16, color: '#222', fontWeight: '800', fontSize: '2rem' }}>{candle.name}</h2>
        <p
          style={{
            fontSize: '1.236rem',
            color: '#777',
            marginTop: 4,
            marginBottom: 12,
            textAlign: 'left',
          }}
        >
          Size: 6oz | Burn Time: ~35 hours
        </p>
        <p style={{ fontStyle: 'italic', color: '#000', marginBottom: 12, fontSize: '1rem' }}>{candle.longDescription}</p>
        <div style={{ marginBottom: 0 }}>
          <div
            style={{
              marginLeft: 0,
              paddingLeft: 0,
              marginBottom: 0,
              fontSize: '1rem',
              color: '#777',
              fontStyle: 'italic',
            }}
          >
            <div><strong>Top:</strong> {candle.notes.top}</div>
            <div><strong>Middle:</strong> {candle.notes.middle}</div>
            <div><strong>Base:</strong> {candle.notes.base}</div>
          </div>
        </div>
        <p style={{ fontWeight: 'bold', marginTop: 8, color: '#000', fontStyle: 'italic', fontSize: '1rem' }}>${candle.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(candle)}
          style={modalAddToCartButtonStyle}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Collection1 = ({ addToCart }) => {
  const [selectedCandle, setSelectedCandle] = useState(null);

  const holidayCandles = [
    {
      id: 1,
      name: 'Unscented',
      image: ffr,
      shortDescription: 'Simple, clean, and perfect for any occasion.',
      longDescription: 'Enjoy the warm glow without any fragrance. Perfect for those who prefer a scent-free ambiance.',
      price: 19.99,
      notes: {
        top: '', 
        middle: '',
        base: '',
      },
      burnTime: '40-50 hours', 
      size: '8 oz (227g)',
    },
  ];

  const handleAddToCart = (candle) => {
    addToCart(candle);
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headerStyle}>More Options</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '12px 20px',
        marginBottom: '30px',
        fontSize: '0.95rem',
        color: '#444'
      }}>
        <span style={{ whiteSpace: 'nowrap', padding: '4px 8px', backgroundColor: '#f5f5f5', borderRadius: 6 }}>✔ Hand-Poured in Canada</span>
        <span style={{ whiteSpace: 'nowrap', padding: '4px 8px', backgroundColor: '#f5f5f5', borderRadius: 6 }}>✔ 100% Soy Wax</span>
        <span style={{ whiteSpace: 'nowrap', padding: '4px 8px', backgroundColor: '#f5f5f5', borderRadius: 6 }}>✔ Clean Burn</span>
      </div>
      <div style={gridStyle}>
        {holidayCandles.map(candle => (
          <div key={candle.id} style={cardStyle} onClick={() => setSelectedCandle(candle)} onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
          }} onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}>
            <div style={imageContainerStyle}>
              <img src={candle.image} alt={candle.name} style={imageStyle} />
            </div>
            <h3 style={titleStyle}>{candle.name}</h3>
            <p style={descriptionStyle}>{candle.shortDescription}</p>
            <p style={{ fontWeight: '700', margin: '6px 20px 0 20px', textAlign: 'center', color: '#111' }}>
              ${candle.price.toFixed(2)}
            </p>
            <div style={{ flexGrow: 1 }}></div>
            <div style={buttonContainerStyle}>
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedCandle(candle); }}
                style={viewDetailsButtonStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d3d3d3'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label={`View details of ${candle.name}`}
              >
                View Details
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleAddToCart(candle); }}
                style={addToCartTextButtonStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#555555'}
                onMouseLeave={e => e.currentTarget.style.color = '#000000'}
                aria-label={`Add ${candle.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        <div style={fusionCardStyle}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: 12 }}></div>
          <div style={{ position: 'relative', textAlign: 'center', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Fusion Scents</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Discover our unique blends. Contact us to create your custom scent experience.
            </p>
            <a href="/contact" style={fusionButtonStyle}>Let's Create!</a>
          </div>
        </div>
      </div>
      <CandleModal
        candle={selectedCandle}
        onClose={() => setSelectedCandle(null)}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
};

// Styles
const sectionStyle = {
  width: '100vw',
  margin: '0',
  padding: '60px 20px 100px',
  fontFamily: "'Roboto', sans-serif",
  boxSizing: 'border-box',
};

const headerStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: 40,
  color: '#222',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 24,
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'default',
  minHeight: 430,
};

const fusionCardStyle = {
  gridColumn: 'span 3',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#fff',
  borderRadius: 12,
  padding: 40,
  minHeight: 430,
  backgroundImage: `url(${fusionBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
};

const fusionButtonStyle = {
  display: 'inline-block',
  backgroundColor: '#f0f0f0',
  color: '#000',
  padding: '12px 24px',
  borderRadius: 8,
  fontWeight: '600',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

const imageContainerStyle = {
  width: 'calc(100% - 20px)',
  overflow: 'hidden',
  margin: '10px 10px',
  borderRadius: 8,
  height: 160,
};

const imageStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  margin: '20px 20px 8px 20px',
  color: '#111',
  textAlign: 'center',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  margin: '0 20px 6px 20px',
  flexGrow: 0,
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: '0 20px 20px 20px',
};

const baseButtonStyle = {
  border: 'none',
  borderRadius: 8,
  padding: '12px 20px',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

const viewDetailsButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: 'transparent',
  color: '#000',
  border: '1px solid #ccc',
  fontWeight: '400',
};

const addToCartTextButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#f0f0f0',
  color: '#000',
  textAlign: 'center',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: 20,
  backdropFilter: 'blur(6px)',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  borderRadius: 12,
  maxWidth: 500,
  width: '100%',
  padding: 24,
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  position: 'relative',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const modalCloseButtonStyle = {
  position: 'absolute',
  top: 12,
  right: 16,
  background: 'none',
  border: 'none',
  fontSize: 28,
  fontWeight: '700',
  cursor: 'pointer',
  color: '#666',
  lineHeight: 1,
  outline: 'none',
};

const modalAddToCartButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#f0f0f0',
  color: '#000',
  width: '100%',
  marginTop: 20,
};

export default Collection1;
