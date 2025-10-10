import React, { useState, useEffect, useRef } from 'react';
import './FreeResources.css';

// A custom hook to handle the intersection observer logic
const useAnimateOnScroll = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      // Only trigger once
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

function FreeResources() {
  // State for the subscription form
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' or 'success'

  // Refs for scroll animations
  const [toolsTitleRef, toolsTitleIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [toolCard1Ref, toolCard1IsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [toolCard2Ref, toolCard2IsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [premiumTitleRef, premiumTitleIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [featureItem1Ref, featureItem1IsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [featureItem2Ref, featureItem2IsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [featureItem3Ref, featureItem3IsVisible] = useAnimateOnScroll({ threshold: 0.1 });

  // Handle form submission
  const handleSubscription = (e) => {
    e.preventDefault();
    if (!email) return;

    setFormStatus('success');
    
    setTimeout(() => {
      setEmail(''); // Reset email input
      setFormStatus('idle'); // Reset button
    }, 2000);
  };

  return (
    <>
      <header className="hero-section">
        <div className="container text-center py-5">
          <h1 className="display-4 mb-3">Discover Free Learning Resources</h1>
          <p className="lead">
            Access tutorials, cheat sheets, templates, guides, and more!
          </p>
        </div>
      </header>

      {/* Resources Section */}
      <section id="resources" className="resources-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ wordSpacing: '0.2rem' }}>
            Boost Your Skills with Valuable Content
          </h2>
          <div className="row g-4">
            {/* Cards for Tutorials, Cheat Sheets, etc. */}
            <div className="col-md-6 col-lg-3">
              <div className="card resource-card h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Tutorials</h3>
                  <p className="card-text flex-grow-1">
                    Dive into our collection of step-by-step tutorials covering essential techniques, master key concepts, and gain practical skills to enhance your work.
                  </p>
                  <div className="mt-auto">
                    <a href="/tutorials" className="btn btn-primary explore-btn w-100">Explore Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card resource-card h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Cheat Sheets</h3>
                  <p className="card-text flex-grow-1">
                    Save time with our handy cheat sheets that provide quick reference guides for popular languages and tools.
                  </p>
                  <div className="mt-auto">
                    <a href="/cheatsheets" className="btn btn-primary explore-btn w-100">Explore Sheets</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card resource-card h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Templates</h3>
                  <p className="card-text flex-grow-1">
                    Get started quickly with our pre-built templates that provide a solid foundation for your projects.
                  </p>
                  <div className="mt-auto">
                    <a href="/templates" className="btn btn-primary explore-btn w-100">Explore Templates</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card resource-card h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Guides</h3>
                  <p className="card-text flex-grow-1">
                    Explore in-depth guides that cover a wide range of topics, from basic concepts to advanced techniques.
                  </p>
                  <div className="mt-auto">
                    <a href="/guides" className="btn btn-primary explore-btn w-100">Explore Guides</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools-section py-5 bg-light">
        <div className="container">
          <h2
            ref={toolsTitleRef}
            className={`text-center mb-5 animate-on-scroll ${toolsTitleIsVisible ? 'animate' : ''}`}
            style={{ wordSpacing: '0.2rem' }}
          >
            Interactive Tools for Hands-on Learning
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="tools-image">
                <img
                  src="https://img.freepik.com/premium-photo/3d-flat-icon-as-future-fingertips-hand-with-futuristic-icons-floating-signaling-advanced_980716-103843.jpg"
                  alt="Learning Tools"
                  className="img-fluid rounded"
                  style={{ height: '20rem' }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div
                ref={toolCard1Ref}
                className={`card tool-card h-100 d-flex flex-column animate-on-scroll ${toolCard1IsVisible ? 'animate' : ''}`}
              >
                <div className="card-body d-flex flex-column">
                  <div className="tool-icon mb-3"><i className="fas fa-code"></i></div>
                  <h3 className="card-title">Code Playground</h3>
                  <p className="card-text flex-grow-1">
                    Experiment with code in a safe and controlled environment. Our code playground provides a platform for testing, debugging, and learning new programming languages.
                  </p>
                  <div className="mt-auto">
                    <a href="/playground" className="btn btn-primary w-100">Try Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                ref={toolCard2Ref}
                className={`card tool-card h-100 d-flex flex-column animate-on-scroll ${toolCard2IsVisible ? 'animate' : ''}`}
              >
                <div className="card-body d-flex flex-column">
                  <div className="tool-icon mb-3"><i className="fas fa-tasks"></i></div>
                  <h3 className="card-title">Quizzes</h3>
                  <p className="card-text flex-grow-1">
                    Test your knowledge and solidify your understanding with our interactive quizzes. Track your progress and identify areas for improvement.
                  </p>
                  <div className="mt-auto">
                    <a href="/quizzes" className="btn btn-primary w-100">Try Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section id="premium" className="premium-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 ref={premiumTitleRef} className={`mb-5 animate-on-scroll ${premiumTitleIsVisible ? 'animate' : ''}`}>
                Unlock Premium Features
              </h2>
              <div className="features-grid mb-5">
                <div ref={featureItem1Ref} className={`feature-item animate-on-scroll ${featureItem1IsVisible ? 'animate' : ''}`}>
                  <div className="feature-icon"><i className="fas fa-crown"></i></div>
                  <h3>Exclusive Content</h3>
                  <p>Gain access to premium resources, including advanced tutorials, behind-the-scenes insights, and exclusive community events.</p>
                </div>
                <div ref={featureItem2Ref} className={`feature-item animate-on-scroll ${featureItem2IsVisible ? 'animate' : ''}`}>
                  <div className="feature-icon"><i className="fas fa-bolt"></i></div>
                  <h3>Early Access</h3>
                  <p>Be among the first to receive updates, new releases, and exclusive offers.</p>
                </div>
                <div ref={featureItem3Ref} className={`feature-item animate-on-scroll ${featureItem3IsVisible ? 'animate' : ''}`}>
                  <div className="feature-icon"><i className="fas fa-users"></i></div>
                  <h3>Community Support</h3>
                  <p>Connect with other learners and professionals in a dedicated community forum.</p>
                </div>
              </div>
              <div className="subscription-form-container p-4">
                <h3 className="mb-4">Join Our Premium Community</h3>
                <form className="subscription-form" onSubmit={handleSubscription}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button className={`btn btn-primary ${formStatus === 'success' ? 'success' : ''}`} type="submit">
                      {formStatus === 'success' ? (
                        <><i className="fas fa-check"></i> Success!</>
                      ) : (
                        'Get Started'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FreeResources;