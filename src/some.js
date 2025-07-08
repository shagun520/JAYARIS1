import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './FanHero.css';

const slides = [
  {
    id: 1,
    text: "It’s the ultimate way to connect brands with sports fans during professional live sporting events.",
    image: "/images/fan-glove.png", // replace with your image path
    bgText: "SMS PLATFORM"
  },
  {
    id: 2,
    text: "Create immersive fan experiences that drive loyalty, engagement and revenue for your brand.",
    image: "/images/fan-banner.png",
    bgText: "FAN JOURNEY"
  },
  {
    id: 3,
    text: "Measure your ROI with powerful analytics and campaign tools designed for real-time sports events.",
    image: "/images/analytics-phone.png",
    bgText: "DATA DRIVEN"
  }
];

const FanHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="fan-hero-section d-flex align-items-center">
      <Container fluid className="text-white position-relative fan-hero-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[activeSlide].id}
            className="fan-slide-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="fan-background-text">
              {slides[activeSlide].bgText}
            </div>
            <Row>
              <Col md={6} className="d-flex align-items-center">
                <h1 className="fan-slide-text fw-bold">
                  {slides[activeSlide].text}
                </h1>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={slides[activeSlide].image}
                  alt="fan-engagement"
                  className="img-fluid fan-slide-img"
                />
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>

        <div className="fan-slide-pagination text-center mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`fan-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => nextSlide(index)}
            >
              {`0${index + 1}`}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FanHero;
