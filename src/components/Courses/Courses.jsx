//Resolved few errors for authentication testing purposes

import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { courses } from "./CourseData"; // Central data file
import "./Courses.css";
import NewFullStackDevelopment from "../../assets/images/course-image/NewFullStackDevelopment.webp";
import backendImage from "../../assets/images/course-image/BackendDevelopment.png";

const CoursesHome = () => {
  // Filter only featured courses
  const featuredCourses = courses.filter(
    (course) => course.category === "featured"
  );

  return (
    <div className="courses-home">
      {/* Main Content */}
      <div className="container first-heading hero-main">
<<<<<<< HEAD
        <h1>Explore Our Expert-Led Courses</h1>
        <p>
          Learn new skills and advance your career with our high-quality
          courses.
        </p>
        <a href="#" className="cta-btn">
          Browse Courses
        </a>
=======
        <div className="hero-copy">
          <h1 className="hero-title">Explore Our Expert-Led Courses</h1>
          <p className="hero-subtitle">
            Learn new skills and advance your career with curated, hands-on programs.
          </p>
          <Link to="/Courses/ongoing" className="btn btn-primary btn-lg">Browse Courses</Link>
        </div>
>>>>>>> origin/main
      </div>

      {/* Promotion Banner */}
      <section className="promo-banner">
        <h2>🔥 Limited Time Offer: Get 30% Off on All Courses! 🔥</h2>
<<<<<<< HEAD
        <p>
          Hurry! Offer expires in <span id="countdown"></span>
        </p>
        <a href="#" className="btn-offer">
          Enroll Now
        </a>
=======
        <p>Hurry! Offer expires in <span id="countdown"></span></p>
        <Link to="/Courses" className="btn-offer">Enroll Now</Link>
>>>>>>> origin/main
      </section>

      {/* Navigation */}
      <div className="container mt-2">
<<<<<<< HEAD
        <div className="nav2">
          <Link to="/courses" className="tab">
            Featured
          </Link>
          <Link to="/courses/ongoing" className="tab">
            Ongoing
          </Link>
          <Link to="/courses/upcoming" className="tab">
            Upcoming
          </Link>
        </div>
=======
        <nav className="nav2">
          <Link to="/Courses" className="btn btn-outline-primary me-2">Courses</Link>
          <Link to="/Courses/upcoming" className="btn btn-outline-primary me-2">Upcoming Courses/Workshops</Link>
          <Link to="/Courses/ongoing" className="btn btn-outline-primary">Ongoing Courses</Link>
        </nav>
>>>>>>> origin/main
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
<<<<<<< HEAD
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                image={course.image}
                description={course.description}
                duration={course.duration}
                price={course.price}
              />
            ))}
=======
            <div className="course-card">
              <span className="badge bg-success mb-2">Beginner Friendly</span>
              <img
                className="course-image"
                src="https://user-images.githubusercontent.com/102843159/211679770-ba6259bb-e87b-4932-b59c-f283d2628d7b.jpg"
                alt="DSA + Java"
              />
              <h3>DSA + Java</h3>
              <p>Master Data Structures and Algorithms with Java.</p>
              <button className="btn btn-primary w-100">View Details</button>
            </div>

            <div className="course-card">
              <span className="badge bg-primary mb-2">Popular</span>
              <img
                className="course-image"
                src={NewFullStackDevelopment}
                alt="Full Stack Development"
              />
              <h3>Full-Stack Development</h3>
              <p>Learn frontend and backend development with modern tools.</p>
              <button className="btn btn-primary w-100">View Details</button>
            </div>

            <div className="course-card">
              <span className="badge bg-warning text-dark mb-2">New</span>
              <img
                className="course-image"
                src={backendImage}
                alt="Backend Development"
              />
              <h3>Backend Development</h3>
              <p>
                Build powerful server-side applications with Node.js, Django, and more.
              </p>
              <button className="btn btn-primary w-100">View Details</button>
            </div>
>>>>>>> origin/main
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesHome;
