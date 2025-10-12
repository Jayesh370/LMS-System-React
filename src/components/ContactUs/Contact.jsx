import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import logoBackground from '/assets/images/contact-images/Final_Logo56.png';

const Contact = () => {
  // Your state and handler functions remain the same
  const [formData, setFormData] = useState({ name: '', email: '', course: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', course: '', message: '' });
  };

  return (
    // This new wrapper is the key to solving the CSS conflict
<div className="contact-us-page" style={{ backgroundImage: `url(${logoBackground})` }} > {/* This wrapper is crucial */}
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="contact">Contact Us</h1> {/* Ensure class is 'contact' */}
            <p className="para">
              We'd love to hear from you! Get in touch with us using the form
              below or visit us at our location.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2 form-container"> {/* Added a wrapper for the form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="course" className="form-label">Courses</label>
                <select className="courses form-control" name="course" value={formData.course} onChange={handleChange} required>
                  <option value="" disabled>Select Course</option>
                  <option value="Placement Batch">Placement Supreme Batch</option>
                  <option value="Web Development">Full Stack Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Java Fundamentals">Java Fundamentals</option>
                  <option value="Modern Javascript Frameworks">Modern Javascript Frameworks</option>
                  <option value="Back-end Development">Back-end Development</option>
                  <option value="Database Design">Database Design</option>
                  <option value="Web Performance Optimization">Web Performance Optimization</option>
                  <option value="DevOps for Web Developer">DevOps for Web Developer</option>
                  <option value="Web Security">Web Security</option>
                  <option value="Database Management">Database Management</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" placeholder="Write your message here" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button> {/* Added submit-btn class */}
            </form>
            <hr />
          </div>
        </div>

        {/* --- Google Map --- */}
        <div className="google-map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                title="Google Map Location"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Coding%20Savvy&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* --- Socials Section --- */}
      <div className="socials-section">
        <header className="socials-title">Socials</header>
        <div className="social-icons">
          {/* LinkedIn */}
          <a href="#" className="icon-link" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="linkdin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href="#" className="icon-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="icon-link" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="#" className="icon-link" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contact;