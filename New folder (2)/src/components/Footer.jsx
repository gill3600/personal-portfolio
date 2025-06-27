import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-5 pb-4 border-top" style={{ backgroundColor: "#0a192f", color: "#ccd6f6" }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold mb-3" style={{ color: "#64ffda" }}>
              NAVROOP GILL
            </h4>
            <p className="small mb-3">
              "I'm a graphic designer who believes in simplicity, clarity, and bold visual impact."
            </p>
            <span className="text-muted">DESIGNER & CREATIVE DIRECTOR</span>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ color: "#64ffda" }}>
              Navigation
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/LikedRecipe" className="text-decoration-none footer-link">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Content" className="text-decoration-none footer-link">
                  Content
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none footer-link">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ color: "#64ffda" }}>
              Contact
            </h6>
            <address className="small">
              <p className="mb-2">Punjab</p>
              <p className="mb-2">singhnavroop140@gmail.com</p>
              <p className="mb-2">9864774974</p>
            </address>
          </div>

          {/* Social Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3" style={{ color: "#64ffda" }}>
              Connect
            </h6>
            <div className="d-flex gap-3 fs-5">
              <a
                href="https://www.instagram.com/gill.3600_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-0 mb-4" style={{ borderColor: "#233554" }} />

        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} <strong style={{ color: "#64ffda" }}>NAVROOP GILL</strong>. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end">
              <a href="#" className="small footer-link">Privacy Policy</a>
              <a href="#" className="small footer-link">Terms</a>
              <a href="#" className="small footer-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your CSS file or style tag */}
      <style>{`
        .footer-link {
          color: #ccd6f6;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #64ffda;
          text-decoration: none;
        }
        .social-icon {
          color: #8892b0;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-icon:hover {
          color: #64ffda;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}

export default Footer;