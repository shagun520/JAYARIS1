import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { Container, Nav, Navbar, Button, Dropdown, Row, Col } from "react-bootstrap";
import bgVideo from './image/earthbg.mp4';
import { Typewriter } from 'react-simple-typewriter';
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
/*SPECIALIZATION LOTTIE*/
import supportIcon from "./image/star.json";
import resultsIcon from "./image/star.json";
import speedIcon from "./image/star.json";
import securityIcon from "./image/star.json";
import teamIcon from "./image/star.json";
import globalIcon from "./image/star.json";
import {
  FaFacebook,

  FaLinkedin,

  FaTwitter
} from "react-icons/fa";
import "./App1.css";

import client1 from './image/client1.jpeg';
import client2 from './image/client2.jpeg';
import client3 from './image/client3.jpeg';

import lottie1 from './image/lb1.json';
import lottie3 from './image/lightbulb.json';
import globeAnim from './image/orbit.json';
import lottie2 from './image/rocket.json';
import lottie4 from './image/why.json';
import starAnim from './image/star.json';
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


const AnimatedHeading = ({ text }) => {
  const words = text.split(" ");

  return (
    <motion.h2
      className="text-center mb-5"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      viewport={{ once: true, amount: 0.7 }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
          }}
          transition={{ duration: 0.3 }}
          style={{ display: "inline-block", marginRight: "0.4ch" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};
const AnimatedHeadingLine = ({ text }) => {
  const elements = [];

  if (typeof text === "string") {
    text.split(" ").forEach((word, idx) => {
      elements.push({ content: word, bold: false, key: idx });
    });
  } else {
    let key = 0;
    React.Children.forEach(text, (child) => {
      if (typeof child === "string") {
        child.split(" ").forEach((word) =>
          elements.push({ content: word, bold: false, key: key++ })
        );
      } else if (child.type === "strong") {
        const words = child.props.children.split(" ");
        words.forEach((word) =>
          elements.push({ content: word, bold: true, key: key++ })
        );
      }
    });
  }

  return (
    <motion.h2
      className="text-white text-center fw-bold position-relative mb-5"
      style={{
        fontSize: "2.8rem",
        color: "#fff",
        textShadow: "0 0 5px rgba(255,255,255,0.2)"
      }}
      initial="hidden"
      whileInView="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {elements.map(({ content, bold, key }) => (
        <motion.span
          key={key}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
          }}
          transition={{ duration: 0.3 }}
          style={{
            display: "inline-block",
            marginRight: "0.4ch",
            fontWeight: bold ? "bold" : "normal"
          }}
        >
          {content}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const AnimatedLine = ({ text }) => {
  const elements = [];

  const processNode = (node, isBold = false) => {
    if (typeof node === "string") {
      node.split(" ").forEach((word, idx) => {
        elements.push({ content: word, bold: isBold, key: elements.length });
      });
    } else if (React.isValidElement(node)) {
      const isStrong = node.type === "strong";
      React.Children.forEach(node.props.children, child =>
        processNode(child, isBold || isStrong)
      );
    }
  };

  processNode(text);

 return (
  <motion.h2
    className="text-dark text-center position-relative mb-5"
    style={{ fontSize: "1.399rem", fontWeight: 500, lineHeight: 1.4 }}
    initial="hidden"
    whileInView="visible"
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    viewport={{ once: true, amount: 0.5 }}
  >
    {elements.map(({ content, bold, key }) => (
      <motion.span
        key={key}
        variants={{
          hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" }
        }}
        transition={{ duration: 0.3 }}
        style={{
          display: "inline-block",
          marginRight: "0.4ch",
          fontWeight: bold ? 600 : 400
        }}
      >
        {content}
      </motion.span>
    ))}
  </motion.h2>
);

};


 
const ServicePoint = ({ title, description, position,expand = "right"  }) => {
  const [hovered, setHovered] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!hovered) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(description.slice(0, i + 1));
      i++;
      if (i >= description.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [hovered, description]);

  return (
    <motion.div
      className="service-point position-absolute d-flex align-items-start"
      style={{ ...position }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div style={{ width: 32, marginRight: 10 }}>
        <Lottie
  animationData={starAnim}
  loop
  style={{ width: "90px", height: "90px", marginLeft: "-10px", marginTop:"-30px"}} // increase size here
/>
      </div>
      <div>
        <h5 className="text-white fw-bold mb-1">{title}</h5>
        {hovered && (
          <motion.p
  className={`service-description mt-1 px-3 py-2 ${expand === "left" ? "expand-left" : ""}`}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {typedText}
</motion.p>

        )}
      </div>
    </motion.div>
  );
};

export default function HomePage() {

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
    icon: supportIcon,
  },
  {
    title: "Built for Real Results",
    desc: "Responsive and modern websites using the latest tech. Optimized for speed, SEO, and cross-browser compatibility.",
    icon: resultsIcon,
  },
  {
    title: "Fast Flexible & Future Ready",
    desc: "We work smart and fast. Whether you’re a startup or an enterprise, our flexible methods help us shape your ideas into powerful digital products that grow with you.",
    icon: speedIcon,
  },
  {
    title: "Safe & Secure, From Start to Finish",
    desc: "Your data, your business—always protected. We follow strict security practices so you can work with peace of mind.",
    icon: securityIcon,
  },
  {
    title: "A team of experts",
    desc: "Our people are our power. Every member of our team—from developers to designers—is handpicked for their talent, creativity, and commitment to delivering the best.",
    icon: teamIcon,
  },
  {
    title: "Global Quality, World's Brilliance",
    desc: "We bring together the precision of international standards with the passion and skill of the world’s brightest minds to deliver top-quality digital solutions.",
    icon: globalIcon,
  },
];

  return (
    <>
    <motion.div
  initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }} // optional delay
  style={{ position: 'fixed', width: '100%', zIndex: 9999 }} // make sure it's fixed & visible
>
<Navbar expand="lg" fixed="top" className="glass-navbar px-4">
  
    <Container fluid className="d-flex justify-content-between align-items-center">
      
      {/* Left: Jayaris Brand */}
      <Navbar.Brand className="fw-bold text-white">Jayaris</Navbar.Brand>

      {/* Center: Nav Links */}
      <Nav className="mx-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#blogs">Testimonials</Nav.Link>
        <Nav.Link href="#contact">Career</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>

      {/* Right: Signup + Language */}
      <div className="d-flex align-items-center gap-3">
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
    className="main-special-heading text-center mb-5"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <AnimatedHeadingLine text="what sets us apart?" />
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
        <Lottie animationData={card.icon} loop={true} className="icon-lottie mb-3" />
        <h5 className="fw-bold mb-2">{card.title}</h5>
        <p>{card.desc}</p>
      </motion.div>
    </Tilt>
  ))}
</motion.div>

</section>

<div className="why-jayaris-wrapper position-relative">
  {/* Center BG Lottie */}
  <motion.div
    className="orbit-bg-lottie"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 0.07, scale: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
  >
    <Lottie animationData={globeAnim} loop />
  </motion.div>

  {/* Flying Lotties */}
  {[
    { className: "lottie1", anim: lottie1, x: [0, 30, -20, 0], y: [0, -20, 10, 0], dur: 12 },
    { className: "lottie2", anim: lottie2, x: [0, -40, 20, 0], y: [0, 30, -10, 0], dur: 13 },
    { className: "lottie3", anim: lottie3, x: [0, 25, -25, 0], y: [0, -25, 10, 0], dur: 14 },
    { className: "lottie4", anim: lottie4, x: [0, -30, 30, 0], y: [0, 20, -20, 0], dur: 15 }
  ].map((item, idx) => (
    <motion.div
      key={idx}
      className={`floating-lottie ${item.className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 + idx * 0.15, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{ x: item.x, y: item.y }}
    >
      <Lottie animationData={item.anim} loop />
    </motion.div>
  ))}

  {/* Main Text Section */}
  <section
    id="why-jayaris-slide"
    className="why-jayaris-slide-section d-flex align-items-center justify-content-center text-center"
  >
    <motion.div
      className="why-jayaris-content px-4"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 1
          }
        }
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2
        className="mb-4"
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" }
        }}
        transition={{ duration: 0.4 }}
      >
        and you wonder why <span className="fw-bold">Jayaris?</span>
      </motion.h2>

      <AnimatedLine
  text={
    <>
      because it offers more than just development — we back every build with <strong>post-delivery support</strong>,
      ensuring your product stays stable, updated, and ready for what's next. with <strong>global delivery</strong>, we bring
      your solution to life no matter where you are, offering <strong>seamless collaboration</strong> across time zones.
      our <strong>agile execution</strong> keeps you in control, with transparent sprints, fast iterations, and room for evolving needs.
      and with access to <strong>top talent</strong>, you're not just hiring developers — you're partnering with innovators who care about impact.
      in short, we don’t just build — we stay, scale, and evolve with you.
    </>
  }
/>

    </motion.div>
  </section>
</div>

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

      <footer className="footer text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#home">Home</a></li>
                <li className="list-inline-item"><a href="#about">About</a></li>
                <li className="list-inline-item"><a href="#services">Services</a></li>
                <li className="list-inline-item"><a href="#blogs">Blogs</a></li>
                <li className="list-inline-item"><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            <Col md={6} className="text-end">
              <FaFacebook className="me-3" />
              <FaTwitter className="me-3" />
              <FaLinkedin />
              <div className="mt-2">&copy; {new Date().getFullYear()} Jayaris. All rights reserved.</div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
