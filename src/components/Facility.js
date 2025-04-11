import { Container, Row, Col, Card } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";

const facilities = [
  {
    title: "Professional Web Design",
    description: "We create visually stunning, user-friendly websites with modern UI/UX principles to maximize engagement and conversions.",
    icon: "bi-brush",
    keywords: ["web design services", "UI/UX design", "professional website design"]
  },
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock assistance to ensure your website remains operational, secure, and up-to-date at all times.",
    icon: "bi-headset",
    keywords: ["website support", "technical assistance", "24/7 maintenance"]
  },
  {
    title: "Full-Stack Web Development",
    description: "Custom web application development using cutting-edge technologies like MERN stack for scalable, high-performance solutions.",
    icon: "bi-code-slash",
    keywords: ["web development", "MERN stack", "custom web applications"]
  },
  {
    title: "Mobile-Responsive Development",
    description: "Pixel-perfect responsive designs that adapt seamlessly across all devices and screen sizes.",
    icon: "bi-display",
    keywords: ["responsive web design", "mobile-friendly websites", "cross-device compatibility"]
  },
  {
    title: "SEO Content Writing",
    description: "Strategic, keyword-optimized content crafted to boost your search rankings and audience engagement.",
    icon: "bi-pen",
    keywords: ["SEO content", "blog writing", "content marketing"]
  },
  {
    title: "Brand Identity & Logo Design",
    description: "Unique, memorable logos and comprehensive brand identity packages to establish your market presence.",
    icon: "bi-vector-pen",
    keywords: ["logo design", "brand identity", "visual branding"]
  },
];

export const Facility = () => {
  // Structured data for Facility services
  const facilitySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Development Facilities | AV Development",
    "description": "Comprehensive web design and development services including responsive design, 24/7 support, and brand identity solutions",
    "url": "https://avdevelopment.in/facilities",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": facilities.map((facility, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": facility.title,
          "description": facility.description,
          "keywords": facility.keywords.join(", ")
        }
      }))
    }
  };

  return (
    <section className="facility" id="facilities">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Web Development Facilities & Services | AV Development</title>
        <meta 
          name="description" 
          content="Professional web design and development facilities including responsive websites, 24/7 support, content writing, and brand identity solutions." 
        />
        <meta name="keywords" content="web design, web development, responsive websites, SEO content, logo design" />
        <meta property="og:title" content="Web Development Facilities & Services | AV Development" />
        <meta property="og:description" content="Complete web solutions including design, development, and ongoing support services" />
        <meta property="og:url" content="https://avdevelopment.in/facilities" />
        <script type="application/ld+json">{JSON.stringify(facilitySchema)}</script>
      </Helmet>

      <Container>
        <Row className="text-center mb-5">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Our Comprehensive Web Solutions</h1>
                  <p className="lead facility-intro">
                    AV Development provides <strong>end-to-end digital solutions</strong> from initial design to ongoing maintenance. 
                    Our <strong>award-winning team</strong> delivers custom, responsive websites with 24/7 support, 
                    <strong>SEO-optimized content</strong>, and complete <strong>brand identity packages</strong> tailored to your business needs.
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
                  <Card 
                    className={isVisible ? "animate__animated animate__zoomIn facility-card" : "facility-card"}
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <Card.Body className="text-center">
                      <i 
                        className={`bi ${facility.icon} facility-icon mb-3`}
                        aria-hidden="true"
                      ></i>
                      <Card.Title itemProp="name">{facility.title}</Card.Title>
                      <Card.Text itemProp="description">{facility.description}</Card.Text>
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