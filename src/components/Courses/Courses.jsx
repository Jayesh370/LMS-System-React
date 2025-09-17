import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";


const CoursesHome = () => {
  return (
    <div className="courses-home">
      {/* Main Content */}
      <div className="container first-heading hero-main">
        <h1>Explore Our Expert-Led Courses</h1>
        <p>
          Learn new skills and advance your career with our high-quality courses.
        </p>
        <a href="#" className="cta-btn">Browse Courses</a>
      </div>

      {/* Promotion Banner */}
      <section className="promo-banner">
        <h2>🔥 Limited Time Offer: Get 30% Off on All Courses! 🔥</h2>
        <p>Hurry! Offer expires in <span id="countdown"></span></p>
        <a href="#" className="btn-offer">Enroll Now</a>
      </section>

      {/* Navigation */}
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

      {/* Featured Courses */}
      <div className="container mt-4 mb-5">
        <section className="section">
          <div className="featured-content">
            <h2>Learn New Skills Anytime, Anywhere</h2>
            <p>
              Explore our upcoming and ongoing courses designed to help you
              achieve your goals.
            </p>
          </div>
        </section>

        <section className="course-container">
          <h2>⭐ Featured Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <img
                src="https://user-images.githubusercontent.com/102843159/211679770-ba6259bb-e87b-4932-b59c-f283d2628d7b.jpg"
                alt="DSA + Java"
              />
              <h3>DSA + Java</h3>
              <p>Master Data Structures and Algorithms with Java.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="course-card">
              <img
                src={NewFullStackDevelopment}
                alt="Full Stack Development"
              />
              <h3>Full-Stack Development</h3>
              <p>Learn frontend and backend development with modern tools.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="course-card">
              <img
                src= {backendImage}
                alt="Backend Development"
              />
              <h3>Backend Development</h3>
              <p>
                Build powerful server-side applications with Node.js, Django, and more.
              </p>
              <a href="#" className="learn-more">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesHome;
