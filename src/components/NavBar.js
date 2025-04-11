import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <div className="navback">

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="h-100 text-white fw-bold">
            AV DEVELOPMENT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
                >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#facilities"
                className={activeLink === 'facilities' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('facilities')}
                >
                Facilities
              </Nav.Link>
              <Nav.Link
                href="#plans"
                className={activeLink === 'plans' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('plans')}
                >
                Plans & Pricing
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
                >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
                </div>
    </Router>
  );
};