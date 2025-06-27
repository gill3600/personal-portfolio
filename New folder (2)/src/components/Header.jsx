import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';

function Header() {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom">
      <Container>
        {/* Brand/Logo with cool animation */}
      
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
         <img
    src="/gill.zip.png"
    alt="Gill Logo"
    width="60"
    height="60"
    className="d-inline-block align-top me-2"
  />
          <span className="logo-text me-2">GILL'S INNOVATIONS</span>
        </Navbar.Brand>
        
        {/* Mobile Toggle with custom icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom">
          <span className="navbar-toggler-icon-custom"></span>
          <span className="navbar-toggler-icon-custom"></span>
          <span className="navbar-toggler-icon-custom"></span>
        </Navbar.Toggle>
        
        {/* Navigation Links with hover effects */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom" activeClassName="active">
              <span className="nav-link-text">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="nav-link-custom" activeClassName="active">
              <span className="nav-link-text">Portfolio</span>
            </Nav.Link>
            <Nav.Link 
              onClick={handleShow} 
              className="nav-link-custom contact-link" 
              activeClassName="active"
            >
              <span className="nav-link-text">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Contact Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-dark">Contact the Graphic Designer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-4">Feel free to reach out for collaborations or inquiries</p>
          
          <div className="contact-info">
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">✉️</span>
              <a href=" " className="text-decoration-none">singhnavroop140@gmail.com</a>
            </div>
            
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">📞</span>
              <a href="" className="text-decoration-none">+91 7717237914</a>
            </div>
            
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">🔗</span>
              <a href="https://linkedin.com/in/designer" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                linkedin.com/in/designer
              </a>
            </div>
            
            <div className="d-flex align-items-center">
              <span className="me-3">📷</span>
                <a
                href="https://www.instagram.com/gill.3600_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <p>https://www.instagram.com/gill.3600_/</p>
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button 
            variant="secondary" 
            onClick={handleClose}
            className="btn-custom"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom CSS */}
      <style jsx>{`
        .navbar-custom {
          background-color: rgba(10, 25, 47, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(100, 255, 218, 0.1);
          padding: 1rem 0;
          transition: all 0.3s ease;
        }
        
        .logo-text {
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: 1px;
        }
        
        .navbar-toggler-custom {
          border: none;
          padding: 0.5rem;
          outline: none !important;
          box-shadow: none !important;
        }
        
        .navbar-toggler-icon-custom {
          display: block;
          width: 22px;
          height: 2px;
          background-color: #64ffda;
          margin: 4px 0;
          transition: all 0.3s ease;
        }
        
        .nav-link-custom {
          color: #ccd6f6 !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          margin: 0 0.25rem;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .nav-link-custom:hover {
          color: #64ffda !important;
        }
        
        .nav-link-custom .nav-link-text {
          position: relative;
        }
        
        .nav-link-custom .nav-link-text::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #64ffda;
          transition: width 0.3s ease;
        }
        
        .nav-link-custom:hover .nav-link-text::after {
          width: 100%;
        }
        
        .nav-link-custom.active .nav-link-text {
          color: #64ffda;
        }
        
        .nav-link-custom.active .nav-link-text::after {
          width: 100%;
        }
        
        .contact-link {
          background-color: rgba(100, 255, 218, 0.1);
          border-radius: 4px;
          margin-left: 0.5rem !important;
          border: 1px solid rgba(100, 255, 218, 0.3);
        }
        
        .contact-link:hover {
          background-color: rgba(100, 255, 218, 0.2);
        }
        
        .btn-custom {
          background-color: rgba(100, 255, 218, 0.1);
          color: #64ffda;
          border: 1px solid rgba(100, 255, 218, 0.3);
        }
        
        .btn-custom:hover {
          background-color: rgba(100, 255, 218, 0.2);
        }
        
        @media (max-width: 992px) {
          .navbar-collapse {
            padding: 1rem 0;
          }
          
          .nav-link-custom {
            margin: 0.5rem 0;
            padding: 0.5rem 0 !important;
          }
          
          .contact-link {
            margin: 0.5rem 0 0 0 !important;
            display: inline-block;
            width: fit-content;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;