// src/components/Testimonial.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './testimonial.css'; // Create this new CSS file for testimonial specific styles
import { Link } from 'react-router-dom';
import  { useRef, useLayoutEffect, useCallback, useMemo } from "react"; // Import useEffect
import logoImage from './image/logo.png';
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import client1 from './image/client1.jpeg';
import client2 from './image/client2.jpeg';
import client3 from './image/client3.jpeg';
import Footer from './components/Footer'; 
// Data for the testimonials
const feedbackList = [
  {
    name: "Aarav Patel",
    role: "Product Manager at TechNova",
    image: client2, // ✅ Use the imported variable directly (NOT require())
    feedback: "Jayaris helped us scale our MVP in record time. The team was proactive, extremely responsive, and their code quality was exceptional. What impressed me most was their deep understanding of design systems and their ability to adapt to our ever-evolving requirements with zero friction."
  },
  {
    name: "Sanya Mehra",
    role: "Founder of DesignSpire",
    image: client1, // ✅ Use the imported variable directly (NOT require())
    feedback: "We needed a UI/UX partner who could think beyond the basics, and Jayaris delivered. They redefined how we looked at user flows and brought a modern, intuitive touch to our app experience. The attention to micro-interactions and consistency was outstanding."
  },
  {
    name: "Rohan Desai",
    role: "CTO at DevPeak",
    image: client3, // ✅ Use the imported variable directly (NOT require())
    feedback: "Working with Jayaris was like expanding our core tech team without the overhead. They delivered scalable architecture, handled tight deadlines with ease, and brought valuable suggestions during every sprint. Highly dependable and efficient."
  }
];

const Testimonial = () => {
  const [showTestimonialCards, setShowTestimonialCards] = useState(false);

  // Intersection Observer to show cards when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTestimonialCards(true);
        }
      },
      { threshold: 0.4 } // Adjust to trigger later or earlier
    );

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <>
     <motion.div
      initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      style={{ position: 'fixed', width: '100%', zIndex: 9999 }}
    >
      <Navbar expand="lg" fixed="top" className="glass-navbar px-4">
        <Container fluid className="d-flex justify-content-between align-items-center">

          {/* Left: Jayaris Brand - UPDATED */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center"> {/* Added as={Link} to="/" and d-flex for alignment */}
            <img
              src={logoImage} // Use the imported image
              width="30" // Initial width, will adjust with CSS
              height="30" // Initial height, will adjust with CSS
              className="d-inline-block align-top me-2" // Bootstrap classes for inline-block, vertical alignment, and right margin
              alt="Jayaris Logo"
            />
            <span className="fw-bold text-white">Jayaris</span> {/* Keep the text next to it */}
          </Navbar.Brand>

          {/* Toggler for mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Collapsible content */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Center: Nav Links */}
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Career</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>

            {/* Right: Signup + Language - these will also collapse */}
            <div className="d-flex align-items-center gap-3 ms-lg-auto">
             <Link to="/auth" style={{ textDecoration: "none" }}>
               <Button variant="outline-light" size="sm" className="signup-btn">
                 Login
               </Button>
             </Link>
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-light" size="sm" className="language-toggle d-flex align-items-center">
                  <span className="me-1">🌐</span> En
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>हिन्दी</Dropdown.Item>
                    <Dropdown.Item>Français</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </motion.div>

    <motion.section className="testimonial-glass-section" id="testimonials">
      {/* Central Glass Message Box */}
      <motion.div
        className="glass-message-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Typewriter
          words={["we hear clients are saying something about us..."]}
          loop={1}
          cursor
          typeSpeed={50}
          deleteSpeed={30}
        />
      </motion.div>

      {/* Cards fade in one by one */}
      <div className="client-feedback-grid">
        {showTestimonialCards && feedbackList.map((feedback, index) => (
          <motion.div
            key={index}
            className="client-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
          >
            <img src={feedback.image} className="client-avatar" alt="client" />
            <h5>{feedback.name}</h5>
            <small>{feedback.role}</small>
            <div className="stars">
              {Array(5).fill("★").map((s, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="feedback-text">{feedback.feedback}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <Footer />
    </>
  );
};

export default Testimonial;