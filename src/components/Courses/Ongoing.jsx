import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";

import PlacementPreparation from "../../assets/images/course-image/PlacementPreparation.png"
import FullStackDevelopment from "../../assets/images/course-image/FullStackDevelopment.png"
import JavaFundamentals from "../../assets/images/course-image/JavaFundamentals.png"
import MobileAppDevelopment from "../../assets/images/course-image/MobileAppDevelopment.png"

const Ongoing = () => {
  return (
    <div className="ongoing-courses">
      <div className="container first-heading">
        <h1>Ongoing Courses</h1>
      </div>

      <div className="container mt-2">
      <nav className="nav2">
        <button>
          <Link to="/Courses">Courses</Link>
        </button>
        <button>
          <Link to="/Courses/upcoming">Upcoming Courses/Workshops</Link>
        </button>
        <button>
          <Link to="/Courses/ongoing">Ongoing Courses</Link>
        </button>
      </nav>
      </div>

      <section className="section">
        <div className="course-container mb-5">
          <div className="course-card">
            <h3>JAVA Fundamentals</h3>
            <img src={JavaFundamentals} alt="JAVA Fundamentals" />
            <p>Duration</p>
            <p>₹999</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="course-card">
            <h3>Placement Preparation in Java</h3>
            <img src={PlacementPreparation} alt="Placement Preparation" />
            <p>Duration</p>
            <p>₹4999</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="course-card">
            <h3>Full Stack Web Development</h3>
            <img src={FullStackDevelopment} alt="Full Stack Development" />
            <p>Duration</p>
            <p>₹7999</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="course-card">
            <h3>Mobile App Development</h3>
            <img src={MobileAppDevelopment} 
            alt="Mobile App Development" />
            <p>Duration</p>
            <p>₹4999</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ongoing;
