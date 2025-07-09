import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import logoImage from './image/logo.png';
import img1 from './image/img1.jpg';
import img2 from './image/img2.webp';
import graphic from './image/graphic.jpg';
import team from './image/Team.jpg';

import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Footer from './components/Footer'; 
import './Jayris.css'

const Jayris = () => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

    return (
        <><motion.div
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

        <div className='hero-section'>
            <motion.div
                style={{
                    // backgroundImage: `url(${image})`, // Replaced with video
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
                className='hero-parallax-section'>
                {/* Video background */}
                <video className='hero-video-background' autoPlay muted loop>
                    <source src='https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4' />
                </video>
                {/* Overlay for blur and dimming */}
                <div className="hero-overlay"></div>
                {/* Main text content */}
                <div className='hero-content'>
                    <motion.h1
                        style={{ y: textY }}
                        className='hero-heading'>
                        <span className='highlight-orange'>Shape </span>the Future. Build Your Career <span className='highlight-orange'>With </span> Jayaris
                    </motion.h1>
                    <br />
                    <motion.p style={{ y: textY }} className='hero-tagline'>
                        At Jayaris, careers are more than just roles. We empower talent with purpose, ownership, and growth opportunities that create lasting impact.
                    </motion.p>
                    <br />
                    <br />
                    <div className='scroll-down-prompt'>
                        <button className='scroll-button'>Scroll <span className='highlight-orange'>Down</span></button>
                        <p className='highlight-orange scroll-arrow'>&#129175;</p>
                    </div>
                </div>
            </motion.div>

            <div className='content-section'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5, duration: .5 }}
                    className='overview-heading-container'>
                    <motion.h1 className='overview-heading'>
                        Overview of <span className='highlight-orange'>Opportunities</span>
                    </motion.h1>
                </motion.div>

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: .5, duration: .5 }}
                        className='opportunities-grid'>
                        <div className="opportunity-box">
                            <ul className='opportunity-list'>
                                <p className='highlight-orange opportunity-title'>Open for Freshers (Internships)</p>
                                <li>Start strong with immersive internships that let you work on live projects, collaborate with real teams, and develop skills that matter in the real world.</li>
                                <p className='highlight-orange opportunity-title'>Experienced Professionals Welcome</p>
                                <li>Bring your experience to the table and join a company where innovation meets execution. We value leaders who are ready to build, mentor, and grow.</li>
                            </ul>
                        </div>
                        <div className="opportunity-box">
                            <ul className='opportunity-list'>
                                <p className='highlight-orange opportunity-title'>Live, Industry-Grade Projects</p>
                                <li>Get involved in real client work from day one. Our projects span across industries and technologies, helping you build a portfolio that stands out.</li>
                                <p className='highlight-orange opportunity-title'>Mentorship by Expert Teams</p>
                                <li>You’ll never work alone. Our senior team members guide, support, and mentor every step to help you elevate your skills and career trajectory.</li>
                            </ul>
                        </div>
                    </motion.div>
                    <br />
                    <br />
                </div>

                {/* Development Sections */}
                <div className='career-area-container'>
                    {/* Web Development */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="career-area-box career-area-reversed">
                        <div className="career-area-image-wrapper">
                            <img className="career-area-image" src={img1} alt="Web Dev Internships" />
                        </div>
                        <div className="career-area-details">
                            <h1 className='career-area-heading highlight-orange'>Web Development</h1>
                            <ul className='career-area-list'>
                                <li>Frontend Development Intern (React.js, HTML/CSS, JavaScript)</li>
                                <li>Backend Development Intern (Node.js, Express, APIs)</li>
                                <li>Full Stack Development Intern (MERN/MEAN Stack)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <br />
                    <br />

                    {/* App Development */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="career-area-box">
                        <div className="career-area-image-wrapper">
                            <img className="career-area-image" src={img2} alt="App Dev Internships" />
                        </div>
                        <div className="career-area-details">
                            <h1 className='career-area-heading highlight-orange'>App Development</h1>
                            <ul className='career-area-list'>
                                <li>Android Development Intern (Java/Kotlin)</li>
                                <li>iOS Development Intern (Swift)</li>
                                <li>Cross-Platform App Development Intern (Flutter/React Native)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <br />
                    <br />

                    {/* UI/UX Design */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="career-area-box career-area-reversed">
                        <div className="career-area-image-wrapper">
                            <img className="career-area-image" src={graphic} alt="UI/UX Internships" />
                        </div>
                        <div className="career-area-details">
                            <h1 className='career-area-heading highlight-orange'>UI/UX Design</h1>
                            <ul className='career-area-list'>
                                <li>UI Design Intern (Figma, Adobe XD)</li>
                                <li>UX Research & Wireframing Intern</li>
                                <li>Product Design Intern (Prototyping & User Testing)</li>
                            </ul>
                        </div>
                    </motion.div>

                    <br />
                    <br />

                    {/* SEO & Digital Marketing */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="career-area-box">
                        <div className="career-area-image-wrapper">
                            <img className='career-area-image' src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png" alt="" />
                        </div>
                        <div className="career-area-details">
                            <h1 className='career-area-heading highlight-orange'>SEO & Digital Marketing</h1>
                            <ul className='career-area-list'>
                                <li>SEO Intern (On-page, Off-page, Analytics)</li>
                                <li>Digital Marketing Intern (Google Ads, Meta Ads, Funnels)</li>
                                <li>Social Media Marketing Intern (Strategy, Content, Scheduling)</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Content Creation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="career-area-box career-area-reversed">
                        <div className="career-area-image-wrapper">
                            <img className='career-area-image' src="https://cdn.pixabay.com/photo/2024/09/08/08/51/man-9031564_1280.jpg" alt="" />
                        </div>
                        <div className="career-area-details">
                            <h1 className='career-area-heading highlight-orange'>Content Creation</h1>
                            <ul className='career-area-list'>
                                <li>Content Writing Intern (Blogs, Web Copy, SEO Content)</li>
                                <li>UX Research & Wireframing Intern</li>
                                <li>Product Design Intern (Prototyping & User Testing)</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Team Culture & Perks */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="career-area-box">
                        <div className="career-area-image-wrapper">
                            <img className="career-area-image" src={team} alt="Team Culture" />
                        </div>
                        <div className="career-area-details">
                            <h1 className='career-area-heading highlight-orange'>Team Culture & Perks</h1>
                            <ul className='career-area-list perk-list'>
                                <li>Flexible Work Hours</li>
                                <li>Learning & Development Support</li>
                                <li>Agile, Collaborative Work Environment</li>
                                <li>Structured Career Progression</li>
                                <li>Employee Recognition Programs</li>
                                <li>Inclusive & Transparent Culture</li>
                                <li>Wellness & Mental Health Support</li>
                                <li>Innovation-Driven Ecosystem</li>
                                <li>Hands on experience </li>
                                <li>Industry Level Projects </li>
                            </ul>
                        </div>
                    </motion.div>
                </div> {/* End career-area-container */}
            </div> {/* End content-section */}
        </div> 
        <Footer />
        </>
    );
}

export default Jayris;