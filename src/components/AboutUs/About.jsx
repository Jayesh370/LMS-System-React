import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './AboutUs.css';   // Your CSS file

// Data for all 8 team members from your HTML
const teamMembers = [
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png", name: "Davis George", position: "CEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function AboutUs() {
  const [heroText, setHeroText] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100
    });

    const targetText = "About Us";
    let currentIndex = 0;
    let typingTimeout;

    const type = () => {
      if (currentIndex < targetText.length) {
        setHeroText(prevText => prevText + targetText.charAt(currentIndex));
        currentIndex++;
        typingTimeout = setTimeout(type, 150);
      }
    };
    type();
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <>
      <section id="hero" className="hero-section-aboutUs">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1  style={{ wordSpacing: '1rem' }}>
              {heroText}
            </h1>
            <p className="lead" style={{ wordSpacing: '0.7rem', letterSpacing: '0.4rem' }}>
              "Ignite Your Coding Journey With Coding Savvy"
            </p>
          </div>
        </div>
      </section>

      <section id="our-story" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team Collaboration" className="img-fluid rounded shadow" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="story-content">
                <h2 className="section-title">Our Story</h2>
                <p className="story-text">
                  Our vision is to empower businesses and individuals by providing innovative solutions that drive growth and success. We believe in harnessing the power of technology to create meaningful change.
                </p>
                <div className="mission-vision">
                  <div className="mission-box"><h3>Our Mission</h3><p>To accelerate businesses and individuals by providing innovative solutions with cutting-edge technology and personalized support.</p></div>
                  <div className="vision-box"><h3>Our Vision</h3><p>To be a leading force in the digital space, helping clients create a strong online presence and achieve their goals through technology.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            Our Journey
          </h2>
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content"><h3>2004</h3><p>Company founded with a vision to transform digital landscape</p></div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-dot"></div>
              <div className="timeline-content"><h3>2010</h3><p>Expanded services to include mobile app development</p></div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div className="timeline-dot"></div>
              <div className="timeline-content"><h3>2015</h3><p>Reached milestone of 1000+ successful projects</p></div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div className="timeline-dot"></div>
              <div className="timeline-content"><h3>2020</h3><p>Launched AI-powered solutions division</p></div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
              <div className="timeline-dot"></div>
              <div className="timeline-content"><h3>2024</h3><p>Global expansion with offices in 10+ countries</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            Why Choose Us?
          </h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up"><div className="feature-card"><div className="icon-box"><i className="fas fa-database"></i></div><h4>Data Management</h4><p>Secure and efficient data storage solutions</p></div></div>
            <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="100"><div className="feature-card"><div className="icon-box"><i className="fas fa-clock"></i></div><h4>24/7 Support</h4><p>Round-the-clock technical assistance</p></div></div>
            <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200"><div className="feature-card"><div className="icon-box"><i className="fas fa-download"></i></div><h4>Easy Setup</h4><p>Quick and simple implementation process</p></div></div>
            <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300"><div className="feature-card"><div className="icon-box"><i className="fas fa-headset"></i></div><h4>Expert Support</h4><p>Dedicated technical team at your service</p></div></div>
          </div>
        </div>
      </section>

      <section id="team" className="section-padding bg-light">
        <div className="responsive-container-block container">
          <p className="text-blk team-head-text">Our Team</p>
          <div className="responsive-container-block">
            {teamMembers.map((member, index) => (
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container" key={index}>
                <div className="card">
                  <div className="team-image-wrapper"><img className="team-member-image" src={member.imgSrc} alt={member.name} /></div>
                  <p className="text-blk name">{member.name}</p>
                  <p className="text-blk position">{member.position}</p>
                  <p className="text-blk feature-text">{member.description}</p>
                  <div className="social-icons-new">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" alt="Twitter"/></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" alt="Facebook"/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;