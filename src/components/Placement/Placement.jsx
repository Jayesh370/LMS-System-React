import React from "react";
import "./Placement.css"

export default function Placement() {
  return (
    <div>
      {/* Header Section with Carousel */}
      <header className="bg-white text-black text-center py-5 container">
        <h1 className="page" data-aos="fade-down" data-aos-offset="200">
          Welcome to our placement Page
        </h1>
        <hr className="w-50 m-auto" />
        <p className="my-2 shadow-sm p-3 mb-5 bg-body-tertiary rounded page_1">
          Your journey to a successful career starts here!
        </p>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?w=600&auto=format&fit=crop&q=60"
                className="d-block w-100 img-fluid"
                alt="student placement"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg"
                className="d-block w-100 img-fluid"
                alt="laptop"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2024/06/22/18/09/ai-generated-8846759_1280.jpg"
                className="d-block w-100 img-fluid"
                alt="ai placement"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Success Stories */}
      <section id="success" className="py-5 bg-body-tertiary">
        <div className="container">
          <h2
            className="section-title page_2"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <span>Success Stories</span>
          </h2>
          <hr className="w-50 pt-5 m-auto" />
          <div className="row g-4">
            {/* Student 1 */}
            <div className="col-md-4">
              <div className="card text-center bg-body-tertiary border border-2">
                <img
                  className="bd-placeholder-img rounded-circle img-fluid border border-primary p-2 m-5"
                  width="140"
                  height="140"
                  src="/assets/images/placement/aadesh.png"
                  alt="aadesh"
                />
                <h2 className="fw-normal">Aadesh</h2>
                <p className="mx-3">
                  "It was totally helpful in terms of learning coding,
                  programming, and other productive things. Happy to be a part
                  of Coding Savvy family."
                </p>
                <div className="card-body">
                  <p className="card-text">Placed at Amazon as a Data Scientist.</p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Student 2 */}
            <div className="col-md-4">
              <div className="card text-center bg-body-tertiary border border-2">
                <img
                  className="bd-placeholder-img rounded-circle img-fluid border border-primary p-2 m-5"
                  width="140"
                  height="140"
                  src="/assets/images/placement/devesh.png"
                  alt="devesh"
                />
                <h2 className="fw-normal">Devesh</h2>
                <p className="mx-3">
                  "Joining Coding Savvy was enriching. Strong foundation in
                  coding, programming basics, and valuable skills."
                </p>
                <div className="card-body">
                  <p className="card-text">Placed at Deloitte as a Web Developer.</p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Student 3 */}
            <div className="col-md-4">
              <div className="card text-center bg-body-tertiary border border-2">
                <img
                  className="bd-placeholder-img rounded-circle img-fluid border border-primary p-2 m-5"
                  width="140"
                  height="140"
                  src="/assets/images/placement/khushal.jpg"
                  alt="khushal"
                />
                <h2 className="fw-normal">Khushal</h2>
                <p className="mx-3">
                  "Being a part of Coding Savvy was transformative. It built a
                  solid coding foundation and strong programming principles."
                </p>
                <div className="card-body">
                  <p className="card-text">
                    Placed at Zeners Technology as a Software Engineer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="w-50 p-4 m-auto" />

      {/* Placement Statistics */}
      <section id="statistics" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Placement Statistics</h2>
          <div className="stats d-flex justify-content-around text-center">
            <div className="stat-item">
              <p>500+</p>
              <span>Students Placed</span>
            </div>
            <div className="stat-item">
              <p>$85,000</p>
              <span>Average Salary</span>
            </div>
            <div className="stat-item">
              <p>50+</p>
              <span>Top Hiring Companies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Cards */}
      <div className="row container py-5 m-auto">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/20/00/57/progress-1606688_1280.png"
              className="card-img-top"
              height="180"
              alt="median package"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Median Package</h5>
              <p className="card-text">For a realistic placement scenario</p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              height="180"
              alt="highest package"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Highest Package</h5>
              <p className="card-text">Mention the highest salary offered</p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="images/placement/statics2.webp"
              className="card-img-top"
              height="180"
              alt="placement rate"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Placement Rate</h5>
              <p className="card-text">Percentage of students placed.</p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter Partnerships */}
      <section id="recruiters" className="py-5">
        <div className="container container1">
          <h2
            className="section-title"
            data-aos="fade-down-right"
            data-aos-offset="300"
          >
            Recruiter Partnerships
          </h2>
          <hr className="w-50 pt-5 m-auto" />
          <div className="d-flex flex-wrap justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVHnOHxw4UwNMQR2hJIWYINqMOf85mCDDWw&s"
              className="bd-placeholder-img rounded-circle img-fluid border border-secondary-subtle p-2 m-5"
              alt="company1"
              width="140"
              height="140"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-flipkart-logo-icon-download-in-svg-png-gif-file-formats--online-shopping-application-app-brand-indian-companies-pack-logos-icons-2249163.png?f=webp"
              className="bd-placeholder-img rounded-circle img-fluid border border-secondary-subtle p-2 m-5"
              alt="flipkart"
              width="140"
              height="140"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjohbzBajgKvOmdSObfFbcSGLQw_nrwJ4CKQ&s"
              className="bd-placeholder-img rounded-circle img-fluid border border-secondary-subtle p-2 m-5"
              alt="company3"
              width="140"
              height="140"
            />
          </div>
        </div>
      </section>

      <hr className="w-50 p-4 m-auto" />

      {/* Resume & Interview Support */}
      <section id="support" className="py-5 bg-light">
        <div className="container">
          <div className="row mb-2">
            {/* Resume Preparation */}
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 resume">
                    Resume Preparation
                  </strong>
                  <h3 className="mb-4 text-dark">Tailor Your Resume</h3>
                  <p className="card-text mb-auto text-dark job">
                    Research and highlight keywords & skills mentioned in the job listing.
                  </p>
                  <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src="/assets/images/placement/pexels-photo-7644081.webp"
                    alt="resume"
                    className="bd-placeholder-img img-fluid"
                    width="200"
                    height="320"
                  />
                </div>
              </div>
            </div>

            {/* Interview Preparation */}
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 resume">
                    Interview Preparation
                  </strong>
                  <h3 className="mb-4 text-dark">Review Questions</h3>
                  <p className="card-text mb-auto text-dark job">
                    "Tell me about yourself." "What are your strengths and weaknesses?"
                  </p>
                  <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src="/assets/images/placement/pexels-photo-7579188.webp"
                    alt="interview"
                    className="bd-placeholder-img img-fluid"
                    width="200"
                    height="320"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
