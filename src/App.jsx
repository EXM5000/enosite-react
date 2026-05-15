import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import HeroSection from './HeroSection.jsx';
import Cart from './Cart.jsx';
import CollectionPrevious from './CollectionPrevious.jsx';
import Collection0 from './Collection0.jsx';
import Collection4 from './Collection4.jsx';
import Collection5 from './Collection5.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Stores from './Stores.jsx';
import Contact from './Contact.jsx';
import SpecialFeatures from './Features.jsx';
import ThankYou from './ThankYou.jsx';
import CollectionEvents from './CollectionEvents.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  React.useEffect(() => {
    document.title = "Ember & Oak | Hand-Poured Soy Candles Online";
  }, []);
  const [isOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const addToCart = (product, openCart = true) => {
    setCartItems(prev => {
      const index = prev.findIndex(i => i.id === product.id);
      if (index !== -1) {
        const newCart = [...prev];
        newCart[index] = { ...newCart[index], quantity: (newCart[index].quantity ?? 0) + 1 };
        return newCart;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    if (openCart) setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0
  );

  return (
    <Router>
      <ScrollToTop />
      <NavBar onCartClick={toggleCart} cartCount={totalCartCount} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Collection5 addToCart={addToCart} />
            <SpecialFeatures />
          </>
        } />
        <Route
          path="/collection"
          element={
            <div style={{ paddingTop: '0px' }}>
              <Collection5 addToCart={addToCart} />
              <Collection4 addToCart={addToCart} />
              <CollectionPrevious addToCart={addToCart} />
              <Collection0 addToCart={addToCart} />
            </div>
          }
        />
          <Route
            path="/about"
            element={<About />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route
            path="/events"
            element={
              <>
                <CollectionEvents addToCart={addToCart} />
                <Stores />
              </>
            }
          />
      </Routes>
      <Cart
        cart={cartItems}
        setCart={setCartItems}
        isOpen={isOpen}
        toggleCart={toggleCart}
      />
      <Footer />
    </Router>
  );
}

export default App;