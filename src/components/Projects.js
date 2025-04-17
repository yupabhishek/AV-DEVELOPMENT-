import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Helmet } from "react-helmet";
import { useState } from "react";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { title: "Clothes Business E-commerce", description: "Full-stack e-commerce website with MERN stack", imgUrl: projImg1, link: "https://mernstack-frontend-k6id.vercel.app/", keywords: ["ecommerce development", "MERN stack", "online clothing store", "ecommerce"] },
    { title: "Makeup Artist Portfolio", description: "Professional portfolio website for makeup artists", imgUrl: projImg2, link: "https://reliable-tarsier-4efeae.netlify.app/", keywords: ["portfolio website", "beauty professional", "artist showcase", "portfolio"] },
    { title: "Eye Clinic Appointment Website", description: "Modern platform for easy eye clinic bookings.", imgUrl: projImg7, link: "https://shreekrishnalaya.vercel.app/", keywords: ["portfolio", "clinic appointment", "healthcare website", "doctor booking platform"] },
    { title: "Ankit Portfolio", description: "MERN Stack developer portfolio with projects showcase", imgUrl: projImg3, link: "https://programmerankit.netlify.app/", keywords: ["developer portfolio", "MERN stack", "web developer", "portfolio"] },
    { title: "Abhishek Portfolio", description: "Modern portfolio for software engineer", imgUrl: projImg4, link: "https://pitpiat.vercel.app/", keywords: ["tech portfolio", "software engineer", "developer website", "portfolio"] },
    { title: "Discord Bot Site", description: "Landing page for Discord bot services", imgUrl: projImg5, link: "https://pitpiat.netlify.app/bots/pituiya", keywords: ["Discord bot", "chat automation", "bot development"] },
    { title: "A Coder Portfolio", description: "Minimalist portfolio for coding professionals", imgUrl: projImg6, link: "https://pitpiat.netlify.app/", keywords: ["coder portfolio", "portfolio", "minimalist design", "developer website"] },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const projectSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "AV Development Portfolio Projects", "description": "Showcase of web development projects including e-commerce sites, portfolios, and Discord bots", "url": "https://avdevelopment.in/projects", "numberOfItems": projects.length, "itemListElement": projects.map((project, index) => ({ "@type": "ListItem", "position": index + 1, "item": { "@type": "CreativeWork", "name": project.title, "description": project.description, "url": project.link, "keywords": project.keywords.join(", ") } })) };

  return (
    <section className="project" id="projects">
      <Helmet>
        <meta name="description" content="Explore our portfolio of professional web development projects including e-commerce sites, portfolios, and custom web applications." />
        <meta property="og:title" content="Web Development Projects Portfolio | AV Development" />
        <meta property="og:description" content="Professional web development projects showcase from AV Development" />
        <meta property="og:url" content="https://avdevelopment.in/projects" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="web development projects, portfolio showcase, e-commerce development, MERN stack projects" />
        <script type="application/ld+json">{JSON.stringify(projectSchema)}</script>
      </Helmet>

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Our Web Development Projects</h1>
                  <p className="lead">
                    AV Development specializes in creating <strong>high-performance websites</strong> including
                    e-commerce platforms, professional portfolios, and custom web applications.
                    Browse our <strong>MERN stack projects</strong> below to see our expertise in action.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" aria-label="Show all projects">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" aria-label="Show e-commerce projects">E-commerce</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" aria-label="Show portfolio projects">Portfolios</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="animate__animated animate__fadeIn">
                          {visibleProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} altText={`Screenshot of ${project.title} project`} />
                          ))}
                        </Row>
                        <div className="text-center mt-4 color:sharp">
                          <Button variant="primary" onClick={() => setShowAll(!showAll)}>
                            {showAll ? "Show Less" : "Show More"}
                          </Button>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.filter(p => p.keywords.includes("ecommerce")).map((project, index) => (
                            <ProjectCard key={index} {...project} altText={`E-commerce project: ${project.title}`} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.filter(p => p.keywords.includes("portfolio")).map((project, index) => (
                            <ProjectCard key={index} {...project} altText={`Portfolio project: ${project.title}`} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background element" aria-hidden="true" />
    </section>
  );
};
