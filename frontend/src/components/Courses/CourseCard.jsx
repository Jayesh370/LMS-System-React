import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css"; 

const CourseCard = ({ id, title, image, price, duration, description }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {duration && <p>Duration: {duration}</p>}
      {price && <p>₹{price}</p>}
      <Link to={`/courses/${id}`} className="learn-more">
        Learn More
      </Link>
    </div>
  );
};

export default CourseCard;
