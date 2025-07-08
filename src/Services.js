import Tilt from "react-parallax-tilt";
import "./Services.css";
import { motion } from "framer-motion";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState, useRef, useLayoutEffect, useCallback, useMemo, useEffect } from "react"; // Import useEffect

const servicesData = [
  { title: "Web Development", description: "We build fast, secure, and beautifully designed websites that make you stand out online." },
  { title: "App Development", description: "From Android to iOS, we create mobile apps that are smooth, powerful, and user-friendly." },
  { title: "UI/UX Design", description: "We design interfaces that look stunning and feel effortless to use." },
  { title: "Cybersecurity Solutions", description: "Your business stays protected with our advanced security setups and monitoring systems." },
  { title: "SEO & Digital Marketing", description: "We help you rank higher, reach wider, and grow faster with smart marketing strategies." },
  { title: "AI & Automation", description: "We create intelligent systems that automate tasks and make your business smarter." },
  { title: "CMS Integration", description: "Easily manage your website with tools like WordPress, Strapi, or custom CMS dashboards." },
  { title: "Blockchain Development", description: "We develop secure blockchain apps and smart contracts for the future of digital trust." },
  { title: "Content Creation", description: "From blogs to brand copy — we write content that connects and converts." },
  { title: "Business Dashboards", description: "Visual tools that help you track, measure, and manage your company’s performance in real time." },
];

const Services = () => {
  const [virtualIndex, setVirtualIndex] = useState(1);
  const carouselTrackRef = useRef(null);
  const carouselViewportRef = useRef(null); // Ref for the viewport to attach wheel listener
  const isAnimatingRef = useRef(false);

  const ARC_RADIUS = 350;
  const MAX_ROTATION_DEGREES = 25;
  const MIN_CENTER_SCALE = 1.0;
  const MAX_SIDE_SCALE = 1.4;
  const VISIBLE_SLOTS = 7;
  const HORIZONTAL_SPACING_FACTOR = 2.0;

  const BASE_CARD_WIDTH = 160;

  const displayItems = useMemo(() => {
    if (servicesData.length === 0) return [];
    const clonesBefore = servicesData.slice(servicesData.length - 1);
    const clonesAfter = servicesData.slice(0, 1);
    return [...clonesBefore, ...servicesData, ...clonesAfter];
  }, [servicesData]);

  const logicalIndex = useMemo(() => {
    if (servicesData.length === 0) return 0;
    let index = virtualIndex - 1;
    return (index + servicesData.length) % servicesData.length;
  }, [virtualIndex, servicesData.length]);

  const handleSwipe = useCallback((direction) => {
    if (isAnimatingRef.current) return;

    setVirtualIndex((prev) => {
      if (direction === "left") {
        return prev + 1;
      } else {
        return prev - 1;
      }
    });
  }, []);

  // --- EXISTING Touch event handlers for swiping ---
  const startX = useRef(null);
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (isAnimatingRef.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - startX.current;
    const SWIPE_THRESHOLD = 50;

    if (delta > SWIPE_THRESHOLD) {
      handleSwipe("right");
    } else if (delta < -SWIPE_THRESHOLD) {
      handleSwipe("left");
    }
  };
  // --- END EXISTING Touch event handlers ---


  // --- NEW: Mouse Wheel/Touchpad Scroll Handler ---
  const lastWheelTime = useRef(0);
  const WHEEL_COOLDOWN = 300; // milliseconds to prevent rapid-fire scrolls

  const handleWheel = useCallback((e) => {
    // Prevent default vertical scrolling if carousel is horizontal
    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTime.current < WHEEL_COOLDOWN) {
      return; // Ignore if scrolled too recently
    }

    lastWheelTime.current = now;

    // e.deltaY is for vertical scroll. e.deltaX is for horizontal scroll (touchpads, some mice)
    // We want to primarily listen to horizontal scroll (deltaX).
    // If deltaX is 0, but deltaY is not, it means a vertical scroll.
    // We can interpret a vertical scroll as a horizontal one if deltaX isn't available.
    const scrollDirection = e.deltaX || e.deltaY; // Prefer deltaX, fall back to deltaY

    if (scrollDirection > 0) { // Scrolling right (or down, interpreted as right)
      handleSwipe("left"); // Move to the next card
    } else if (scrollDirection < 0) { // Scrolling left (or up, interpreted as left)
      handleSwipe("right"); // Move to the previous card
    }
  }, [handleSwipe]);


  // Effect to attach and clean up the wheel event listener
  useEffect(() => {
    const viewportElement = carouselViewportRef.current;
    if (viewportElement) {
      viewportElement.addEventListener('wheel', handleWheel, { passive: false }); // passive: false to allow preventDefault
    }

    return () => {
      if (viewportElement) {
        viewportElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);
  // --- END NEW Mouse Wheel/Touchpad Scroll Handler ---


  const getCardTransforms = useCallback((cardIndex) => {
    let relativePos = cardIndex - virtualIndex;
    const totalDisplayItems = displayItems.length;

    if (relativePos > totalDisplayItems / 2) relativePos -= totalDisplayItems;
    if (relativePos < -totalDisplayItems / 2) relativePos += totalDisplayItems;

    const angleStep = MAX_ROTATION_DEGREES / (VISIBLE_SLOTS / 2);
    const angleDegrees = relativePos * angleStep;
    const angleRadians = angleDegrees * (Math.PI / 180);

    const baseTranslateX = ARC_RADIUS * Math.sin(angleRadians);
    const linearSpreadX = relativePos * BASE_CARD_WIDTH * 0.8;
    const translateX = (baseTranslateX + linearSpreadX) * HORIZONTAL_SPACING_FACTOR;

    const translateZ = -ARC_RADIUS * Math.cos(angleRadians);
    const rotateY = angleDegrees;

    const normalizedAbsAngle = Math.min(1, Math.abs(angleDegrees) / (MAX_ROTATION_DEGREES * (VISIBLE_SLOTS / 2)));
    const scale = MIN_CENTER_SCALE + (MAX_SIDE_SCALE - MIN_CENTER_SCALE) * normalizedAbsAngle;
    const clampedScale = Math.min(MAX_SIDE_SCALE, Math.max(MIN_CENTER_SCALE, scale));

    const zIndex = totalDisplayItems - Math.abs(relativePos);
    const opacityThreshold = (VISIBLE_SLOTS / 2) + 2;
    const opacity = Math.abs(relativePos) > opacityThreshold ? 0 : 1;

    return {
      x: translateX,
      y: 0,
      z: translateZ,
      rotateY: rotateY,
      scale: clampedScale,
      zIndex: zIndex,
      opacity: opacity
    };
  }, [virtualIndex, displayItems.length, ARC_RADIUS, MAX_ROTATION_DEGREES, MIN_CENTER_SCALE, MAX_SIDE_SCALE, VISIBLE_SLOTS, HORIZONTAL_SPACING_FACTOR, BASE_CARD_WIDTH]);


  useLayoutEffect(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    const SNAP_BACK_DELAY = 500;

    if (virtualIndex === displayItems.length - 1) {
      setTimeout(() => {
        carouselTrackRef.current.style.transitionDuration = '0s';
        setVirtualIndex(1);
        void carouselTrackRef.current.offsetWidth;
        carouselTrackRef.current.style.transitionDuration = '';
        isAnimatingRef.current = false;
      }, SNAP_BACK_DELAY);
    } else if (virtualIndex === 0) {
      setTimeout(() => {
        carouselTrackRef.current.style.transitionDuration = '0s';
        setVirtualIndex(displayItems.length - 2);
        void carouselTrackRef.current.offsetWidth;
        carouselTrackRef.current.style.transitionDuration = '';
        isAnimatingRef.current = false;
      }, SNAP_BACK_DELAY);
    } else {
      isAnimatingRef.current = false;
    }
  }, [virtualIndex, displayItems.length]);

  return (
    <>
      <Navbar expand="lg" fixed="top" className="glass-navbar px-4">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="fw-bold text-white">Jayaris</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link href="#blogs">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Career</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
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

      <section
        className="services-carousel-section"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <h2 className="services-heading">Expert Services We Offer</h2>
        <div className="carousel-viewport" ref={carouselViewportRef}> {/* Attach ref here */}
          <div className="carousel-3d-container">
            <motion.div
              className="carousel-track"
              ref={carouselTrackRef}
            >
              {displayItems.map((service, index) => {
                const transforms = getCardTransforms(index);
                const isCenter = index === virtualIndex;
                return (
                  <motion.div
                    key={`${service.title}-${index}`}
                    className="service-card-3d-wrapper"
                    animate={{
                      x: transforms.x,
                      y: transforms.y,
                      z: transforms.z,
                      rotateY: transforms.rotateY,
                      scale: transforms.scale,
                      zIndex: transforms.zIndex,
                      opacity: transforms.opacity
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => setVirtualIndex(index)}
                  >
                    <Tilt
                      className={`service-card ${isCenter ? 'center' : ''}`}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                    >
                      <h5>{service.title}</h5>
                    </Tilt>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="service-description">
          <h4>{servicesData[logicalIndex].title}</h4>
          <p>{servicesData[logicalIndex].description}</p>
        </div>

        {/* You can still keep the navigation arrows for explicit clicks/taps */}
        <div className="carousel-nav-arrows">
          <Button variant="outline-light" onClick={() => handleSwipe("right")}>&lt;</Button>
          <Button variant="outline-light" onClick={() => handleSwipe("left")}>&gt;</Button>
        </div>
      </section>
    </>
  );
};

export default Services;