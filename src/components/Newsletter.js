import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xpwprjzo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail('');
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error connecting to server. Try again later.");
    }
  };

  return (
    <Col lg={12} className="d-none d-md-block">
      <div className="newsletter-bx">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5}>
            <h3 className="newsletter-title">
              Subscribe to Our Newsletter
              <br />
              <span className="subtitle">Stay Updated with the Latest News</span>
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="email-input"
                />
                <button type="submit" className="submit-btn">
                  Subscribe
                </button>
              </div>
            </form>
            {status === 'sending' && (
              <Alert className="mt-3 newsletter-alert">Sending...</Alert>
            )}
            {status === 'error' && (
              <Alert variant="danger" className="mt-3 newsletter-alert">
                {message}
              </Alert>
            )}
            {status === 'success' && (
              <Alert variant="success" className="mt-3 newsletter-alert">
                {message}
              </Alert>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};