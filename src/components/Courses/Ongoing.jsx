import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import CourseCard from "./CourseCard";
import { courses } from "./CourseData";
import "./Courses.css";
=======
import "./Courses.css";

import PlacementPreparation from "../../assets/images/course-image/PlacementPreparation.png"
import FullStackDevelopment from "../../assets/images/course-image/FullStackDevelopment.png"
import JavaFundamentals from "../../assets/images/course-image/JavaFundamentals.png"
import MobileAppDevelopment from "../../assets/images/course-image/MobileAppDevelopment.png"
>>>>>>> origin/main

const Ongoing = () => {
  // Filter courses for ongoing category
  const ongoingCourses = courses.filter(course => course.category === "ongoing");

  return (
    <div className="ongoing-courses">
      <div className="container first-heading">
        <h1>Ongoing Courses</h1>
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
        <div className="course-container mb-5">
          {ongoingCourses.map(course => (
            <CourseCard
              key={course.id}
              id={course.id}  
              title={course.title}
              image={course.image}
              description={course.description}
              duration={course.duration || "Duration not specified"}
              price={course.price || "Price not specified"}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ongoing;
