// src/components/ContactModal.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="ms-2">
        Contact Admin
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact the Graphic Designer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-4">Feel free to reach out for collaborations or inquiries</p>
          
          <div className="contact-info">
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">✉️</span>
              <a href="navroopgil3630@mail.com" className="text-decoration-none">navroopgil3630@mail.com</a>
            </div>
            
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">📞</span>
              <a href="+91 7717237914" className="text-decoration-none">+91 7717237914</a>
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
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;