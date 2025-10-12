import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/Final_Logo.png";
import "./Nav.css"
import { useAuth } from "../../context/AuthContext.jsx";
const Nav = () => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <header>
      <nav
        className="border navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom shadow-sm"
        style={{ height: "60px" , backgroundColor: "#f2f2f2"}}
      >
        <div className="container-fluid" >
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img
              className="logo-img"
              src={logo}
              alt="Company Logo"
              height="50"
            />
          </NavLink>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ProjectPortfolio">Project Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/placement">Placement</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About Us</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/FreeResources">Free Resources</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
              </li>
            </ul>

            {/* Auth Buttons */}
            {isAuthenticated() ? (
              <div className="d-flex align-items-center ms-3">
                <span className="navbar-text me-2">
                  Hi, {user?.name || user?.email}
                </span>
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <NavLink to="/login" className="btn btn-outline-primary ms-3">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-success ms-2">
                  Get Started
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ marginTop: "60px" }}></div>
    </header>
  );
};

export default Nav;
