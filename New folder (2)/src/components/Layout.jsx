import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For Bootstrap icons

function Layout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header />
      
      {/* Floating Contact Button */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <Button 
          variant="primary" 
          onClick={() => setShowModal(true)}
          style={{
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem' }}></i>
        </Button>
      </div>

      <Outlet />
      <Footer />

      {/* Contact Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <h5>Have questions or want to work together?</h5>
            <p className="text-muted">Reach out through any of these channels:</p>
          </div>
          
          <div className="contact-options">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-3" style={{ fontSize: '1.2rem' }}></i>
              <a href="mailto:contact@example.com" className="text-decoration-none">
                contact@example.com
              </a>
            </div>
            
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-telephone me-3" style={{ fontSize: '1.2rem' }}></i>
              <a href="tel:+1234567890" className="text-decoration-none">
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-linkedin me-3" style={{ fontSize: '1.2rem' }}></i>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                linkedin.com/yourprofile
              </a>
            </div>
            
            <div className="d-flex align-items-center">
              <i className="bi bi-instagram me-3" style={{ fontSize: '1.2rem' }}></i>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                @yourhandle
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Layout;