import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";

const Upcoming = () => {
  return (
    <div className="upcoming-courses">
      <div className="container first-heading">
        <h1>Upcoming Courses/Workshops Section</h1>
      </div>

      <div className="container mt-2">
      <nav className="nav2">
        <button>
          <Link to="/courses">Courses</Link>
        </button>
        <button>
          <Link to="/courses/upcoming">Upcoming Courses/Workshops</Link>
        </button>
        <button>
          <Link to="/courses/ongoing">Ongoing Courses</Link>
        </button>
      </nav>
      </div>

      <section className="section">
        <div className="course-container">
          <div className="course-card">
            <h3>Full-Stack Web Development</h3>
            <img src="images/course-image/full stack development.png" alt="Full Stack" />
            <p>Start Date</p>
            <p>Add details</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="course-card">
            <h3>Modern JavaScript Frameworks</h3>
            <img src="images/course-image/javascripts  frameworks.png" alt="JS Frameworks" />
            <p>Start Date</p>
            <p>Timing</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="course-card">
            <h3>DevOps for Web Developer</h3>
            <img src="images/course-image/devops.png" alt="DevOps" />
            <p>Start Date</p>
            <p>Add details</p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          {/* ... continue same for Web Security, Database Design, etc. */}
        </div>
      </section>
    </div>
  );
};

export default Upcoming;
