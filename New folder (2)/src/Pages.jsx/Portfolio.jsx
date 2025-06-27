import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contect from './Contact';
import { useState } from 'react';

// Import your images
import img1 from "../assets/Images/24nov_8.jpg";
import img2 from "../assets/Images/buger gradient.jpg";
import img3 from "../assets/Images/business social media post.jpg";
import img4 from "../assets/Images/ice ceam.png";
import img5 from "../assets/Images/jeep.png";
import img6 from "../assets/Images/NIKE DUNK.jpg";
import img7 from "../assets/Images/s_16.jpg";
import img8 from "../assets/Images/untitled-8.jpg";
import img9 from "../assets/Images/11068330.png";
import img10 from "../assets/Images/Artboard 3.png";
import img11 from "../assets/Images/s_16.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Food Brand Identity",
      description: "Complete branding package for organic food startup",
      image: img1,
      category: "branding",
      client: "FreshBites Co.",
      date: "Nov 2023",
      tools: "Photoshop, Illustrator"
    },
    {
      id: 2,
      title: "Burger Restaurant Campaign",
      description: "Gradient style advertisement series for burger chain",
      image: img2,
      category: "digital",
      client: "Burger Haven",
      date: "Sep 2023",
      tools: "Photoshop, After Effects"
    },
    {
      id: 3,
      title: "Business Social Media",
      description: "LinkedIn campaign for corporate client",
      image: img3,
      category: "social",
      client: "Vertex Solutions",
      date: "Aug 2023",
      tools: "Photoshop, Figma"
    },
    {
      id: 4,
      title: "Ice Cream Packaging",
      description: "Packaging design for artisanal ice cream brand",
      image: img4,
      category: "packaging",
      client: "Sweet Scoops",
      date: "Jul 2023",
      tools: "Illustrator, InDesign"
    },
    {
      id: 5,
      title: "Jeep Advertisement",
      description: "Outdoor campaign for automotive brand",
      image: img5,
      category: "print",
      client: "Adventure Motors",
      date: "Jun 2023",
      tools: "Photoshop, Illustrator"
    },
    {
      id: 6,
      title: "Nike Dunk Series",
      description: "Social media campaign for sneaker release",
      image: img6,
      category: "digital",
      client: "Nike",
      date: "May 2023",
      tools: "Photoshop, After Effects"
    },
    {
      id: 7,
      title: "Fashion Brand Lookbook",
      description: "Minimalist lookbook design for clothing brand",
      image: img7,
      category: "print",
      client: "S_16 Studio",
      date: "Apr 2023",
      tools: "InDesign, Photoshop"
    },
    {
      id: 8,
      title: "Tech Startup Branding",
      description: "Visual identity for innovative tech company",
      image: img8,
      category: "branding",
      client: "Untitled Inc.",
      date: "Mar 2023",
      tools: "Illustrator, Figma"
    },
    {
      id: 9,
      title: "Abstract Art Series",
      description: "Digital art collection exploring color theory",
      image: img9,
      category: "digital",
      client: "Art Gallery",
      date: "Feb 2023",
      tools: "Procreate, Photoshop"
    },
    {
      id: 10,
      title: "Corporate Presentation",
      description: "Annual report design for financial firm",
      image: img10,
      category: "print",
      client: "Fortune 500",
      date: "Jan 2023",
      tools: "InDesign, Illustrator"
    },
    {
      id: 11,
      title: "Fashion Editorial",
      description: "Magazine spread for luxury brand",
      image: img11,
      category: "print",
      client: "Vogue",
      date: "Dec 2022",
      tools: "Photoshop, InDesign"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <style>
        {`
          /* Portfolio Page Styles */
          .portfolio-page {
            overflow-x: hidden;
          }

          .portfolio-hero {
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          }

          .portfolio-card {
            transition: all 0.3s ease;
            cursor: pointer;
            border-radius: 0.75rem !important;
            border: none;
          }

          .portfolio-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15) !important;
          }

          .portfolio-img-container {
            position: relative;
            overflow: hidden;
            border-radius: 0.75rem 0.75rem 0 0 !important;
          }

          .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            opacity: 0;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .portfolio-card:hover .portfolio-overlay {
            opacity: 1;
          }

          .portfolio-card:hover .portfolio-img-container img {
            transform: scale(1.05);
          }

          /* Portfolio Modal */
          .portfolio-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1050;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            backdrop-filter: blur(5px);
          }

          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: -1;
          }

          .modal-content {
            max-width: 1200px;
            width: 95%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            border: none !important;
          }

          .object-fit-cover {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }

          .transition {
            transition: all 0.5s ease;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .portfolio-card {
              margin-bottom: 1.5rem;
            }
            
            .modal-content {
              width: 100%;
              border-radius: 0 !important;
            }
          }

          /* Additional Enhancements */
          .nav-pills .nav-link.active {
            background-color: #0d6efd;
            color: white;
          }

          .btn-outline-primary:hover {
            color: white;
          }

          .portfolio-hero h1 {
            font-weight: 800;
            letter-spacing: -0.05em;
          }

          .portfolio-hero .lead {
            font-size: 1.25rem;
          }

          .portfolio-card .card-title {
            font-weight: 600;
          }

          .portfolio-modal .modal-content {
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <Container fluid className="portfolio-page px-0">
        {/* Portfolio Hero Section */}
       <section className="portfolio-hero position-relative overflow-hidden" 
         style={{
           backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '90vh'
         }}>
  
  {/* Dark overlay for better text contrast */}
  <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-60"></div>
  
  {/* Gradient overlay for depth */}
  <div className="position-absolute top-0 start-0 end-0 bottom-0" 
       style={{
         background: 'linear-gradient(135deg, rgba(13,110,253,0.3) 0%, rgba(255,255,255,0) 60%)'
       }}>
  </div>
  
  <Container className="position-relative h-100">
    <Row className="align-items-center h-100 py-8">
      <Col lg={7} className="text-white">
        <div className="mb-4">
          <span className="badge bg-primary bg-opacity-25 text-white border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
            Professional Graphic Designer
          </span>
        </div>
        
        <h1 className="display-3 fw-bold mb-4">
          <span className="text-white">Creating </span>
          <span className="text-primary">Impactful</span>
          <br />
          <span className="text-white">Visual Experiences</span>
        </h1>
        
        <p className="lead mb-5" style={{fontSize: '1.35rem', maxWidth: '600px'}}>
          Transforming brands through strategic design solutions that captivate audiences and drive results.
        </p>
        
        <div className="d-flex flex-wrap gap-3">
          {/* <Button 
            variant="primary" 
            size="lg" 
            className="px-4 py-3 rounded-1 fw-semibold shadow"
          >
            <i className="fas fa-calendar-check me-2"></i>Book a Consultation
          </Button> */}
          {/* <Button 
            variant="outline-light" 
            size="lg" 
            className="px-4 py-3 rounded-1 fw-semibold"
          >
            <i className="fas fa-play-circle me-2"></i>View Showreel
          </Button> */}
        </div>
        
        <div className="mt-5 pt-3 d-flex align-items-center">
          <div className="d-flex me-4">
            {/* {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-circle border border-3 border-white" 
                   style={{
                     width: '40px',
                     height: '40px',
                     marginLeft: i > 1 ? '-15px' : '0',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }}>
              </div>
            ))} */}
          </div>
          <div>
            {/* <p className="mb-0 text-white-50">Trusted by leading brands</p> */}
            {/* <div className="d-flex align-items-center">
              <i className="fas fa-star text-warning me-1"></i>
              <span className="text-white">5.0 (120+ Reviews)</span>
            </div> */}
          </div>
        </div>
      </Col>
      
      <Col lg={5} className="position-relative">
        {/* Floating portfolio preview card */}
        <div className="position-absolute top-50 start-0 translate-middle-y d-none d-lg-block" 
             style={{
               width: '120%',
               zIndex: 1,
               right: '-20%'
             }}>
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
            <div className="bg-dark d-flex align-items-center justify-content-center">
              <div className="text-center p-5">
                <i className="fas fa-images fa-4x text-primary mb-4"></i>
                <h3 className="text-white mb-3">Portfolio Preview</h3>
                {/* <Button 
                  variant="outline-light" 
                  size="sm" 
                  className="rounded-pill px-4"
                >
                  Explore My Work
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  
  {/* Scrolling indicator */}
  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
    <a href="#portfolio" className="text-white text-decoration-none">
      <div className="d-flex flex-column align-items-center">
        <span className="mb-2">Explore Work</span>
        <i className="fas fa-chevron-down animate-bounce"></i>
      </div>
    </a>
  </div>
</section>

        {/* Portfolio Filter & Grid */}
        <section id="portfolio" className="py-5 bg-white">
          <Container className="py-5">
            <Row className="mb-5">
              <Col className="text-center">
                <h2 className="fw-bold mb-3">My Design Projects</h2>
                <p className="text-muted mb-4">Filter by category to explore specific work</p>
                <Nav variant="pills" className="justify-content-center flex-wrap">
                  <Nav.Item>
                    <Nav.Link 
                      active={activeFilter === 'all'} 
                      onClick={() => setActiveFilter('all')}
                      className="mx-1 mb-2 rounded-pill px-3"
                    >
                      All Work
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeFilter === 'branding'} 
                      onClick={() => setActiveFilter('branding')}
                      className="mx-1 mb-2 rounded-pill px-3"
                    >
                      Branding
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeFilter === 'digital'} 
                      onClick={() => setActiveFilter('digital')}
                      className="mx-1 mb-2 rounded-pill px-3"
                    >
                      Digital
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeFilter === 'social'} 
                      onClick={() => setActiveFilter('social')}
                      className="mx-1 mb-2 rounded-pill px-3"
                    >
                      Social Media
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeFilter === 'packaging'} 
                      onClick={() => setActiveFilter('packaging')}
                      className="mx-1 mb-2 rounded-pill px-3"
                    >
                      Packaging
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeFilter === 'print'} 
                      onClick={() => setActiveFilter('print')}
                      className="mx-1 mb-2 rounded-pill px-3"
                    >
                      Print
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <Row className="g-4">
              {filteredItems.map((item) => (
                <Col key={item.id} xl={3} lg={4} md={6}>
                  <Card 
                    className="border-0 shadow-sm h-100 portfolio-card overflow-hidden"
                    onClick={() => setSelectedProject(item)}
                  >
                    <div className="portfolio-img-container ratio ratio-4x3 position-relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="object-fit-cover transition"
                      />
                      <div className="portfolio-overlay d-flex align-items-center justify-content-center transition">
                        <div className="text-center p-3">
                          <span className="badge bg-primary mb-2">{item.category.toUpperCase()}</span>
                          <h5 className="text-white mb-0">{item.title}</h5>
                        </div>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-auto">
                        <small className="text-primary fw-bold d-block mb-1">{item.client}</small>
                        <Card.Title className="mb-2">{item.title}</Card.Title>
                        <Card.Text className="text-muted small">{item.description}</Card.Text>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <small className="text-muted">{item.date}</small>
                        <Button variant="outline-primary" size="sm" className="rounded-pill px-3">
                          View
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="portfolio-modal">
            <div className="modal-backdrop" onClick={() => setSelectedProject(null)}></div>
            <div className="modal-content bg-white p-4 p-lg-5 rounded-3 shadow-lg">
              <button 
                className="btn-close position-absolute top-0 end-0 m-3" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              ></button>
              
              <Row className="g-4">
                <Col lg={7}>
                  <div className="ratio ratio-16x9 mb-4 rounded-3 overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="object-fit-cover"
                    />
                  </div>
                  <Row className="g-3">
                    {[img1, img2, img3, img9, img10, img11].slice(0, 3).map((img, i) => (
                      <Col key={i} xs={4}>
                        <div className="ratio ratio-1x1 rounded-2 overflow-hidden">
                          <img 
                            src={img} 
                            alt={`Preview ${i+1}`}
                            className="object-fit-cover"
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={5}>
                  <div className="d-flex align-items-start mb-4">
                    <div>
                      <h2 className="fw-bold mb-3">{selectedProject.title}</h2>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-primary">{selectedProject.category.toUpperCase()}</span>
                        <span className="badge bg-secondary">CLIENT: {selectedProject.client}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="lead mb-4">{selectedProject.description}</p>
                  
                  <div className="mb-4 p-3 bg-light rounded-3">
                    <h5 className="fw-bold mb-3">Project Details</h5>
                    <Row>
                      <Col md={6}>
                        <ul className="list-unstyled">
                          <li className="mb-2"><strong>Category:</strong> {selectedProject.category}</li>
                          <li className="mb-2"><strong>Client:</strong> {selectedProject.client}</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <ul className="list-unstyled">
                          <li className="mb-2"><strong>Date:</strong> {selectedProject.date}</li>
                          <li className="mb-2"><strong>Tools:</strong> {selectedProject.tools}</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-3">
                    <Button variant="primary" className="flex-grow-1">
                      <i className="fas fa-globe me-2"></i>Visit Website
                    </Button>
                    <Button variant="outline-primary" className="flex-grow-1">
                      <i className="fas fa-file-alt me-2"></i>Full Case Study
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}

        {/* Call to Action */}
       <section className="py-6 position-relative overflow-hidden" 
         style={{
           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
         }}>
  {/* Subtle texture overlay */}
  <div className="position-absolute top-0 end-0 bottom-0 start-0" 
       style={{
         backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)',
         zIndex: 0
       }}>
  </div>
  
  <Container className="py-5 position-relative" style={{zIndex: 1}}>
    <Row className="justify-content-center text-center">
      <Col lg={8} xl={7}>
        <h2 className="fw-bold mb-4 display-5 text-white">
          Design Philosophy & Principles
        </h2>
        
        {/* Quote 1 */}
        <div className="mb-5 p-4 bg-dark bg-opacity-25 rounded-4 border-start border-4 border-primary">
          <blockquote className="mb-0">
            <p className="lead text-light fst-italic" style={{fontSize: '1.25rem'}}>
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <footer className="text-white-50 mt-2">— Steve Jobs</footer>
          </blockquote>
        </div>
        
        {/* Quote 2 */}
        <div className="mb-5 p-4 bg-dark bg-opacity-25 rounded-4 border-start border-4 border-primary">
          <blockquote className="mb-0">
            <p className="lead text-light fst-italic" style={{fontSize: '1.25rem'}}>
              "The details are not the details. They make the design."
            </p>
            <footer className="text-white-50 mt-2">— Charles Eames</footer>
          </blockquote>
        </div>
        
        {/* Quote 3 */}
        <div className="mb-5 p-4 bg-dark bg-opacity-25 rounded-4 border-start border-4 border-primary">
          <blockquote className="mb-0">
            <p className="lead text-light fst-italic" style={{fontSize: '1.25rem'}}>
              "Good design is obvious. Great design is transparent."
            </p>
            <footer className="text-white-50 mt-2">— Joe Sparano</footer>
          </blockquote>
        </div>
        
        {/* Personal statement */}
        <div className="mt-5 p-4 bg-primary bg-opacity-10 rounded-4 border border-primary border-opacity-25">
          <h4 className="text-white mb-3">My Approach</h4>
          <p className="text-light mb-0">
            I believe in creating designs that not only look beautiful but also solve real problems. 
            Every project begins with understanding the core objectives and ends with a solution 
            that exceeds expectations while staying true to the brand's essence.
          </p>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-4 pt-2">
          <p className="text-white-50 mb-3">Trusted by innovative brands worldwide</p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            {['Nike', 'Vogue', 'Fortune 500', 'Art Gallery'].map((brand, i) => (
              <div key={i} className="text-white-50" style={{opacity: 0.8}}>
                <i className="fas fa-check-circle text-success me-2"></i>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  </Container>

  {/* Floating design elements */}
  <div className="position-absolute bottom-0 end-0 opacity-10" style={{zIndex: 0}}>
    <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0d6efd" d="M45,-78.9C58.2,-72.2,68.8,-59.5,75.5,-45.1C82.2,-30.7,85,-14.7,83.3,0.6C81.6,15.9,75.5,31.8,64.5,43.6C53.5,55.4,37.7,63.1,20.9,70.8C4.1,78.5,-13.7,86.2,-28.6,82.1C-43.5,78,-55.5,62.1,-65.7,46.3C-75.9,30.5,-84.3,14.7,-85.8,-1.6C-87.3,-17.9,-81.9,-35.8,-70.9,-49.5C-59.9,-63.2,-43.3,-72.7,-27.9,-78.5C-12.5,-84.3,1.7,-86.4,15.8,-83.3C29.9,-80.2,43.9,-71.9,45,-78.9Z" transform="translate(100 100)" />
    </svg>
  </div>
</section>
      </Container>
      <Contect />
    </>

  );
};

export default Portfolio;