import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/assets/Final_Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Location Section */}
        <div className="footer-logo">
          <div className="logo">
            <img src={logo} alt="CodingSavvy Logo" />
          </div>
          <div className="location">
            <p>
              <strong>Address:</strong>
              <br />
              123 Main Street, City, Warje, Pune, India
            </p>
            <button
              className="btn view-map"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/@18.4699278,73.8301434,3698m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              View on Map
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-links">
          {/* Explore Section */}
          <div className="explore explore-footer">
            <h3 className="footer-links-name">Explore</h3>
            <ul>
              <li><a href="placement.html">Placements</a></li>
              <li><a href="resource.html">Free Resource</a></li>
              <li><a href="html/blog-html/blog.html">Blogs</a></li>
              <li><a href="courses-home.html">Our Courses</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="quick-link quick-link-footer">
            <h3 className="footer-links-name">Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="contactUs.html">Contact Us</a></li>
              <li><a href="aboutUs.html">About Us</a></li>
              <li><a href="contactUs.html">Face an Issue</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="follow-us follow-us-footer">
            <h3 className="footer-links-name">Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon facebook">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon linkedin">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon twitter">
                  <FaTwitter /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>Simply enter your email below:</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button className="btn">Subscribe</button>
          </div>
          <small className="subscribe-agreement">
            By subscribing, you agree to receive emails from us and acknowledge
            our Privacy Policy.
          </small>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; 2024 CodingSavvy, Inc. All rights reserved.</p>
        <div className="policy-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
