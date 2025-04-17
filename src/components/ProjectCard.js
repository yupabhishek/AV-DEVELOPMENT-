import { Col } from "react-bootstrap";

export function ProjectCard({ title, description, imgUrl, link, altText }) {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={altText || title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}