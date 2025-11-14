import React, { useState } from 'react';

const Cart = ({ cart, setCart, isOpen, toggleCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  // submissionStage: 'idle' | 'processing' | 'shipping' | 'checkout' | 'error'
  const [submissionStage, setSubmissionStage] = useState('idle');

  const provincesByCountry = {
    Canada: [
      { code: 'AB', name: 'Alberta' },
      { code: 'BC', name: 'British Columbia' },
      { code: 'MB', name: 'Manitoba' },
      { code: 'NB', name: 'New Brunswick' },
      { code: 'NL', name: 'Newfoundland and Labrador' },
      { code: 'NS', name: 'Nova Scotia' },
      { code: 'ON', name: 'Ontario' },
      { code: 'PE', name: 'Prince Edward Island' },
      { code: 'QC', name: 'Quebec' },
      { code: 'SK', name: 'Saskatchewan' }
    ],
    'United States': [
      { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
      { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
      { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
      { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
      { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
      { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
      { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
      { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
      { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
      { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
      { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
      { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
      { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
      { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
      { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
      { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
      { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
    ]
  };

  // Remove item by id
  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  // Update quantity for item by id
  const updateQuantity = (id, qty) => {
    const quantity = Math.max(1, Number(qty) || 1);
    setCart(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const cartCount = cart.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = cart.reduce((acc, i) => acc + i.quantity * i.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Email is invalid';
    if (!formData.address1.trim()) errors.address1 = 'Address Line 1 is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State/Province is required';
    if (!formData.zip.trim()) errors.zip = 'Postal/ZIP Code is required';
    if (!formData.country.trim()) errors.country = 'Country is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log('[Cart] Form validation failed:', formErrors, formData);
      return;
    }
    setSubmissionStage('processing');
    try {
      console.log('[Cart] Submitting form to Formspree...');
      // 1. Send shipping and cart data to Formspree for notification
      const formspreeRes = await fetch('https://formspree.io/f/movkkpog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          address1: formData.address1,
          address2: formData.address2,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country,
          cart: cart.map(i => ({ id: i.id, name: i.name, quantity: i.quantity, price: i.price })),
          total: totalPrice,
        }),
      });
      let formspreeJson = null;
      try {
        formspreeJson = await formspreeRes.clone().json();
      } catch (err) {
        // ignore JSON parse error
      }
      if (formspreeRes.ok) {
        console.log(`[Cart] Formspree submission succeeded. Status: ${formspreeRes.status}`, formspreeJson);
      } else {
        console.log(`[Cart] Formspree submission failed. Status: ${formspreeRes.status}`, formspreeJson);
      }
      setSubmissionStage('shipping');
      // 2. Request checkout link from Vercel backend
      console.log('[Cart] Requesting checkout link from backend...');
      setSubmissionStage('checkout');
      const backendRes = await fetch('https://eno-site3-backend-aq6fw13fc-evan-mottleys-projects.vercel.app/api/create-checkout-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: cart.map(i => ({
            id: i.id,
            name: i.name,
            quantity: i.quantity,
            price: i.price,
          })),
          shippingData: {
            firstName: formData.name.split(' ')[0] || '',
            lastName: formData.name.split(' ')[1] || '',
            email: formData.email,
            address_line_1: formData.address1,
            address_line_2: formData.address2,
            city: formData.city,
            province: formData.state,
            postalCode: formData.zip,
            country: formData.country,
          }
        }),
      });
      let backendJson = null;
      try {
        backendJson = await backendRes.clone().json();
      } catch (err) {
        // ignore JSON parse error
      }
      if (backendRes.ok) {
        console.log(`[Cart] Backend checkout link succeeded. Status: ${backendRes.status}`, backendJson);
      } else {
        console.log(`[Cart] Backend checkout link failed. Status: ${backendRes.status}`, backendJson);
      }
      if (!backendRes.ok) throw new Error('Checkout link failed');
      const { checkoutUrl } = backendJson || {};
      if (!checkoutUrl) throw new Error('No checkout link returned');
      setFormStatus('success');
      // Clear cart and reset form before redirect
      setCart([]);
      setShowCheckout(false);
      setFormStatus(null);
      setFormData({
        name: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      });
      setFormErrors({});
      setSubmissionStage('idle');
      // Redirect to checkout URL
      window.location.href = checkoutUrl;
    } catch (err) {
      console.log('[Cart] Error during checkout submission:', err);
      setFormStatus('error');
      setSubmissionStage('error');
    }
  };

  return (
    <>
      <style>{`
        *:focus, *:active {
          outline: none !important;
          box-shadow: none !important;
        }
        .cart-container {
          width: 450px;
          height: 100vh;
          border: 1px solid #ccc;
          border-radius: 6px 0 0 6px;
          display: flex;
          flex-direction: column;
          font-family: Arial, sans-serif;
          background: #fff;
          box-sizing: border-box;
          padding: 16px 20px;
          color: #111;
        }
        .cart-header {
          padding: 12px 0;
          border-bottom: 1px solid #ccc;
          font-weight: bold;
          font-size: 1.4em;
          background: #f9f9f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          color: #111;
        }
        .close-cart-btn {
          background: transparent;
          border: none;
          font-size: 1.6em;
          cursor: pointer;
          color: #111;
          padding: 0 8px;
          line-height: 1;
          transition: color 0.3s ease;
        }
        .close-cart-btn:hover {
          color: #444;
        }
        .cart-list {
          flex: 1 1 auto;
          overflow-y: auto;
          padding: 14px 0;
          margin: 0 -20px;
        }
        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid #eee;
          padding-bottom: 12px;
          color: #111;
          font-size: 1.1em;
          padding-left: 16px;
          padding-right: 16px;
        }
        .cart-item-name {
          flex: 1 1 auto;
          margin-right: 16px;
          font-size: 1.15em;
          color: #111;
          word-break: break-word;
        }
        .cart-item-qty {
          width: 64px;
          margin-right: 16px;
          padding: 6px 8px;
          font-size: 1.1em;
          border: 1px solid #bbb;
          border-radius: 4px;
          color: #111;
          background: #fff;
          transition: border-color 0.3s ease;
        }
        .cart-item-qty:focus {
          border-color: #555;
          outline: none;
        }
        .cart-item-price {
          width: 80px;
          text-align: right;
          margin-right: 16px;
          font-weight: 600;
          font-size: 1.15em;
          color: #111;
        }
        .cart-item-remove {
          background: #444;
          border: none;
          color: #fff;
          padding: 6px 14px;
          cursor: pointer;
          border-radius: 4px;
          font-size: 1em;
          flex-shrink: 0;
          transition: background-color 0.3s ease;
        }
        .cart-item-remove:hover {
          background: #666;
        }
        .cart-footer {
          padding: 14px 0 0;
          border-top: 1px solid #ccc;
          background: #f9f9f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }
        .cart-footer .total {
          font-weight: bold;
          font-size: 1.3em;
          color: #111;
        }
        .cart-footer button {
          background: #333;
          border: none;
          color: #fff;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.1em;
          margin-left: 16px;
          flex-shrink: 0;
          transition: background-color 0.3s ease;
        }
        .cart-footer button:hover:not(:disabled) {
          background: #555;
        }
        .cart-footer button:disabled {
          background: #aaa;
          cursor: not-allowed;
          color: #eee;
        }
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          transition: backdrop-filter 0.5s ease, opacity 0.5s ease;
        }
        .modal-overlay.show {
          opacity: 1;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .modal {
          background: #fff;
          padding: 28px 38px 28px 38px;
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 2px 16px rgba(0,0,0,0.18);
          position: relative;
          color: #111;
          font-size: 1.1em;
          font-family: Arial, sans-serif;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .modal h2 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 1.6em;
          color: #111;
        }
        .modal form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .modal input, .modal textarea {
          margin-bottom: 0;
          margin-top: 0;
          padding: 11px 12px;
          font-size: 1.1em;
          border: 1.5px solid #bbb;
          border-radius: 6px;
          resize: vertical;
          color: #111;
          background: #fff;
          transition: border-color 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .modal-input {
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 0;
          margin-top: 0;
          padding: 11px 12px;
          font-size: 1.1em;
          border: 1.5px solid #bbb;
          border-radius: 6px;
          color: #111;
          background: #fff;
          transition: border-color 0.3s ease;
        }
        .modal-input:focus {
          border-color: #444;
          outline: none;
        }
        .modal input::placeholder, .modal textarea::placeholder {
          color: #888;
          opacity: 1;
        }
        .modal input:focus, .modal textarea:focus {
          border-color: #444;
          outline: none;
        }
        .modal textarea {
          min-height: 70px;
        }
        .modal .error {
          color: #d00;
          font-size: 0.9em;
          margin-top: 2px;
          margin-bottom: 10px;
          margin-left: 2px;
        }
        .modal .buttons {
          display: flex;
          justify-content: flex-end;
          gap: 14px;
          margin-top: 18px;
        }
        .modal button {
          padding: 10px 18px;
          font-size: 1.1em;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          background: #333;
          color: #fff;
          transition: background-color 0.3s ease;
        }
        .modal button:hover:not(:disabled) {
          background: #555;
        }
        .modal .cancel-btn {
          background: #aaa;
          color: #222;
        }
        .modal .cancel-btn:hover {
          background: #888;
          color: #111;
        }
        .modal .submit-btn:disabled {
          background: #bbb;
          cursor: not-allowed;
          color: #666;
        }
        .form-status {
          margin-bottom: 14px;
          font-weight: bold;
          font-size: 1.05em;
          color: #111;
          text-align: center;
        }
        .form-status.error {
          color: #d00;
        }
        /* Spinner styles */
        .modal-loading-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 250px;
          min-width: 200px;
        }
        .modal-spinner {
          border: 5px solid #eee;
          border-top: 5px solid #333;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 0.9s linear infinite;
          margin-bottom: 24px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '450px',
          height: '100vh',
          zIndex: 1000,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isOpen ? '-2px 0 8px rgba(0,0,0,0.15)' : 'none',
          background: 'transparent',
        }}
        aria-hidden={!isOpen}
      >
        <div className="cart-container" aria-label="Shopping cart">
          <div className="cart-header" aria-live="polite" aria-atomic="true">
            <span>Cart ({cartCount} item{cartCount !== 1 ? 's' : ''})</span>
            <button
              onClick={toggleCart}
              aria-label="Close cart"
              className="close-cart-btn"
              type="button"
            >
              ×
            </button>
          </div>
          <div className="cart-list" role="list" tabIndex="0" aria-label="Cart items">
            {cart.length === 0 && <div style={{ paddingLeft: '16px' }}>Your cart is empty.</div>}
            {cart.map(item => (
              <div className="cart-item" key={item.id} role="listitem">
                <div className="cart-item-name" title={item.name}>{item.name}</div>
                <input
                  className="cart-item-qty"
                  type="number"
                  min="1"
                  aria-label={`Quantity for ${item.name}`}
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, e.target.value)}
                />
                <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                <button
                  className="cart-item-remove"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => removeItem(item.id)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="total" aria-live="polite" aria-atomic="true">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              disabled={cart.length === 0}
              type="button"
              aria-disabled={cart.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {(
        <div
          className={`modal-overlay${showCheckout ? ' show' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-title"
          style={{ pointerEvents: showCheckout ? undefined : 'none', visibility: showCheckout ? 'visible' : 'hidden' }}
        >
          <div className="modal">
            <h2 id="checkout-title">Shipping Information</h2>
            {/* Loading and error views based on submissionStage */}
            {submissionStage !== 'idle' ? (
              <div className="modal-loading-view">
                {submissionStage !== 'error' ? (
                  <>
                    <div className="modal-spinner" role="status" aria-label="Loading" />
                    <div style={{ fontSize: '1.12em', marginTop: '8px', color: '#222', textAlign: 'center' }}>
                      {submissionStage === 'processing' && 'Submitting your order...'}
                      {submissionStage === 'shipping' && 'Calculating shipping...'}
                      {submissionStage === 'checkout' && 'Preparing checkout...'}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ color: '#d00', fontWeight: 600, marginBottom: '14px', fontSize: '1.08em' }}>
                      Error submitting order. Please try again.
                    </div>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => {
                        setSubmissionStage('idle');
                        setFormStatus(null);
                        setFormErrors({});
                      }}
                    >
                      Back to Checkout
                    </button>
                  </>
                )}
              </div>
            ) : (
              <>
                {formStatus === 'success' && (
                  <div className="form-status" role="alert" tabIndex="-1">
                    Order submitted successfully!
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-status error" role="alert" tabIndex="-1">
                    Error submitting order. Please try again.
                  </div>
                )}
                <form onSubmit={handleCheckoutSubmit} noValidate>
                  {/* Name */}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Name"
                    aria-describedby={formErrors.name ? 'error-name' : undefined}
                  />
                  {formErrors.name && <div className="error" id="error-name">{formErrors.name}</div>}
                  {/* Email */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="modal-input"
                    aria-describedby={formErrors.email ? 'error-email' : undefined}
                  />
                  {formErrors.email && <div className="error" id="error-email">{formErrors.email}</div>}
                  {/* Country */}
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="modal-input"
                    aria-describedby={formErrors.country ? 'error-country' : undefined}
                  >
                    <option value="">Select Country</option>
                    <option value="Canada">Canada</option>
                    <option value="United States">United States</option>
                  </select>
                  {formErrors.country && <div className="error" id="error-country">{formErrors.country}</div>}
                  {/* State/Province */}
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="modal-input"
                    aria-describedby={formErrors.state ? 'error-state' : undefined}
                    disabled={!formData.country}
                  >
                    <option value="">
                      Select {formData.country === 'Canada'
                        ? 'Province'
                        : formData.country === 'United States'
                          ? 'State'
                          : 'Region'}
                    </option>
                    {provincesByCountry[formData.country]?.map((region) => (
                      <option key={region.code} value={region.code}>{region.name}</option>
                    ))}
                  </select>
                  {formErrors.state && <div className="error" id="error-state">{formErrors.state}</div>}
                  {/* Address Line 1 */}
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    value={formData.address1}
                    onChange={handleInputChange}
                    required
                    placeholder="Address Line 1"
                    aria-describedby={formErrors.address1 ? 'error-address1' : undefined}
                  />
                  {formErrors.address1 && <div className="error" id="error-address1">{formErrors.address1}</div>}
                  {/* Address Line 2 */}
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    value={formData.address2}
                    onChange={handleInputChange}
                    placeholder="Address Line 2 (optional)"
                  />
                  {/* City */}
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="City"
                    aria-describedby={formErrors.city ? 'error-city' : undefined}
                  />
                  {formErrors.city && <div className="error" id="error-city">{formErrors.city}</div>}
                  {/* Postal/ZIP Code */}
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                    placeholder="Postal/ZIP Code"
                    aria-describedby={formErrors.zip ? 'error-zip' : undefined}
                  />
                  {formErrors.zip && <div className="error" id="error-zip">{formErrors.zip}</div>}
                  <div className="buttons">
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => {
                        setShowCheckout(false);
                        setFormStatus(null);
                        setFormErrors({});
                        setSubmissionStage('idle');
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={formStatus === 'success'}
                    >
                      Submit Order
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
