import React from 'react';
import { Link } from 'react-router-dom';
import txtLogo from './assets/txtLogo1.png'; // import your logo image
import cardsImg from './assets/5cards.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={txtLogo} alt="Ember & Oak Logo" className="footer-logo" style={{ filter: "invert(1)" }}/>
          <p>We craft candles around emotion, each scent guiding you to a personal sanctuary of bliss.</p>
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collection">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-right">
          <div className="subscribe-container">
            <h3>Subscribe</h3>
            <form
              action="https://eandoak.us3.list-manage.com/subscribe/post?u=0a965ac48983e8ae55ae3ab49&amp;id=29e2e20e94&amp;f_id=000aa6e0f0"
              method="post"
              target="_blank"
              noValidate
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                required
                className="footer-email-input"
              />
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_1234567890abcdef123456789_abcdef1234"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Secure payments by Square &nbsp; | &nbsp; © {new Date().getFullYear()} Evan Mottley and Ember & Oak. All rights reserved.</p>
        <div className="payment-icons">
          <img src={cardsImg} alt="Accepted Payment Methods" className="icon" />
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%);
          color: #fff;
          /* Edit horizontal padding here: */
          padding: 89px 10%;
          text-align: center;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 -1px 20px rgba(255,255,255,0.05);
        }
        .footer-logo {
            filter: invert(1);
        }
        .footer-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 62px;
          max-width: 1440px;
          margin: 0 auto;
          text-align: left;
        }
        .footer-left {
          flex: 1;
        }
        .footer-center {
          flex: 1;
          text-align: center;
        }
        .footer-right {
          flex: 1;
          text-align: right;
        }
        .footer-left img {
          display: block;
          width: 300px;
          margin-bottom: 0px;
          margin-left: -35px;
          margin-top: -50px;
        }
        .footer-left p {
          color: #aaa;
          margin-top: -40px;
          font-size: 1.05rem;
          line-height: 1.618;
          max-width: 250px;
        }
        .footer-left h3, .footer-center h3, .footer-right h3 {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 12px;
        }
        .footer-center ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-center ul li {
          margin-bottom: 10px;
        }
        .footer-center ul li a {
          color: #aaa;
          text-decoration: none;
          font-size: 1.05rem;
          letter-spacing: 0.3px;
        }
        .footer-center ul li a:hover {
          text-decoration: underline;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          position: relative;
        }
        .footer-right .subscribe-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-left: auto;
        }
        .footer-right .subscribe-container h3 {
          margin-bottom: 8px;
          text-align: center;
          width: 260px;
        }
        .footer-right .subscribe-container form {
          align-items: center;
        }
        .footer-right .subscribe-container form button {
          width: 260px;
        }
        .footer-email-input {
          padding: 12px 14px;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          width: 260px;
        }
        button {
          background-color: #fff;
          color: #111;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
          font-weight: 500;
        }
        button:hover {
          background-color: #ddd;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255,255,255,0.1);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 55px;
          font-size: 0.9rem;
          color: #777;
        }
        .footer-bottom .payment-icons {
          display: flex;
          gap: 12px;r
        }
        .footer-bottom .payment-icons .icon {
          width: 200px;
          height: auto;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .footer-bottom .payment-icons .icon:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 700px) {
          .footer {
            padding: 55px 20px;
          }
          .footer-container {
            gap: 38px;
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .footer-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-left img {
            width: 200px;
            margin-left: 0;
            margin-top: 0;
            margin-bottom: 0;
          }
          .footer-left p {
            margin-top: 18px;
            max-width: 100%;
            text-align: center;
          }
          .footer-center,
          .footer-right {
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
          }
          form {
            justify-content: center;
            align-items: center;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .footer-right .subscribe-container h3 {
            text-align: center;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
