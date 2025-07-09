import React from "react";
import "./aboutus.css"; // if you’re using a CSS file
import { motion } from "framer-motion";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import logoImage from './image/logo.png';
import Footer from './components/Footer'; 
import './components/Footer.css';
import { useLocation } from 'react-router-dom';
const AboutUs = () => {
  const location = useLocation();

   useEffect(() => {
    // Check if navigation came from a footer link (via location.state)
    // AND if there's no hash (using the location object from useLocation())
    if (location.state?.fromFooter && !location.hash) { // <-- CORRECTED LINE
      window.scrollTo(0, 0);
    }
  }, [location]);
   const [showCode, setShowCode] = useState(false);
  const [showDeploy, setShowDeploy] = useState(false);
  const [showPara, setShowPara] = useState(false);

  // ✅ Add this here 👇
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const codeTimer = setTimeout(() => setShowCode(true), 1500);
    const deployTimer = setTimeout(() => setShowDeploy(true), 3000);
    const paraTimer = setTimeout(() => setShowPara(true), 4500);
      // ✅ Add this for the card animation
    const cardTimer = setTimeout(() => setShowCard(true), 1200);
    return () => {
      clearTimeout(codeTimer);
      clearTimeout(deployTimer);
      clearTimeout(paraTimer);
      clearTimeout(cardTimer); // ✅ also clear this
    };
  }, []);
  return (
      //nav bar
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


  {/* first viewport */}
 {/* first viewport */}
 
  <div className="aboutus-section">
  <div className="right-section">
    {/* Logo (always visible) */}
    <motion.img
      src={logoImage}
      alt="Jayaris Logo"
      className="jayaris-logo-about"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      layout
    />

    {/* Tagline container with space preserved */}
    <div className="tagline-placeholder">
      <motion.p
        className="jayaris-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        layout
      >
        Jayaris is where bold ideas meet seamless execution.
      </motion.p>
    </div>

    {/* Glass card wrapper with reserved height */}
    <div className="glass-card-placeholder">
      {showCard && (
        <motion.div
          className="glass-card1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          layout
        >
          <h3>Empowering the Digital Future — One Solution at a Time</h3>
          <p>
            Jayaris is where bold ideas meet seamless execution. We are a new-age IT solutions company helping businesses grow, scale, and innovate with cutting-edge digital services.
            <br />
            From startups to enterprises, we help brands transform with technology — building high-performing digital products that solve real-world problems.
          </p>
        </motion.div>
      )}
    </div>
  </div>
</div>


{/* mission */}
<motion.div
  className="mission-wrapper"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
>
  <section className="mission-section" id="mission">
    <motion.h2
      className="mission-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.4 }}
    >
      {"Our Mission".split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          className="word-span"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + idx * 0.4 }} // Staggered animation
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h2>

    <motion.p
      className="mission-para"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 1.8 }}
      viewport={{ once: true }}
    >
      At Jayaris, our mission is to bridge global gaps through technology by delivering
      future-ready digital solutions that blend creativity, functionality, and impact. We aim
      to elevate brands, streamline operations, and unlock growth for clients across borders
      by leveraging India’s top tech talent and global best practices. To bridge borders
      through technology by delivering reliable, scalable, and innovative IT solutions to
      clients worldwide.
    </motion.p>
  </section>
</motion.div>


{/* Vision Section */}
<motion.section
  className="info-section"
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }} // triggers when ~40% in view
>
  <motion.h2
    className="info-heading"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    viewport={{ once: true }}
  >
    {"Our Vision".split(" ").map((word, idx) => (
      <motion.span
        key={idx}
        className="word-span"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 + idx * 0.3 }}
      >
        {word}&nbsp;
      </motion.span>
    ))}
  </motion.h2>

  <motion.p
    className="info-paragraph"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 2 }}
    viewport={{ once: true }}
  >
    At Jayaris, we envision becoming the most trusted global partner in
    digital transformation — a name synonymous with innovation,
    reliability, and client success. Our goal is to empower businesses
    and institutions around the world by delivering cutting-edge IT
    solutions that are not only scalable and efficient but also
    tailored to real-world challenges.
    <br /><br />
    As we strive to lead the way in tech excellence, we remain deeply
    committed to helping our clients achieve long-term growth and
    competitive advantage through the intelligent use of technology.
    In this pursuit, trust is our foundation, excellence is our
    benchmark, and innovation is the path we follow.
  </motion.p>
</motion.section>

{/* Values Section */}
<section className="values-wrapper" id="values">
  <motion.div
    className="values-container glass-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
     whileHover={{ rotateX: 5, rotateY: -5 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="values-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      viewport={{ once: true }}
    >
      OUR VALUES
    </motion.h2>

    <div className="values-list">
  {["Innovation", "Excellence", "Agility", "Transparency", "Global Thinking"].map(
    (value, index) => (
      <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={1500}>
        <motion.div
          key={index}
          className="value-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.3 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
      </Tilt>
    )
  )}
</div>
  </motion.div>
</section>

<Footer />
</>
  );
};

export default AboutUs;
