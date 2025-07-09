import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { Container, Nav, Navbar, Button, Dropdown, Row, Col } from "react-bootstrap";
import bgVideo from './image/earthbg.mp4';
import { Typewriter } from 'react-simple-typewriter';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Routes, Route } from 'react-router-dom';
import Services from './Services';
import AboutUs from './aboutus';
import { Link } from 'react-router-dom';
import logoImage from './image/logo.png';

import {
  FaFacebook,

  FaLinkedin,

  FaTwitter
} from "react-icons/fa";
import "./App1.css";

import client1 from './image/client1.jpeg';
import client2 from './image/client2.jpeg';
import client3 from './image/client3.jpeg';
import Footer from './components/Footer'; 
import './components/Footer.css';
const points = ["Global Delivery", "Top Talent", "Agile Execution", "Post-Delivery Support"];

const feedbackList = [
  {
    name: "Aarav Patel",
    role: "Product Manager at TechNova",
    image: client2, 
    feedback: "Jayaris helped us scale our MVP in record time. The team was proactive, extremely responsive, and their code quality was exceptional. What impressed me most was their deep understanding of design systems and their ability to adapt to our ever-evolving requirements with zero friction."
  },
  {
    name: "Sanya Mehra",
    role: "Founder of DesignSpire",
    image: client1,
    feedback: "We needed a UI/UX partner who could think beyond the basics, and Jayaris delivered. They redefined how we looked at user flows and brought a modern, intuitive touch to our app experience. The attention to micro-interactions and consistency was outstanding."
  },
  {
    name: "Rohan Desai",
    role: "CTO at DevPeak",
    image: client3,
   feedback: "Working with Jayaris was like expanding our core tech team without the overhead. They delivered scalable architecture, handled tight deadlines with ease, and brought valuable suggestions during every sprint. Highly dependable and efficient."
  }
];
 
function HomePage() {

  const [showNavbar, setShowNavbar] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowNavbar(true), 1000); // 1 sec delay
  return () => clearTimeout(timer);
}, []);


    useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamic typing for Why Jayaris
useEffect(() => {
  const fullText = points[currentPointIndex];
  let i = 0;
  let displayText = "";

  const interval = setInterval(() => {
    displayText += fullText[i];
    setTypedText(displayText);
    i++;
    if (i >= fullText.length) clearInterval(interval);
  }, 80);

  const timeout = setTimeout(() => {
    setCurrentPointIndex((prev) => (prev + 1) % points.length);
  }, fullText.length * 80 + 1000);

  return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };
}, [currentPointIndex]);

const [showTestimonialCards, setShowTestimonialCards] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowTestimonialCards(true);
      }
    },
    { threshold: 0.4 } // adjust to trigger later or earlier
  );

  const section = document.getElementById("testimonials");
  if (section) observer.observe(section);

  return () => section && observer.unobserve(section);
}, []);

const serviceData = [
  {
    title: "We're with you Always",
    desc: "Our work doesn’t end at delivery. We offer ongoing support, updates, and enhancements through flexible post-launch service plans tailored to your evolving needs.",
     icon: require('./image/help.png')
  },
  {
    title: "Built for Real Results",
    desc: "Responsive and modern websites using the latest tech. Optimized for speed, SEO, and cross-browser compatibility.",
     icon: require('./image/results.png')
  },
  {
    title: "Fast Flexible & Future Ready",
    desc: "We work smart and fast. Whether you’re a startup or an enterprise, our flexible methods help us shape your ideas into powerful digital products that grow with you.",
     icon: require('./image/stopwatch.png')
  },
  {
    title: "Safe & Secure, From Start to Finish",
    desc: "Your data, your business—always protected. We follow strict security practices so you can work with peace of mind.",
     icon: require('./image/cyber-security.png')
  },
  {
    title: "A team of experts",
    desc: "Our people are our power. Every member of our team—from developers to designers—is handpicked for their talent, creativity, and commitment to delivering the best.",
     icon: require('./image/leadership.png')
  },
  {
    title: "Global Quality, World's Brilliance",
    desc: "We bring together the precision of international standards with the passion and skill of the world’s brightest minds to deliver top-quality digital solutions.",
     icon: require('./image/award.png')
  },
];

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
              <Nav.Link href="#blogs">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Career</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>

            {/* Right: Signup + Language - these will also collapse */}
            <div className="d-flex align-items-center gap-3 ms-lg-auto">
              <Button variant="outline-light" size="sm" className="signup-btn">
                Signup/Signin
              </Button>
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
      <section className="hero d-flex align-items-center position-relative" id="home">
  {/* background video */}
 <video
  autoPlay
  muted
  loop
  playsInline
  className="hero-bg-video"
>
  <source src={bgVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

  {/* content */}
  <Container>
    <Row className="text-center justify-content-center">
      <Col md={10} data-aos="fade-up">
        <h1 className="hero-title fade-in">
          Universal-Standard Web & App Development Engineered by World’s Brightest Minds
        </h1>
        
      </Col>
    </Row>
  </Container>
</section>

 {/* --- SPECIALIZATION SECTION SLIDES UP --- */}
<section id="services" className="specialization-section-wrapper">
  <motion.div
    className="main-special-heading mb-5"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="specialization-heading">
      <span className="animated-text">What sets Us apart?</span>
    </h2>
  </motion.div>

  <motion.div
    className="glass-grid-container"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    {serviceData.map((card, index) => (
      <Tilt
        key={index}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={false}
        className="tilt-wrapper"
      >
        <motion.div
          className="glass-card text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
        >
          {/* PNG Icon */}
          <img src={card.icon} alt="icon" className="icon-png mb-3" />
          <h5 className="fw-bold mb-2">{card.title}</h5>
          <p>{card.desc}</p>
        </motion.div>
      </Tilt>
    ))}
  </motion.div>
</section>

{/* Service Section */}
<section className="expert-services">
  <div className="expert-container">
    {/* Heading Section */}
    <motion.div
      className="expert-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="expert-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.6 }}
      >
        Expert services we offer
      </motion.h2>

      <motion.p
        className="expert-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        We simplify your digital presence with secure, scalable solutions tailored to your needs.
      </motion.p>
    </motion.div>

    {/* Service Grid */}
    <motion.div
      className="expert-grid"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      {[
  { name: 'Web Development', img: 'swebd.png' },
  { name: 'App Development', img: 'sappd.png' },
  { name: 'UI/UX Design', img: 'suiux.png' },
  { name: 'Cybersecurity Solutions', img: 'scyber.png' },
  { name: 'SEO & Digital Marketing', img: 'sseo.png' },
  { name: 'AI & Automation', img: 'sai.png' },
  { name: 'CMS Integration', img: 'scms.png' },
  { name: 'Blockchain Development', img: 'sblock.png' },
  { name: 'Content Creation', img: 'scontent.png' },
  { name: 'Business Dashboards', img: 'sdashboard.png' }
].map((service, index) => (
  <Tilt
    key={index}
    glareEnable={true}
    glareMaxOpacity={0.2}
    scale={1.03}
    transitionSpeed={250}
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    className="tilt-wrapper"
  >
    <div className="expert-card">
      <img
        src={require(`./image/${service.img}`)}
        alt={service.name}
        className="service-icon-img"
      />
      <span className="service-label">{service.name}</span>
    </div>
  </Tilt>
))}

    </motion.div>
  </div>
</section>



{/* Testimonial Section */}
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
    {feedbackList.map((feedback, index) => (
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


      <section className="call-to-action text-white py-5">
        <Container className="text-center">
          <h2>Schedule a Free Consultation</h2>
          <Button variant="light" size="lg" href="#contact" data-aos="zoom-in">Contact Us</Button>
        </Container>
      </section>

      <Footer />
    </>
  );
}
export default function App1() {
  return (
    <Routes>
      <Route path="/JAYARIS1" element={<HomePage />} /> 
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
       {/* Add more routes for your footer links that go to separate pages */}
          <Route path="/career" element={<p>Career Page Placeholder</p>} />
          <Route path="/testimonials" element={<p>Testimonials Page Placeholder</p>} />
          <Route path="/contact" element={<p>Contact Us Page Placeholder</p>} />
          <Route path="/blog" element={<p>Blog Page Placeholder</p>} />
          <Route path="/terms" element={<p>Terms & Conditions Page Placeholder</p>} />
          <Route path="/privacy" element={<p>Privacy Policy Page Placeholder</p>} />
          <Route path="/cookie-policy" element={<p>Cookie Policy Page Placeholder</p>} />
          <Route path="/sitemap" element={<p>Sitemap Page Placeholder</p>} />
    </Routes>
    
  );
}