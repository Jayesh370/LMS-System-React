//Resolved few errors for authentication testing purposes

import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { courses } from "./CourseData"; // Central data file
import "./Courses.css";
import NewFullStackDevelopment from "/assets/images/course-image/NewFullStackDevelopment.webp";
import backendImage from "/assets/images/course-image/BackendDevelopment.png";

const CoursesHome = () => {
  // Filter only featured courses
  const featuredCourses = courses.filter(
    (course) => course.category === "featured"
  );

  return (
    <div className="courses-home">
      {/* Main Content */}
      <div className="container first-heading hero-main">
        <h1>Explore Our Expert-Led Courses</h1>
        <p>
          Learn new skills and advance your career with our high-quality
          courses.
        </p>
        <a href="#" className="cta-btn">
          Browse Courses
        </a>
      </div>

      {/* Promotion Banner */}
      <section className="promo-banner">
        <h2>🔥 Limited Time Offer: Get 30% Off on All Courses! 🔥</h2>
        <p>
          Hurry! Offer expires in <span id="countdown"></span>
        </p>
        <a href="#" className="btn-offer">
          Enroll Now
        </a>
      </section>

      {/* Navigation */}
      <div className="container mt-2">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesHome;
