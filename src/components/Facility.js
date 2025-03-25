import { Container, Row, Col, Card } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const facilities = [
  {
    title: "Web Design",
    description: "We design visually appealing and user-friendly websites for you.",
    icon: "bi-brush",
  },
  {
    title: "24*7 Free Support",
    description: "We provide constant support to keep your website running smoothly.",
    icon: "bi-headset",
  },
  {
    title: "Web Development",
    description: "We build responsive and modern web applications with top technology.",
    icon: "bi-code-slash",
  },
  {
    title: "100% Responsive websites",
    description: "We ensure your website looks great on all devices, mobile to desktop.",
    icon: "bi-display",
  },
  {
    title: "Content Writing",
    description: "We craft engaging and SEO-friendly content to boost your online reach.",
    icon: "bi-pen",
  },
  {
    title: "Logo Designs",
    description: "We design unique and memorable logos to represent your brand identity.",
    icon: "bi-vector-pen",
  },
];

export const Facility = () => {
  return (
    <section className="facility" id="facilities">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Our Facilities</h2>
                  <p className="lead">
                    We are a One-Stop Solution for delivering the best web design and development facilities. We render customized and affordable web design facility to suit your requirements. Choose the best plans for building a responsive web according to your needs.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          {facilities.map((facility, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <TrackVisibility>
                {({ isVisible }) => (
                  <Card className={isVisible ? "animate__animated animate__zoomIn facility-card" : "facility-card"}>
                    <Card.Body className="text-center">
                      <i className={`bi ${facility.icon} facility-icon mb-3`}></i>
                      <Card.Title>{facility.title}</Card.Title>
                      <Card.Text>{facility.description}</Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};