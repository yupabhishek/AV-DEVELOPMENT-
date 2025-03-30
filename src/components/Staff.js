// Staff.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Github, Instagram, Facebook, Linkedin } from 'react-bootstrap-icons';
import viraPic from "../assets/virapic.jpg";

// import viraPic from '../assets/virapic.jpg'; // Uncomment and adjust path if using local image

export const Staff = () => {
  const founders = [
    {
      name: "Abhishek Sharma",
      position: "Founder & CEO",
      description: "I'a MERM stack developer specializes in building web applications using: MongoDB (Database)  NoSQL database for data storage. Express.js (Backend)  Web framework for handling server logic. React (Frontend)  JavaScript library for building user interfaces. Meteor.js (Full-stack framework)  Provides real-time updates and seamless client-server integration.",
      photo: "https://scontent.fdel77-1.fna.fbcdn.net/v/t39.30808-6/474056852_1160830588735322_3124388545990159160_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CxMOtbwCXC8Q7kNvgGAm0cV&_nc_oc=AdnwgHubJ5bGTrG0YENM5Y_HYNx3ROvWERAmJody18wcjyC6D4tgb5N6HuuUslYd-Kw&_nc_zt=23&_nc_ht=scontent.fdel77-1.fna&_nc_gid=hdq68r84P525NC5SKN7byQ&oh=00_AYEKzkRXsqBNFWafcobELTVhlCvb6PGz2HmyEYDhhytVYg&oe=67EF68B3",
      social: {
        github: "https://github.com/yupabhishek",
        instagram: "https://instagram.com/yup.abhishek",
        facebook: "https://facebook.com/yup.abhishek",
        linkedin: "https://linkedin.com/in/yupabhishek"
      }
    },
    {
      name: "Jane Smith",
      position: "Founder & CTO",
      description: "Web developer & MERN STACK developer || React js || Javascript || Tailwind || Express .js || Node js || TypeScript ||Mongo db|| Redux || RestfulAPI || Contact- ankitroy5575@gmail.com",
      photo: viraPic, // Replace with viraPic if imported
      social: {
        github: "https://github.com/Ankit5575",
        instagram: "https://www.instagram.com/viranshusingh055/",
        facebook: "https://facebook.com/",
        linkedin: "https://www.linkedin.com/in/ankit-singh-80aa93318/"
      }
    }
  ];

  return (
    <section className="staff-section py-5">
      <Container>
        <h2 className="text-center mb-5">Our Founders</h2>
        <Row className="justify-content-center">
          {founders.map((founder, index) => (
            <Col md={6} lg={5} key={index} className="mb-4">
              <Card className="h-100 shadow-sm staff-card">
                <div className="image-container">
                  <Card.Img 
                    variant="top" 
                    src={founder.photo}
                    alt={`${founder.name}'s photo`}
                    className="staff-photo"
                  />
                  <div className="staff-description">{founder.description}</div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{founder.name}</Card.Title>
                  <Card.Text>{founder.position}</Card.Text>
                  <div className="social-links mt-3">
                    <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <Github size={24} />
                    </a>
                    <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <Instagram size={24} />
                    </a>
                    <a href={founder.social.facebook} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <Facebook size={24} />
                    </a>
                    <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};