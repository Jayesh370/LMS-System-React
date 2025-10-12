import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import CourseCard from "./CourseCard";
import { courses } from "./CourseData";
=======
>>>>>>> origin/main
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
>>>>>>> origin/main
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
