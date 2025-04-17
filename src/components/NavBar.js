import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (hash) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(hash);
  };

  return (
    <div className="navback">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="h-100 text-white fw-bold">
            AV DEVELOPMENT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('skills');
                }}
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#facilities"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('facilities');
                }}
                className={activeLink === 'facilities' ? 'active navbar-link' : 'navbar-link'}
              >
                Facilities
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#plans"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('plans');
                }}
                className={activeLink === 'plans' ? 'active navbar-link' : 'navbar-link'}
              >
                Plans & Pricing
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('projects');
                }}
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#founder"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('founder');
                }}
                className={activeLink === 'founder' ? 'active navbar-link' : 'navbar-link'}
              >
                Founders
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}