import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
import oceanBreeze from './assets/5.webp';
import peachBellini from './assets/6.webp';
import santalCoconut from './assets/7.webp';
import limoncelloCreme from './assets/8.webp';

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
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.25) translate(-6px, 6px)', objectPosition: 'center' }}
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
          onClick={() => !candle.outOfStock && onAddToCart(candle)}
          disabled={candle.outOfStock}
          style={{
            ...modalAddToCartButtonStyle,
            backgroundColor: candle.outOfStock ? '#e0e0e0' : '#f0f0f0',
            color: candle.outOfStock ? '#888' : '#000',
            cursor: candle.outOfStock ? 'not-allowed' : 'pointer',
          }}
        >
          {candle.outOfStock ? 'Sold Out' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const Collection1 = ({ addToCart }) => {
  const [selectedCandle, setSelectedCandle] = useState(null);

  const summerCandles = [
    {
      id: 501,
      outOfStock: false,
      name: 'Ocean Breeze',
      image: oceanBreeze,
      shortDescription: 'Fresh ocean air blended with clean citrus and soft coastal musk.',
      longDescription: 'Cool marine notes, airy citrus, and soft driftwood create a crisp, refreshing scent inspired by saltwater air and warm summer evenings by the coast.',
      price: 19.99,
      notes: {
        top: 'Lemon, Lime, Sea Salt',
        middle: 'Ozone, Marine, Green Floral',
        base: 'Cotton Blossom, Musk, Violet, Wood',
      },
      burnTime: '~35 hours',
      size: '6oz',
    },
    {
      id: 502,
      outOfStock: false,
      name: 'Peach Bellini',
      image: peachBellini,
      shortDescription: 'Juicy peach and sparkling prosecco with a bright summer sweetness.',
      longDescription: 'Sweet ripe peaches blended with bubbly citrus and soft vanilla create a playful, refreshing fragrance inspired by a chilled peach bellini on a sunny patio.',
      price: 19.99,
      notes: {
        top: 'Tangerine, Peach',
        middle: 'Mango, Carnation, Passionfruit',
        base: 'Sandalwood, Petitgrain',
      },
      burnTime: '~35 hours',
      size: '6oz',
    },
    {
      id: 503,
      outOfStock: false,
      name: 'Santal + Coconut',
      image: santalCoconut,
      shortDescription: 'Creamy coconut layered with warm sandalwood and soft amber.',
      longDescription: 'Smooth coconut and rich sandalwood blend into a warm, luxurious fragrance that feels tropical, cozy, and effortlessly elevated.',
      price: 19.99,
      notes: {
        top: 'Benzoin, Coconut Milk',
        middle: 'Coconut, Sandalwood',
        base: 'Cedar, Tonka Bean, Amyris',
      },
      burnTime: '~35 hours',
      size: '6oz',
    },
    {
      id: 504,
      outOfStock: false,
      name: 'Limoncello Creme',
      image: limoncelloCreme,
      shortDescription: 'Bright lemon zest softened with creamy vanilla and sugar.',
      longDescription: 'Fresh squeezed lemon, whipped vanilla cream, and subtle sugar notes create a smooth citrus dessert fragrance that feels vibrant, creamy, and nostalgic.',
      price: 19.99,
      notes: {
        top: 'Lemon, Sugar, Bergamot, Orange, Mint',
        middle: 'Cake, Butter',
        base: 'Tonka Bean, Honey',
      },
      burnTime: '~35 hours',
      size: '6oz',
    },
  ];

  const handleAddToCart = (candle) => {
    addToCart(candle);
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headerStyle}>The Summer Collection</h1>
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
        {summerCandles.map(candle => (
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
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <h3 style={titleStyle}>{candle.name}</h3>
              {window.innerWidth > 640 && (
                <p style={descriptionStyle}>{candle.shortDescription}</p>
              )}
              {window.innerWidth <= 640 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, margin: '8px 20px' }}>
                  <span style={{ fontWeight: '700', color: '#111', display: 'inline-block', marginBottom: 6 }}>${candle.price.toFixed(2)}</span>
                  {candle.outOfStock && (
                    <span style={{ fontSize: '0.8rem', color: '#b00000', fontWeight: '600' }}>Sold Out</span>
                  )}
                </div>
              ) : (
                <>
                  <p style={{ fontWeight: '700', margin: '6px 20px 6px 20px', textAlign: 'center', color: '#111' }}>
                    ${candle.price.toFixed(2)}
                  </p>
                  {candle.outOfStock && (
                    <p style={{ textAlign: 'center', color: '#b00000', fontWeight: '600', marginTop: 6 }}>Sold Out</p>
                  )}
                </>
              )}
            </div>
            <div style={buttonContainerStyle}>
              {window.innerWidth > 640 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedCandle(candle); }}
                  style={viewDetailsButtonStyle}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  aria-label={`View details of ${candle.name}`}
                >
                  View Details
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!candle.outOfStock) handleAddToCart(candle);
                }}
                disabled={candle.outOfStock}
                style={{
                  ...addToCartTextButtonStyle,
                  backgroundColor: candle.outOfStock ? '#e0e0e0' : '#f0f0f0',
                  color: candle.outOfStock ? '#888' : '#000',
                  cursor: candle.outOfStock ? 'not-allowed' : 'pointer',
                }}
                aria-label={`Add ${candle.name} to cart`}
              >
                {candle.outOfStock ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
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
  gridTemplateColumns: window.innerWidth <= 640 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: window.innerWidth <= 640 ? 12 : 24,
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
  minHeight: window.innerWidth <= 640 ? 380 : 430,
};

const imageContainerStyle = {
  width: 'calc(100% - 20px)',
  overflow: 'hidden',
  margin: '10px 10px',
  borderRadius: 8,
  height: window.innerWidth <= 640 ? 'auto' : 350,
  aspectRatio: window.innerWidth <= 640 ? '1 / 1' : 'auto',
};

const imageStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  transform: 'scale(1.15) translate(-6px, 6px)',
  objectPosition: 'center',
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
