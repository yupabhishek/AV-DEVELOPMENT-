import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import animationData from "../assets/con.json";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Lottie from "lottie-react";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import { FaWhatsapp } from "react-icons/fa";
import what from "../assets/what.png"
// import "../styles/Banner.css"; // Import CSS for styling

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to AV DEVELOPMENT</span>
                  <h1>
                    {`Code Your Vision`}{" "}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    At AV DEVELOPMENT, we enhance your digital presence with logo digitization, website development, and social media management. 
                    From stunning logos to high-performance websites, we provide tailored solutions to elevate your brand online. Let’s make your business stand out! 🚀
                  </p>
                  <button onClick={() => (window.location.href = "#connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Lottie animationData={animationData} style={{ width: 400, height: 400 }} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9718659236" // Replace with your WhatsApp number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
         <img src={what} />
      </a>
    </section>
  );
};
