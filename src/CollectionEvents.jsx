import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
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
  ];

  const handleAddToCart = (candle) => {
    addToCart(candle);
  };

  const soloTicket = {
    id: 'workshop-solo',
    name: 'Candle Workshop Solo Ticket',
    image: fusionBg,
    price: 40,
  };

  const duoTicket = {
    id: 'workshop-duo',
    name: 'Candle Workshop Duo Ticket',
    image: fusionBg,
    price: 70,
  };

  const handleSoloAdd = (e) => {
    e.stopPropagation();
    addToCart(soloTicket);
  };

  const handleDuoAdd = (e) => {
    e.stopPropagation();
    addToCart(duoTicket);
  };

  return (
    <section style={sectionStyle}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '12px 20px',
        marginBottom: '30px',
        fontSize: '0.95rem',
        color: '#444'
      }}>
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
            <p style={{ fontSize: '0.9rem', marginBottom: '-0.5rem'}}>
              Presented by Ember & Oak + The Vault Room
            </p>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Candle Workshop</h3>
            <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
            Learn about the careful, intricate process required to make a great candle as you pour two candles each with your choice of scent and a custom label.<br/><br/>3:00pm - 4:30pm, March 28 <br/><br/> The Vault Room, 1248 56th st, Delta, BC
            </p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 12, width: '100%', maxWidth: 400, justifyContent: 'center' }}>
              <button
                onClick={handleSoloAdd}
                style={{ ...baseButtonStyle, backgroundColor: '#f0f0f0', color: '#000' }}
                aria-label="Solo Ticket (1 Person) - $40"
                dangerouslySetInnerHTML={{ __html: "Solo Ticket<br/>(1 Person) - $40" }}
              >
              </button>
              <button
                onClick={handleDuoAdd}
                style={{ ...baseButtonStyle, backgroundColor: '#f0f0f0', color: '#000' }}
                aria-label="Duo Ticket (2 People) - $70"
                dangerouslySetInnerHTML={{ __html: "Duo Ticket<br/>(2 People) - $70" }}
              >
              </button>
            </div>
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

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: window.innerWidth <= 640 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: window.innerWidth <= 640 ? 12 : 24,
  justifyContent: window.innerWidth <= 640 ? 'center' : 'initial',
  justifyItems: window.innerWidth <= 640 ? 'center' : 'stretch',
  maxWidth: '100%',
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
  width: window.innerWidth <= 640 ? '90%' : 'auto',
  margin: window.innerWidth <= 640 ? '0 auto' : 'initial', 
  justifySelf: window.innerWidth <= 640 ? 'center' : 'auto',
};

const fusionCardStyle = {
  gridColumn: window.innerWidth <= 640 ? 'auto' : 'span 3',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#fff',
  borderRadius: 12,
  padding: 60,
  minHeight: 645,
  backgroundImage: `url(${fusionBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
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
