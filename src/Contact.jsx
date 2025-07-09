// src/Contact.jsx

import React, { useState } from 'react';
import Contactimg from './image/Contact.png';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import logoImage from './image/logo.png';
import imagebg from './image/bg2.jpeg';
import Footer from './components/Footer'; 
import "./Contact.css"; // Ensure this import is present

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can add API call logic (Formspree, EmailJS, backend, etc.)
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="contact-navbar-motion-wrapper" // Custom class for fixed positioning/z-index
            >
                <Navbar expand="lg" fixed="top" className="glass-navbar contact-navbar-padding">
                    <Container fluid className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                            <img
                                src={logoImage}
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-2"
                                alt="Jayaris Logo"
                            />
                            <span className="navbar-brand-text">Jayaris</span> {/* Custom class */}
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="contact-nav-links-center"> {/* Custom class */}
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                                <Nav.Link as={Link} to="/career">Career</Nav.Link> {/* Corrected to /career */}
                                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link> {/* Corrected to /contact */}
                            </Nav>

                            <div className="d-flex align-items-center contact-nav-right-buttons"> {/* Custom class */}
                                <Link to="/auth" className="contact-login-link">
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

            <div
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${imagebg})`, backgroundSize: 'cover' }}
                className="contact-page-container"
            >
                <div className='contact-left-section'>
                    <div className='contact-image-wrapper'>
                        <img className='contact-main-image' src={Contactimg} alt="" />
                    </div>
                    <h1 className='contact-heading'>Contact Us.</h1>
                    <p className="contact-tagline">
                        Have questions about sustainability, compliance, or how Jayaris can help your business? Reach out below and our support team will get back to you within 24 hours.
                        Form Fields:
                    </p>
                </div>

                <div className="contact-form-card">
                    <div className='contact-close-button-wrapper'>
                        <Link to='/'><FaXmark className="contact-close-button" /></Link>
                    </div>
                    <h2 className="contact-form-title">Contact Us</h2>

                    {submitted ? (
                        <div className="contact-submission-message">Thank you! We'll be in touch soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form-layout">
                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="name" className="contact-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter your name'
                                        className="contact-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="email" className="contact-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder='Enter your Email'
                                        required
                                        className="contact-input"
                                    />
                                </div>
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="service" className="contact-label">Service</label>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    onChange={handleChange}
                                    required
                                    placeholder='Service Name'
                                    className="contact-input"
                                />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="subject" className="contact-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    onChange={handleChange}
                                    required
                                    className="contact-input"
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="message" className="contact-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="contact-input contact-textarea"
                                ></textarea>
                            </div>

                            <div className="contact-submit-button-wrapper">
                                <button
                                    type="submit"
                                    className="contact-submit-button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contact;