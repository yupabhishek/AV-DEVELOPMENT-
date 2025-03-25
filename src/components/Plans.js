import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const plans = [
  {
    title: "Basic Plan",
    price: "₹5999",
    boxType: "side",
    features: [
      { text: "5 Pages Website", hasFeature: true },
      { text: "1 Year Free Domain Name (.com, .in, .org)", hasFeature: true },
      { text: "1 Year Free Cloud Hosting", hasFeature: true },
      { text: "1 Year Free Designer Logo (3 Samples)", hasFeature: false },
      { text: "Dynamic Website (Premium Design)", hasFeature: true },
      { text: "Admin Access", hasFeature: true },
      { text: "Google Search Console Setup", hasFeature: false },
      { text: "Lifetime 24/7 Free Hosting Support", hasFeature: true },
      { text: "Unlimited Images & Videos Upload", hasFeature: true },
      { text: "Free SSL Certificates", hasFeature: true },
      { text: "10 Free Email IDs", hasFeature: false }, // Basic has 5, but we'll mark as not included for 10
      { text: "SEO Friendly Website", hasFeature: true },
      { text: "100% Responsive Website", hasFeature: true },
      { text: "Live Chat Integration", hasFeature: true },
      { text: "Payment Gateway Integration", hasFeature: true },
      { text: "Social Media Integration", hasFeature: true },
      { text: "Call Button Integration", hasFeature: true },
      { text: "WhatsApp Button Integration", hasFeature: true },
      { text: "Inquiry Form", hasFeature: true },
      { text: "WooCommerce Features", hasFeature: false },
      { text: "1 Year 24/7 Free Support For Website", hasFeature: true },
      { text: "Annual Renewal: ₹4000", hasFeature: false }, // Basic has ₹3000
    ],
    buttonText: "Choose Plan",
  },
  {
    title: "Standard Plan",
    price: "₹9999",
    boxType: "middle",
    isHighlighted: true,
    features: [
      { text: "12 Pages Website", hasFeature: true },
      { text: "1 Year Free Domain Name (.com, .in, .org)", hasFeature: true },
      { text: "1 Year Free Cloud Hosting", hasFeature: true },
      { text: "1 Year Free Designer Logo (3 Samples)", hasFeature: true },
      { text: "Dynamic Website (Premium Design)", hasFeature: true },
      { text: "Admin Access", hasFeature: true },
      { text: "Google Search Console Setup", hasFeature: true },
      { text: "Lifetime 24/7 Free Hosting Support", hasFeature: true },
      { text: "Unlimited Images & Videos Upload", hasFeature: true },
      { text: "Free SSL Certificates", hasFeature: true },
      { text: "10 Free Email IDs", hasFeature: true },
      { text: "SEO Friendly Website", hasFeature: true },
      { text: "100% Responsive Website", hasFeature: true },
      { text: "Live Chat Integration", hasFeature: true },
      { text: "Payment Gateway Integration", hasFeature: true },
      { text: "Social Media Integration", hasFeature: true },
      { text: "Call Button Integration", hasFeature: true },
      { text: "WhatsApp Button Integration", hasFeature: true },
      { text: "Inquiry Form", hasFeature: true },
      { text: "WooCommerce Features", hasFeature: true },
      { text: "1 Year 24/7 Free Support For Website", hasFeature: true },
      { text: "Annual Renewal: ₹4000", hasFeature: false }, // Standard has ₹3000
    ],
    buttonText: "Choose Plan",
  },
  {
    title: "Premium Plan",
    price: "Custom Pricing",
    boxType: "side",
    features: [
      { text: "Pages: According to Requirement", hasFeature: true },
      { text: "1 Year Free Domain Name (.com, .in, .org)", hasFeature: true },
      { text: "1 Year Free Cloud Hosting", hasFeature: true },
      { text: "1 Year Free Designer Logo (3 Samples)", hasFeature: true },
      { text: "Dynamic Website", hasFeature: true },
      { text: "Admin Access", hasFeature: true },
      { text: "Google Search Console Setup", hasFeature: true },
      { text: "Lifetime 24/7 Free Hosting Support", hasFeature: true },
      { text: "Unlimited Images & Videos Upload", hasFeature: true },
      { text: "Free SSL Certificates", hasFeature: true },
      { text: "10 Free Email IDs", hasFeature: true },
      { text: "SEO Friendly Website", hasFeature: true },
      { text: "100% Responsive Website", hasFeature: true },
      { text: "Live Chat Integration", hasFeature: true },
      { text: "Payment Gateway Integration", hasFeature: true },
      { text: "Social Media Integration", hasFeature: true },
      { text: "Call Button Integration", hasFeature: true },
      { text: "WhatsApp Button Integration", hasFeature: true },
      { text: "Inquiry Form", hasFeature: true },
      { text: "WooCommerce Features", hasFeature: true },
      { text: "1 Year 24/7 Free Support For Website", hasFeature: true },
      { text: "Annual Renewal: ₹4000", hasFeature: true },
    ],
    buttonText: "Contact Us",
  },
];

export const Plans = () => {
  return (
    <section className="plans" id="plans">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Plans & Pricing</h2>
                  <p className="lead">
                    Choose the perfect plan for your web development and website design needs. We offer flexible pricing to suit businesses of all sizes.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Row>
          {plans.map((plan, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <TrackVisibility>
                {({ isVisible }) => (
                  <Card
                    className={
                      isVisible
                        ? `animate__animated animate__zoomIn plans-card plans-card-${plan.boxType} ${
                            plan.isHighlighted ? "plans-card-highlighted" : ""
                          }`
                        : `plans-card plans-card-${plan.boxType} ${
                            plan.isHighlighted ? "plans-card-highlighted" : ""
                          }`
                    }
                  >
                    {plan.isHighlighted && (
                      <div className="plans-badge">Most Popular</div>
                    )}
                    <Card.Body className="text-center">
                      <h4 className="plans-title">{plan.title}</h4>
                      <h3 className="plans-price">{plan.price}</h3>
                      <ul className="plans-features">
                        {plan.features.map((feature, i) => (
                          <li key={i}>
                            <span
                              className={
                                feature.hasFeature ? "feature-tick" : "feature-cross"
                              }
                            >
                              {feature.hasFeature ? "✔" : "✘"}
                            </span>{" "}
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                      <Button variant="primary" className="plans-button">
                        {plan.buttonText}
                      </Button>
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