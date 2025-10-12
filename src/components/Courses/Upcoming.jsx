import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { courses } from "./CourseData";
import "./Courses.css";

const Upcoming = () => {
  // Filter courses for upcoming category
  const upcomingCourses = courses.filter(course => course.category === "upcoming");

  return (
    <div className="upcoming-courses">
      <div className="container first-heading">
        <h1>Upcoming Courses/Workshops Section</h1>
      </div>

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

      {/* Courses Section */}
      <section className="section">
        <div className="course-container">
          {upcomingCourses.map(course => (
            <CourseCard
              key={course.id}
              id={course.id}  
              title={course.title}
              image={course.image}
              description={course.description || "Details not available"}
              duration={course.duration || "Start Date not specified"}
              price={course.price || ""}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Upcoming;
