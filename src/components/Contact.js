import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    let response = await fetch("https://formspree.io/f/xqapblrq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (response.ok) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn img-fluid" : "img-fluid"} 
                  src={contactImg} 
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center text-md-start">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                          required 
                          className="w-100"
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="text" 
                          value={formDetails.lastName} 
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                          required 
                          className="w-100"
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          required 
                          className="w-100"
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)} 
                          required 
                          className="w-100"
                        />
                      </Col>
                      <Col xs={12} className="px-1 mb-3">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)} 
                          required
                          className="w-100"
                        />
                      </Col>
                      <Col xs={12} className="px-1 text-center text-md-start">
                        <button type="submit" className="mb-3">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col xs={12} className="px-1 text-center">
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};