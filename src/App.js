import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import "./App.css";
import c1 from "./image/c1.jpeg";
import c2 from "./image/c2.jpeg";
import c3 from "./image/c3.jpeg";

export default function HomePage() {
  // Init AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Bullet animation setup
  const points = [
    "Global Delivery",
    "Top Talent",
    "Agile Execution",
    "Post-Delivery Support"
  ];

  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentPointIndex((prev) => (prev + 1) % 4); // since points.length = 4
  }, 1000);
  return () => clearInterval(interval);
}, []);


  const currentPoint = points[currentPointIndex];

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
      <section className="hero d-flex align-items-center" id="home">
        <Container>
          <Row className="text-center justify-content-center">
            <Col md={10} data-aos="fade-up">
              <h1 className="hero-title fade-in">
                Universal-Standard Web & App Development Engineered by World’s Brightest Minds
              </h1>
              <div className="mt-4">
                <Button variant="primary" size="lg" className="me-3">Let’s Build Together</Button>
                <Button variant="outline-light" size="lg">Request a Quote</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specialization Panel */}
      <section className="specialization py-5" id="services" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">Our Specialization</h2>
          <Row>
            {[
              { icon: <FaLaptopCode />, title: "Web Development" },
              { icon: <FaMobileAlt />, title: "App Development" },
              { icon: <FaPaintBrush />, title: "UI/UX Design" },
              { icon: <FaChartLine />, title: "Dashboard Creation" },
              { icon: <FaCogs />, title: "CMS Integration" }
            ].map((item, idx) => (
              <Col key={idx} md={4} lg={2} className="text-center mb-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="icon-box slide-up">
                  <div className="icon">{item.icon}</div>
                  <p>{item.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

<section className="why-jayaris bg-light py-5">
  <Container className="text-center">
    <h2 className="mb-4">
      and you wonder why <span className="jayaris-bold">Jayaris?</span>
    </h2>
    <h4 className="because-line">
      because it offers{" "}
      <span className="dynamic-point-wrapper">
        <span className="dynamic-point">{currentPoint}</span>
      </span>
    </h4>
  </Container>
</section>


     <Row className="whatever align-items-center">
  <Col md={1} className="d-none d-md-block text-center">
    <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontWeight: "bold", marginLeft: "130px" }}>
      Client Testimonials
    </div>
  </Col>
  {[
    {
      image: c1,
      feedback: "whatever",
    },
    {
      image: c2,
      feedback: "whatever",
    },
    {
      image: c3,
      feedback: "whatever",
    },
  ].map((client, idx) => (
    <Col md={3} sm={6} xs={12} key={idx} className="mb-4 d-flex justify-content-center">
      <div className="testimonial-card">
        <div className="testimonial-inner">
          <div className="testimonial-front">
            <img src={client.image} alt="Client" className="client-image" />
          </div>
          <div className="testimonial-back">
            <p>{client.feedback}</p>
          </div>
        </div>
      </div>
    </Col>
  ))}
</Row>



      {/* Call to Action */}
      <section className="call-to-action bg-primary text-white py-5" >
        <Container className="text-center">
          <h2>Schedule a Free Consultation</h2>
          <Button variant="light" size="lg" href="#contact" data-aos="zoom-in">Contact Us</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
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
