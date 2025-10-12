
import { useParams } from "react-router-dom";
import { courses } from "./CourseData";
import "./CourseDetails.css"; // separate CSS for details

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => parseInt(c.id) === parseInt(id));

  if (!course) return <div className="container py-5"><h2>Course not found</h2></div>;

  return (
    <div className="course-details container py-5">
      <div className="row g-4">
        {/* Left side: image */}
        <div className="col-lg-5">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded shadow course-img"
          />
        </div>

        {/* Right side: content */}
        <div className="col-lg-7 d-flex flex-column justify-content-between">
          <div>
            <h1 className="mb-3">{course.title}</h1>
            {course.description && <p className="text-muted">{course.description}</p>}

            <div className="d-flex gap-3 my-3">
              {course.duration && (
                <span className="badge bg-primary p-2">
                  <i className="bi bi-clock"></i> {course.duration}
                </span>
              )}
              {course.price && (
                <span className="badge bg-success p-2">
                  <i className="bi bi-currency-rupee"></i> ₹{course.price}
                </span>
              )}
            </div>
          </div>

          <a href="#" className="btn btn-primary btn-lg mt-3 align-self-start">
            Enroll Now
          </a>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="course-tabs mt-5">
        <ul className="nav nav-tabs" id="courseTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="syllabus-tab"
              data-bs-toggle="tab"
              data-bs-target="#syllabus"
              type="button"
              role="tab"
            >
              Syllabus
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="instructor-tab"
              data-bs-toggle="tab"
              data-bs-target="#instructor"
              type="button"
              role="tab"
            >
              Instructor
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
            >
              Reviews
            </button>
          </li>
        </ul>

        <div className="tab-content p-4 border border-top-0 shadow-sm rounded-bottom">
          <div className="tab-pane fade show active" id="syllabus" role="tabpanel">
            <h5>Syllabus</h5>
            <ul>
              <li>Introduction to {course.title}</li>
              <li>Core concepts & best practices</li>
              <li>Hands-on projects</li>
              <li>Advanced topics and case studies</li>
            </ul>
          </div>
          <div className="tab-pane fade" id="instructor" role="tabpanel">
            <h5>Instructor</h5>
            <p><strong>John Doe</strong> - Expert in {course.title} with 10+ years of experience in industry and teaching.</p>
          </div>
          <div className="tab-pane fade" id="reviews" role="tabpanel">
            <h5>Reviews</h5>
            <div className="review">
              <p><strong>Jane:</strong> Excellent course! Highly recommended.</p>
            </div>
            <div className="review">
              <p><strong>Mark:</strong> Learned a lot, very practical examples.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
