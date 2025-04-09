import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";

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
      { text: "10 Free Email IDs", hasFeature: false },
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
      { text: "Annual Renewal: ₹4000", hasFeature: false },
    ],
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
      { text: "Annual Renewal: ₹4000", hasFeature: false },
    ],
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
  },
];

export const Plans = () => {
  // Schema Markup for SEO (Rich Snippets)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Web Development Plans in India | AV Development",
    "description": "Affordable and SEO-friendly web development plans with free hosting, domain, and 24/7 support. Choose the best plan for your business.",
    "url": "https://avdevelopment.in/plans",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "5999",
      "highPrice": "9999",
      "priceCurrency": "INR",
      "offerCount": "3",
      "offers": plans.map((plan) => ({
        "@type": "Offer",
        "name": plan.title,
        "price": plan.price === "Custom Pricing" ? "9999" : plan.price.replace("₹", ""),
        "priceCurrency": "INR",
        "url": "https://avdevelopment.in/plans",
        "description": `Includes: ${plan.features.filter(f => f.hasFeature).map(f => f.text).join(", ")}`,
        "availability": "https://schema.org/InStock",
      })),
    },
  };

  return (
    <section className="plans" id="plans">
      {/* SEO Meta Tags & Schema Markup */}
      <Helmet>
        <title>Best Web Development Plans in India | AV Development</title>
        <meta 
          name="description" 
          content="Affordable and SEO-friendly web development plans with free hosting, domain, and 24/7 support. Choose the best plan for your business." 
        />
        <meta property="og:title" content="Best Web Development Plans in India | AV Development" />
        <meta property="og:description" content="Affordable and SEO-friendly web development plans with free hosting, domain, and 24/7 support." />
        <meta property="og:url" content="https://avdevelopment.in/plans" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <Container>
        <Row className="text-center mb-5">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Best Web Development Plans in India</h1>
                  <p className="lead">
                    Get a <strong>fully SEO-optimized, responsive website</strong> with free hosting, 
                    domain, and 24/7 support. Choose the perfect plan for your business growth.
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
                      <h2 className="plans-title">{plan.title}</h2>
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
                      <Button 
                        className="plans-button" 
                        href="tel:+918750443995"
                        aria-label={`Call to order ${plan.title}`}
                      >
                        Call Now
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