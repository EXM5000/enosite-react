import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import txtLogo from './assets/txtLogo1.png'; // import your logo image
import { IoCartOutline } from 'react-icons/io5';

function NavBar({ onCartClick, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // Close menu on navigation (mobile)
  const handleMenuLinkClick = () => setMenuOpen(false);
  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .navbar-root {
            padding: 0 1rem !important;
            height: 56px !important;
          }
          .navbar-burger {
            display: flex !important;
          }
          .navbar-logo {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 1020;
          }
          .navbar-centerlinks {
            display: none !important;
          }
          .navbar-cart {
            position: absolute !important;
            right: 1rem !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          .navbar-menu-mobile {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 56px;
            left: 0;
            right: 0;
            background: rgba(255,255,255,0.98);
            box-shadow: 0 4px 16px rgba(0,0,0,0.08);
            z-index: 1010;
            padding: 1rem 0;
            animation: navbarMenuDropdown 0.18s ease;
          }
          .navbar-menu-mobile ul {
            flex-direction: column !important;
            gap: 0.75rem !important;
            align-items: center;
            margin: 0;
            padding: 0;
          }
          .navbar-menu-mobile li {
            list-style: none;
          }
        }
        @media (min-width: 769px) {
          .navbar-burger {
            display: none !important;
          }
          .navbar-menu-mobile {
            display: none !important;
          }
        }
        .navbar-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          cursor: pointer;
          z-index: 1021;
        }
        .navbar-burger-bar {
          width: 24px;
          height: 3px;
          background: #0d0d0d;
          margin: 3px 0;
          border-radius: 2px;
          transition: all 0.28s cubic-bezier(.4,2,.6,1);
        }
        .navbar-burger.open .bar1 {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar-burger.open .bar2 {
          opacity: 0;
        }
        .navbar-burger.open .bar3 {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        @keyframes navbarMenuDropdown {
          from { opacity: 0; transform: translateY(-15px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
      <nav style={styles.nav} className="navbar-root">
        {/* Burger menu for mobile */}
        <div
          className={`navbar-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          tabIndex={0}
          role="button"
        >
          <div className="navbar-burger-bar bar1"></div>
          <div className="navbar-burger-bar bar2"></div>
          <div className="navbar-burger-bar bar3"></div>
        </div>
        {/* Logo as image */}
        <Link to="/" style={{ ...styles.logo, textDecoration: 'none' }} className="navbar-logo">
          <img src={txtLogo} alt="Ember & Oak" style={styles.logoImage} />
        </Link>

        <div style={styles.centerLinks} className="navbar-centerlinks">
          <ul style={styles.links}>
            <li><Link to="/" style={styles.individualLinks}>Home</Link></li>
            <li><Link to="/collection" style={styles.individualLinks}>Shop</Link></li>
            <li><Link to="/about" style={styles.individualLinks}>About</Link></li>
            <li><Link to="/contact" style={styles.individualLinks}>Contact</Link></li>
          </ul>
        </div>

        <div style={styles.cart} className="navbar-cart" onClick={onCartClick}>
          <IoCartOutline style={{ transform: 'translateY(5px)' }} />
          <span style={styles.cartCount}>{cartCount}</span>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="navbar-menu-mobile">
            <ul style={{ ...styles.links, flexDirection: 'column', gap: '0.75rem', alignItems: 'center', margin: 0, padding: 0 }}>
              <li><Link to="/" style={styles.individualLinks} onClick={handleMenuLinkClick}>Home</Link></li>
              <li><Link to="/collection" style={styles.individualLinks} onClick={handleMenuLinkClick}>Shop</Link></li>
              <li><Link to="/about" style={styles.individualLinks} onClick={handleMenuLinkClick}>About</Link></li>
              <li><Link to="/contact" style={styles.individualLinks} onClick={handleMenuLinkClick}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(14px) saturate(180%)',
    WebkitBackdropFilter: 'blur(14px) saturate(180%)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 -2px 6px rgba(255, 255, 255, 0.25)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.35)',
    color: '#0d0d0d',
    width: '100vw',
    boxSizing: 'border-box',
    position: 'fixed',
    top: '0',
    zIndex: '1000'
  },
  logo: {
    cursor: 'pointer', // ensure clickable
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(2px)'
  },
  logoImage: {
    height: '120px', // adjust as needed
    objectFit: 'contain'
  },
  centerLinks: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem'
  },
  individualLinks: {
    textDecoration: 'none',
    color: '#0d0d0d',
    fontSize: '1rem'
  },
  cart: {
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'relative'
  },
  cartCount: {
    position: 'absolute',
    top: '-1px',
    right: '-6px',
    backgroundColor: '#f6f7f2',
    color: '#0d0d0d',
    borderRadius: '50%',
    padding: '2px 0px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    lineHeight: '1',
    minWidth: '15px',
    textAlign: 'center',
    boxShadow: '0 0 2px rgba(0,0,0,0.5)'
  }
}

export default NavBar;