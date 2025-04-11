import { Helmet } from "react-helmet";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Structured data for Skills
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "MERN Stack Development Skills | AV Development",
    "description": "Professional web development skills including MERN stack, brand identity design, and logo creation",
    "url": "https://avdevelopment.in/skills",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "MERN Stack Development",
          "description": "Full-stack development with MongoDB, Express, React, and Node.js"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Brand Identity Design",
          "description": "Creating cohesive visual identities for businesses"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Logo Design",
          "description": "Professional logo creation and branding"
        }
      ]
    }
  };

  return (
    <section className="skill" id="skills">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>MERN Stack Development Skills | AV Development</title>
        <meta 
          name="description" 
          content="Professional web development skills including MERN stack (MongoDB, Express, React, Node.js), brand identity design, and logo creation." 
        />
        <meta property="og:title" content="MERN Stack Development Skills | AV Development" />
        <meta property="og:description" content="Our expertise in MERN stack development, brand identity, and logo design" />
        <meta property="og:url" content="https://avdevelopment.in/skills" />
        <script type="application/ld+json">{JSON.stringify(skillsSchema)}</script>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1>Our Core Skills</h1>
              <p className="skill-description">
                We specialize in <strong>MERN stack development</strong> (MongoDB, Express.js, React, Node.js) to build dynamic, secure, and scalable web applications. Our expertise also includes creating memorable <strong>brand identities</strong> and professional <strong>logo designs</strong> that make your business stand out.
              </p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
                aria-label="Skills carousel"
              >
                <div className="item" itemScope itemType="https://schema.org/ListItem">
                  <img 
                    src={meter1} 
                    alt="Web Development skill meter showing expert level" 
                    itemProp="image"
                  />
                  <h5 itemProp="name">MERN Stack Development</h5>
                  <meta itemProp="position" content="1" />
                </div>
                <div className="item" itemScope itemType="https://schema.org/ListItem">
                  <img 
                    src={meter2} 
                    alt="Brand Identity skill meter showing advanced level" 
                    itemProp="image"
                  />
                  <h5 itemProp="name">Brand Identity</h5>
                  <meta itemProp="position" content="2" />
                </div>
                <div className="item" itemScope itemType="https://schema.org/ListItem">
                  <img 
                    src={meter3} 
                    alt="Logo Design skill meter showing professional level" 
                    itemProp="image"
                  />
                  <h5 itemProp="name">Logo Design</h5>
                  <meta itemProp="position" content="3" />
                </div>
                <div className="item" itemScope itemType="https://schema.org/ListItem">
                  <img 
                    src={meter1} 
                    alt="Web Development skill meter showing expert level" 
                    itemProp="image"
                  />
                  <h5 itemProp="name">Responsive Design</h5>
                  <meta itemProp="position" content="4" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};