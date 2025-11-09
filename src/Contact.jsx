import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';

const faqItems = [
  {
    question: "Do you offer shipping outside of canada?",
    answer: "Currently, we ship within Canada and the US. For international requests, please contact us directly and we’ll do our best to accommodate you."
  },
  {
    question: "What is your return or exchange policy?",
    answer: "If you’re not completely satisfied, please contact us within 14 days of receiving your order. We’ll work with you to arrange a return, exchange, or refund as needed."
  },
  {
    question: "Can I request a custom scent or order?",
    answer: "Absolutely! We love collaborating on custom scents and special orders for events or gifts. Reach out via the email below with your ideas."
  }
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 768px) {
        section {
          padding: 80px 20px 60px !important;
        }
        h2 {
          font-size: 2rem !important;
        }
        h3 {
          font-size: 1.5rem !important;
        }
        p, li button, li p {
          font-size: 1rem !important;
        }
        li button {
          width: 100% !important;
        }
        section > p {
          width: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>Contact Us</h2>
      <p style={textStyle}>
        If you have any questions or would like to get in touch, please feel free to reach out. <br></br>We are here to help and look forward to hearing from you.
      </p>

      <section style={sectionStyle}>
        <h3 style={subTitleStyle}>Frequently Asked Questions</h3>
        <ul style={faqListStyle}>
          {faqItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '1.1rem',
                  color: '#444',
                  textAlign: 'left',
                  width: '100%',
                  cursor: 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '10px',
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
                <span><strong>Q:</strong> {item.question}</span>
              </button>
              {openIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  style={{ marginTop: '8px', color: '#555', fontWeight: '400' }}
                >
                  <strong>A:</strong> {item.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3 style={subTitleStyle}>Contact Information</h3>
        <p style={{ ...textStyle, display: 'block', width: '100%' }}><strong>Phone:</strong> (236) 994-4856</p>
        <p style={{ ...textStyle, display: 'block', width: '100%' }}><strong>Email:</strong> info@eandoak.ca</p>
      </section>
    </section>
  );
};

const containerStyle = {
  padding: '130px 300px 80px',
  boxSizing: 'border-box',
  fontFamily: "'Roboto', sans-serif",
  width: '100vw',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '30px',
  color: '#111',
};

const subTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '15px',
  color: '#222',
};

const textStyle = {
  fontSize: '1.2rem',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '25px',
};

const sectionStyle = {
  marginTop: '40px',
};

const faqListStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
  fontSize: '1.1rem',
  color: '#444',
  lineHeight: '1.5',
  marginBottom: '20px',
};

export default Contact;
