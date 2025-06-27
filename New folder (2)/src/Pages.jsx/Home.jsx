import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contect from "./Contact";
import img1 from "../assets/Images/24nov_8.jpg";
import img2 from "../assets/Images/buger gradient.jpg";
// import img3 from "../assets/Images/business social media post.jpg";
import img4 from "../assets/Images/ice ceam.png";
import img5 from "../assets/Images/jeep.png";
import img6 from "../assets/Images/NIKE DUNK.jpg";
import img7 from "../assets/Images/58.jpg";
import img8 from "../assets/Images/11068330.png";
import img9 from "../assets/Images/Artboard 3.png";
import img10 from "../assets/Images/s_16.jpg";
import img11 from  "../../public/Artboard 3.png"

function Home() {
  const navigate = useNavigate();
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete branding package for a food startup",
      image: img1,
      category: "Branding",
    },
    {
      id: 2,
      title: "Restaurant Promotion",
      description: "Gradient style burger advertisement design",
      image: img2,
      category: "Digital Marketing",
    },
    // {
    //   id: 3,
    //   title: "Social Media Campaign",
    //   description: "Business promotional post for LinkedIn",
    //   image: img3,
    //   category: "Social Media",
    // },
    {
      id: 4,
      title: "Ice Cream Packaging",
      description: "Vibrant packaging design for artisanal ice cream",
      image: img4,
      category: "Packaging Design",
    },
    {
      id: 5,
      title: "Automotive Advertisement",
      description: "Jeep promotional campaign for outdoor enthusiasts",
      image: img5,
      category: "Print Design",
    },
    {
      id: 6,
      title: "Sneaker Promotion",
      description: "Nike Dunk series social media campaign",
      image: img6,
      category: "Digital Marketing",
    },
    {
      id: 7,
      title: "Editorial Design",
      description: "Magazine layout and typography design",
      image: img7,
      category: "Print Design",
    },
    {
      id: 8,
      title: "Digital Illustration",
      description: "Custom artwork for brand storytelling",
      image: img8,
      category: "Illustration",
    },
    {
      id: 9,
      title: "Event Promotion",
      description: "Visual identity for corporate events",
      image: img9,
      category: "Marketing",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Gill's designs transformed our brand identity completely. The attention to detail is remarkable!",
      author: "Sarah Johnson, Food Startup CEO",
      image: img10,
    },
    {
      id: 2,
      text: "Working with Gill was a pleasure. The designs exceeded our expectations and delivered results.",
      author: "Michael Chen, Marketing Director",
      image: img7,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-overlay"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="mb-5 mb-lg-0 text-white py-5">
              <h1 className="display-3 fw-bold mb-4">
                I'm <span className="text-primary">NAVROOP</span>
              </h1>

              <p className="lead mb-4">
                Visual storyteller creating designs that communicate and
                captivate.
              </p>
              <div className="d-flex gap-4 mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-4 py-3 rounded-pill"
                  onClick={() => {
                    window.open("https://www.behance.net/roopgill", "_blank");
                    window.scrollTo(0, 0);
                  }}
                >
                  View Portfolio
                </Button>

              </div>
            </Col>
            <Col lg={6} className="position-relative">
              <div className="hero-image-container">
                <div className="hero-main-image ratio ratio-1x1 rounded-3 overflow-hidden shadow-lg">
                  <img
                    src={img11}
                    alt="Gill - Professional Designer"
                    className="object-fit-cover"
                    style={{ objectPosition: "top" }}
                  />
                </div>
                <div className="hero-decoration-image-1">
                  <img
                    src={img2}
                    alt="Decoration"
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>
               
                <div className="hero-decoration-image-3">
                  <img
                    src={img4}
                    alt="Decoration"
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Preview */}
      <section className="py-5 bg-white">
        <Container className="py-5">
          <Row className="mb-5">
            <Col>
              <h2 className="fw-bold display-5 mb-3">Selected Works</h2>
              <p className="text-muted">
                A visual journey through my design projects
              </p>
              <div
                className="border-bottom border-primary border-3"
                style={{ width: "80px" }}
              ></div>
            </Col>
          </Row>
          <Row className="g-4">
            {portfolioItems.map((item) => (
              <Col lg={4} md={6} key={item.id}>
                <div className="portfolio-card overflow-hidden rounded-3 position-relative">
                  <div className="portfolio-image-container ratio ratio-4x3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-fit-cover transition-scale"
                    />
                  </div>
                  <div className="portfolio-overlay d-flex flex-column justify-content-end p-4">
                    <small className="text-white bg-primary rounded-pill px-3 py-1 d-inline-block mb-2 align-self-start">
                      {item.category}
                    </small>
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-white mb-0">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-3 rounded-pill"
                onClick={() => {
                  navigate("/portfolio");
                  window.scrollTo(0, 0); // Scroll to top immediately after navigation
                }}
              >
                View Portfolio
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <Container className="py-5">
          <Row className="mb-5">
            <Col>
              <h2 className="fw-bold display-5 mb-3">Client Voices</h2>
              <p className="text-muted">
                Experiences from collaborative projects
              </p>
              <div
                className="border-bottom border-primary border-3"
                style={{ width: "80px" }}
              ></div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Carousel
                indicators={false}
                controls={false}
                className="testimonial-carousel"
              >
                {testimonials.map((testimonial) => (
                  <Carousel.Item key={testimonial.id} className="p-4">
                    <div className="testimonial-content bg-white p-5 rounded-4 position-relative shadow-sm">
                      <div className="row align-items-center">
                        <div className="col-md-3 text-center mb-4 mb-md-0">
                          <div
                            className="ratio ratio-1x1"
                            style={{ width: "120px", margin: "0 auto" }}
                          >
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="object-fit-cover rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <blockquote className="blockquote mb-0">
                            <p className="lead mb-4 position-relative">
                              "{testimonial.text}"
                            </p>
                            <footer className="blockquote-footer mt-3 fw-bold">
                              {testimonial.author}
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add your custom CSS in a separate file or style tag */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%);
          color: white;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(${img7}) no-repeat center center;
          background-size: cover;
          opacity: 0.1;
          z-index: 1;
        }

        .hero-image-container {
          position: relative;
          height: 100%;
          min-height: 500px;
        }

        .hero-main-image {
          position: relative;
          z-index: 2;
          border: 8px solid rgba(255, 255, 255, 0.1);
        }

        .hero-decoration-image-1 {
          position: absolute;
          width: 120px;
          bottom: -20px;
          left: -20px;
          z-index: 1;
          transform: rotate(-10deg);
        }

        .hero-decoration-image-2 {
          position: absolute;
          width: 150px;
          top: -20px;
          right: -20px;
          z-index: 3;
          transform: rotate(5deg);
        }

        .hero-decoration-image-3 {
          position: absolute;
          width: 100px;
          bottom: 50px;
          right: 50px;
          z-index: 1;
          transform: rotate(15deg);
        }

        .portfolio-card {
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .portfolio-image-container {
          overflow: hidden;
        }

        .portfolio-image-container img {
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover .portfolio-image-container img {
          transform: scale(1.05);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .transition-scale {
          transition: transform 0.5s ease;
        }

        .testimonial-carousel .carousel-item {
          padding: 10px;
        }
      `}</style>
      <Contect />
    </div>

  );
}

export default Home;
