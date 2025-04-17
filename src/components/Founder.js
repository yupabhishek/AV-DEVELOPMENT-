import React from 'react';
import { Github, Instagram, Facebook, Linkedin } from 'react-bootstrap-icons';
import viraPic from "../assets/virapic.jpg";
import './Founder.css';

export function Founder() {
  const founders = [
    {
      name: "Abhishek Sharma",
      position: "Founder & CEO",
      description: "I'm a MERN stack developer specializing in building web applications using MongoDB, Express.js, React, and Node.js.",
      photo: "https://i.postimg.cc/dt34JYZF/20250410-021944.jpg",
      social: {
        github: "https://github.com/yupabhishek",
        instagram: "https://instagram.com/yup.abhishek",
        facebook: "https://facebook.com/yup.abhishek",
        linkedin: "https://linkedin.com/in/yupabhishek"
      }
    },
    {
      name: "Viranshu Singh",
      position: "Founder & CTO",
      description: "Web developer & MERN STACK developer specializing in React, JavaScript, Node.js, and MongoDB.",
      photo: viraPic,
      social: {
        github: "https://github.com/Ankit5575",
        instagram: "https://www.instagram.com/viranshusingh055/",
        facebook: "https://facebook.com/",
        linkedin: "https://www.linkedin.com/in/ankit-singh-80aa93318/"
      }
    }
  ];

  return (
    <section id='founder' className="founders-root">
      <h2 className="founders-heading">Our Founders</h2>
      <div className="founders-grid">
        {founders.map((person, index) => (
          <div key={index} className="founder-profile-card">
            <div className="founder-image-wrapper">
              <img 
                src={person.photo}
                alt={`${person.name}`}
                className="founder-portrait"
              />
              <div className="founder-bio-overlay">
                <p>{person.description}</p>
              </div>
            </div>
            <div className="founder-details">
              <h3 className="founder-name">{person.name}</h3>
              <p className="founder-role">{person.position}</p>
              <div className="founder-socials">
                <a href={person.social.github} target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
                <a href={person.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook size={24} />
                </a>
                <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}