import "./ProjectPortfolio.css"

export default function ProjectPortfolio() {
  return (
    <div className="container mt-5 d-flex flex-column firstcont" data-aos="fade-up">
      <h2 className="d-flex justify-content-center firstHeading">
        Our Project Portfolio
      </h2>
      <p className="d-flex justify-content-center firstpara">
        Explore the real-world impact of ongoing and completed projects
      </p>

      {/* Live Projects Section */}
      <div className="container pt-5">
        <div className="project-section mb-5" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title">Live Projects</h2>
            <a href="/viewMore" className="view-more">
              <span>View More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/app-development-banner_33099-1720.jpg"
                  className="card-img-top"
                  alt="App Development"
                />
                <div className="card-body">
                  <h5 className="card-title">Live Project 1</h5>
                  <p className="card-text">
                    This project focuses on building a modern mobile app for users.
                  </p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/79328284-f97b-489f-924c-eb3b17e34b56_image2.jpg"
                  className="card-img-top"
                  alt="MERN Development"
                />
                <div className="card-body">
                  <h5 className="card-title">Live Project 2</h5>
                  <p className="card-text">
                    An advanced web application built using the MERN stack.
                  </p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/What-is-data-science-2.jpg"
                  className="card-img-top"
                  alt="Data Science"
                />
                <div className="card-body">
                  <h5 className="card-title">Live Project 3</h5>
                  <p className="card-text">
                    A comprehensive project on data science and analytics.
                  </p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="project-section mb-5" style={{ backgroundColor: "whitesmoke" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title">Completed Projects</h2>
            <a href="viewMore" className="view-more">
              <span>View More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/79328284-f97b-489f-924c-eb3b17e34b56_image2.jpg"
                  className="card-img-top"
                  alt="Completed Project 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Completed Project 1</h5>
                  <p className="card-text">
                    An innovative project that revolutionized e-commerce platforms.
                  </p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/app-development-banner_33099-1720.jpg"
                  className="card-img-top"
                  alt="Completed Project 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Completed Project 2</h5>
                  <p className="card-text">
                    A groundbreaking AI solution for healthcare diagnostics.
                  </p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/What-is-data-science-2.jpg"
                  className="card-img-top"
                  alt="Completed Project 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Completed Project 3</h5>
                  <p className="card-text">
                    An automated system for managing supply chains efficiently.
                  </p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="project-section case-studies-section mb-5" style={{ backgroundColor: "whitesmoke" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title">Case Studies</h2>
            <a href="viewMore" className="view-more">
              <span>View More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/img/case-study1.jpg"
                  className="card-img-top"
                  alt="Case Study 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Case Study 1</h5>
                  <p className="card-text">
                    A deep dive into the effectiveness of digital marketing strategies for startups.
                  </p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/img/premium_photo-1661375427386-64ac35086427.avif"
                  className="card-img-top"
                  alt="Case Study 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Case Study 2</h5>
                  <p className="card-text">
                    An exploration of customer behavior analysis using machine learning models.
                  </p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="/assets/images/projectPortfolio/img/premium_photo-1664301747246-ca55593015f1.avif"
                  className="card-img-top"
                  alt="Case Study 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Case Study 3</h5>
                  <p className="card-text">
                    A comparative analysis of cloud computing services in various industries.
                  </p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Contribution Section */}
      <div className="container mb-5">
        <div className="student-contribution-section" style={{ backgroundColor: "whitesmoke" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title">Student Contribution</h2>
            <a href="viewMore" className="view-more">
              <span>View More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Carousel */}
          <div id="studentCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* First Slide */}
              <div className="carousel-item active">
                <div className="row g-4">
                  <div className="col-md-4 sCont">
                    <div className="card">
                      <img
                        src="/assets/images/projectPortfolio/img/student1.jpg"
                        className="card-img-top "
                        alt="Student 1"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Student 1</h5>
                        <p className="card-text">
                          Developed an innovative project on AI-driven healthcare solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <img
                        src="/assets/images/projectPortfolio/img/student2.jpeg"
                        className="card-img-top"
                        alt="Student 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Student 2</h5>
                        <p className="card-text">
                          Created a data visualization tool for supply chain management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <img
                        src="/assets/images/projectPortfolio/img/student3.png"
                        className="card-img-top"
                        alt="Student 3"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Student 3</h5>
                        <p className="card-text">
                          Built a responsive mobile app for online learning platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Slide */}
              <div className="carousel-item">
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card">
                      <img
                        src="/assets/images/projectPortfolio/img/student4.jpg"
                        className="card-img-top"
                        alt="Student 4"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Student 4</h5>
                        <p className="card-text">
                          Designed a web-based library management system using MERN stack.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <img
                        src="/assets/images/projectPortfolio/img/student5.jpg"
                        className="card-img-top"
                        alt="Student 5"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Student 5</h5>
                        <p className="card-text">
                          Developed an advanced chatbot for customer support automation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <img
                        src="/assets/images/projectPortfolio/img/student6.webp"
                        className="card-img-top"
                        alt="Student 6"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Student 6</h5>
                        <p className="card-text">
                          Implemented a scalable e-commerce platform with real-time analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
