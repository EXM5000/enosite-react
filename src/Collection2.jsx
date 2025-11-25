import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
import ags from './assets/204temp.jpg';
import bnb from './assets/201temp.jpg';
import psb from './assets/203temp.jpg';
import clt from './assets/202temp.jpg';

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
      name: 'Pumpkin Spice Buttercream',
      image: psb,
      shortDescription: 'Warm pumpkin, creamy butter, and cozy spices blended into a soft autumn treat.',
      longDescription: 'A rich swirl of pumpkin purée, melted buttercream, and warm cinnamon creates a sweet, bakery‑inspired aroma that feels like fresh fall baking straight from the oven.',
      price: 19.99,
      notes: {
        top: 'Pumpkin, Brown Sugar',
        middle: 'Cinnamon, Clove',
        base: 'Butter, Cream, Vanilla, Nutmeg',
      },
      burnTime: '50-60 hours',
      size: '8 oz (227g)',
    },
    {
      id: 2,
      name: 'Apple Ginger Spritz',
      image: ags,
      shortDescription: 'Crisp apple and bright ginger come together for an energizing, sparkling fall scent.',
      longDescription: 'Fresh orchard apples and zesty ginger blend into a light, effervescent fragrance that feels refreshing, clean, and uplifting—like a cool autumn morning with a bright citrus twist.',
      price: 19.99,
      notes: {
        top: 'Orange Peel, Cinnamon, Lemon',
        middle: 'Cranberry, Red Currant, Apple Cider',
        base: 'Red Wine, Wood',
      },
      burnTime: '45-55 hours',
      size: '7 oz (198g)',
    },
    {
      id: 3,
      name: 'Butterscotch & Bourbon',
      image: bnb,
      shortDescription: 'Rich butterscotch and smooth bourbon melt into a warm, indulgent fall fragrance.',
      longDescription: 'Golden butterscotch, aged bourbon, and soft vanilla create a deep, comforting scent with a touch of sweetness. A warm, luxurious blend perfect for slow evenings and relaxing spaces.',
      price: 19.99,
      notes: {
        top: 'Citrus',
        middle: 'Plum, Black Cherry',
        base: 'Sugar, Light Musk, Amber, Freesia, Vanilla',
      },
      burnTime: '55-65 hours',
      size: '8.5 oz (241g)',
    },
    {
      id: 4,
      name: 'Caramel Latté',
      image: clt,
      shortDescription: 'Creamy caramel and fresh-roasted espresso wrapped in a smooth, cozy café aroma.',
      longDescription: 'Sweet caramel drizzle, bold espresso, and a hint of warm spice blend into a comforting, café-style scent that feels like settling in with your favorite warm drink on a cool autumn day.',
      price: 19.99,
      notes: {
        top: 'Bergamont, Hemp',
        middle: 'Peppercorn, Rum, Patchouli',
        base: 'Sandalwood, Leather',
      },
      burnTime: '50-60 hours',
      size: '8 oz (227g)',
    },
  ];

  const handleAddToCart = (candle) => {
    addToCart(candle);
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headerStyle}>The Autumn Collection</h1>
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
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <h3 style={titleStyle}>{candle.name}</h3>
              <p style={descriptionStyle}>{candle.shortDescription}</p>
              <p style={{ fontWeight: '700', margin: '6px 20px 0 20px', textAlign: 'center', color: '#111' }}>
                ${candle.price.toFixed(2)}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#777', margin: '0 20px 10px 20px', textAlign: 'center', fontStyle: 'italic' }}>
                Notes: {candle.notes.top}
              </p>
            </div>
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

const imageContainerStyle = {
  width: 'calc(100% - 20px)',
  overflow: 'hidden',
  margin: '10px 10px',
  borderRadius: 8,
  height: 350,
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
