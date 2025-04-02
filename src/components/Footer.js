// Footer.jsx
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.png"/;
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from 'react-router-dom'; // If using React Router
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <div className="footerBackground">

    <div className="footerCss">

    <footer className="footer   py-5">
      <Container>
        <div className="avdevelopment">
        <h1>AV DEVELOPMENT</h1>

        </div>
        <div className="rowDiv">

       
        <Row className="gy-4 ">
          {/* Logo Section */}
          {/* <Col xs={12} md={3} className="text-center">
            {/* <img src={logo} alt="Logo" className="footer-logo mb-3" /> */}
           {/* </Col> */} 

          {/* Company Links */}
          <Col xs={6} md={3}>
  <h5 className="fw-bold mb-3 text-black">COMPANY</h5>
  <ul className="list-unstyled colorOfUi text-black w-10">
    <li className="mb-2"><a href="" className="text-decoration-none text-black">About Us</a></li>
    <li className="mb-2"><a href="#projects" className="text-decoration-none text-black">Our Work</a></li>
    <li className="mb-2"><a href="#skills" className="text-decoration-none text-black">Skills</a></li>
    <li className="mb-2"><a href="#plans" className="text-decoration-none text-black">Plans</a></li>
    <li className="mb-2"><a href="#founder" className="text-decoration-none text-black">Founders</a></li>
    <li className="mb-2"><a href="#connect" className="text-decoration-none text-black">Contact Us</a></li>
    <li className="mb-2"><a href="#facilities" className="text-decoration-none text-black">Facility</a></li>
  </ul>
</Col>
          {/* Services Links */}
          <Col xs={6} md={3}>
            <h5 className="fw-bold mb-3">SERVICES</h5>
            <ul className="list-unstyled colorOfUi">
              {["SEO Services", "Web Design", "Web Development", "E-Commerce Marketing", "Pay Per Click Management"].map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
          </Col>

          {/* Location */}
          <Col xs={12} md={3}>
            <h5 className="fw-bold mb-3 ">OUR LOCATION</h5>
            <p className="mb-2 ">
              Burari Delhi<br />
               INDIA <br />
               Contact Info - 9718659236 || 8750443995  
            </p>
            <p className="mb-0">📧 av.development.contact@gmail.com</p>
          </Col>
        </Row>

        {/* Bottom Section */}
       
        </div>
      </Container>
    </footer>
    </div>

    <div className="socialFooter">
    <Row className="footer-bottom align-items-center py-3">
  {/* Copyright Section */}
  <Col xs={12} md={6} className="text-center text-md-start">
    <p className="mb-0">© 2024-2025 <strong>AV DEVELOPMENT</strong>. All Rights Reserved.</p>
  </Col>
  {/* Social Media Links */}
 
  <Col xs={12} md={6} className="text-center text-md-end mt-3 mt-md-0">
    <div className="social-icons">
      <a href="https://www.linkedin.com/company/av-development-here/" className="mx-2">
  
        <img src={navIcon1} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://www.facebook.com/avdevelopmenthere" className="mx-2">
        <img src={navIcon2} alt="Facebook" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/avdevelopmenthere/" className="mx-2">
        <img src={navIcon3} alt="Instagram" className="social-icon" />
      </a>
    </div>
  </Col>
</Row>
</div>

    </div>


  );
};

// styles.css
const styles = `

`;

export default styles;