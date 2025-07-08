import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaCogs,
  FaFacebook,
  FaLaptopCode,
  FaLinkedin,
  FaMobileAlt,
  FaPaintBrush,
  FaTwitter
} from "react-icons/fa";
export default function HomePage() {
  const [dynamicText, setDynamicText] = useState("");
  const dynamicWords = ["Get.", "Set.", "Host."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const currentWord = dynamicWords[wordIndex];
    let i = 0;
    setDynamicText("");

    const typeInterval = setInterval(() => {
      setDynamicText((prev) => prev + currentWord.charAt(i));
      i++;
      if (i >= currentWord.length) clearInterval(typeInterval);
    }, 150);

    const nextWordTimeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, currentWord.length * 150 + 1000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(nextWordTimeout);
    };
  }, [wordIndex]);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Jayaris</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero d-flex align-items-center" id="home" style={{ minHeight: "100vh" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="display-4 fw-bold">{dynamicText}</h1>
            </Col>
            <Col md={6} className="text-center">
              <div style={{ width: "400px", height: "400px", margin: "0 auto" }}>
                {/* Lottie animation goes here */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section py-5">
        <Container>
          <h2 className="text-center mb-5">About Us</h2>

          <Row className="mb-4">
            <Col>
              <h4>Who We Are</h4>
              <p>Jayaris is a global web and app development powerhouse delivering universal-standard quality through our deep technical expertise and forward-thinking strategies.</p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <h4>Founder's Note</h4>
              <p>Our journey started with a vision to empower businesses through technology that’s simple, effective, and scalable. Jayaris stands as a bridge between innovation and global impact.</p>
            </Col>
            <Col md={6}>
              {/* Optional: Add founder's image or quote */}
            </Col>
          </Row>

          <Row className="text-center mb-5">
            <Col md={4}><h5>Mission</h5><p>Bridging borders through innovation</p></Col>
            <Col md={4}><h5>Vision</h5><p>Becoming the trusted digital partner for businesses globally</p></Col>
            <Col md={4}><h5>Values</h5><p>Excellence, Transparency, Agility</p></Col>
          </Row>

          <Row className="text-center mb-4">
            <Col md={4}><h6>Clients</h6><p>B2B firms, startups</p></Col>
            <Col md={4}><h6>Students</h6><p>Tech interns, young developers</p></Col>
            <Col md={4}><h6>Organizations</h6><p>University and college partners</p></Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer text-white py-4 bg-dark">
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
