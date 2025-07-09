// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Container, Row, Col } from 'react-bootstrap'; // For Bootstrap grid layout
import './Footer.css'; // Create a new CSS file for footer-specific styles
// import logoImage from './path/to/your/logo.png'; // If you want to use the logo in the footer too

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer py-5">
      <Container>
        <Row>
          {/* About Jayaris Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">About Jayaris</h5>
            <p className="footer-text">
              Jayaris is a modern IT solutions startup that delivers trusted, resourceful, and
              high-quality IT services to global clients. From web and app development to SEO,
              cybersecurity, blockchain, content creation, and digital marketing, we
              provide everything a business needs to grow in the digital space. Our mission is
              to become the most reliable and future-ready tech partner for companies
              worldwide, powered by innovation, transparency, and excellence.
            </p>
          </Col>

          {/* Quick links Section */}
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Quick links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" state={{ fromFooter: true }}>Home</Link></li>
              <li><Link to="/about" state={{ fromFooter: true }}>About us</Link></li>
              <li><Link to="/services" state={{ fromFooter: true }}>Services</Link></li>
              <li><Link to="/career" state={{ fromFooter: true }}>Career</Link></li>
              <li><Link to="/testimonials" state={{ fromFooter: true }}>Testimonials</Link></li>
              <li><Link to="/contact" state={{ fromFooter: true }}>Contact us</Link></li>
              <li><Link to="/blog" state={{ fromFooter: true }}>Blog</Link></li>
            </ul>
          </Col>

          {/* Contact Info Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="list-unstyled footer-contact-info">
              <li>Email: <a href="mailto:support@jayaris.com">support@jayaris.com</a></li>
              <li>Location: India</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </Col>

          {/* Legal & Policies Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Legal & Policies</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/terms" state={{ fromFooter: true }}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" state={{ fromFooter: true }}>Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" state={{ fromFooter: true }}>Cookie Policy</Link></li>
              <li><Link to="/sitemap" state={{ fromFooter: true }}>Sitemap</Link></li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider mt-4 mb-3" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              Copyright &copy; {currentYear} JAYARIS All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;