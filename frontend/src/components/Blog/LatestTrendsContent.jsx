import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// This is the data that was previously in your <script> tag
const articleData = [
  { title: "Article Title 1", summary: "Summary of the first article." },
  { title: "Article Title 2", summary: "Summary of the second article." },
  { title: "Article Title 3", summary: "Summary of the third article." },
];

const LatestTrendsContent = () => {
  // State to hold the articles and track loading status
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect replaces the old script. It runs once when the component is first rendered.
  useEffect(() => {
    // Simulate a 1-second delay to fetch data
    const timer = setTimeout(() => {
      setArticles(articleData);
      setIsLoading(false);
    }, 1000);

    // Cleanup function to prevent errors if the component is unmounted
    return () => clearTimeout(timer);
  }, []); // The empty array [] ensures this effect runs only once

  return (
    <>
      <h3>Latest Trends in Technology</h3>
      <p>
        Stay updated with the latest trends and advancements in the technology
        industry. This section provides real-time articles, information on
        upcoming technologies, and insights into new research.
      </p>

      <h5 className="mt-4">Real-Time Articles</h5>
      <div id="articles">
        {/* Here we conditionally render based on the loading state */}
        {isLoading ? (
          <p>Loading latest articles...</p>
        ) : (
          articles.map((article) => (
            <div className="article" key={article.title}>
              <h6>{article.title}</h6>
              <p>
                {article.summary}{" "}
                <Link to="#" className="text-decoration-none text-primary">
                  Read more
                </Link>
              </p>
            </div>
          ))
        )}
      </div>

      <h5 class="mt-4">Upcoming Technologies</h5>
      <ul>
        <li>
          <strong>Artificial Intelligence (AI):</strong> AI continues to evolve,
          with advancements in natural language processing, computer vision, and
          autonomous systems.
        </li>
        <li>
          <strong>Quantum Computing:</strong> Quantum computing is making
          strides, promising to solve complex problems faster than traditional
          computers.
        </li>
        <li>
          <strong>5G Technology:</strong> The rollout of 5G networks is set to
          revolutionize communication with faster and more reliable internet
          connections.
        </li>
        <li>
          <strong>Edge Computing:</strong> Edge computing is bringing
          computation and data storage closer to the location where it is
          needed, reducing latency and improving performance.
        </li>
        <li>
          <strong>Blockchain:</strong> Blockchain technology is being adopted in
          various industries for secure and transparent transactions.
        </li>
        <li>
          <strong>Augmented Reality (AR) and Virtual Reality (VR):</strong> AR
          and VR technologies are enhancing user experiences in gaming,
          education, and training.
        </li>
      </ul>

      <h5 class="mt-4">New Research</h5>
      <ul>
        <li>
          <strong>AI Ethics:</strong> Research is being conducted to address
          ethical concerns related to AI, including bias, privacy, and
          accountability.
        </li>
        <li>
          <strong>Renewable Energy Technologies:</strong> Innovations in
          renewable energy sources, such as solar and wind power, are being
          explored to combat climate change.
        </li>
        <li>
          <strong>Healthcare Innovations:</strong> Advances in medical
          technology, including telemedicine, wearable devices, and personalized
          medicine, are improving patient care.
        </li>
        <li>
          <strong>Cybersecurity:</strong> New methods for detecting and
          preventing cyber threats are being developed to protect sensitive data
          and systems.
        </li>
        <li>
          <strong>Human-Computer Interaction (HCI):</strong> Research in HCI is
          focusing on creating more intuitive and user-friendly interfaces.
        </li>
      </ul>
      <h5 class="mt-4">Industry Applications & Impact Analysis</h5>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <h6>AI in Healthcare</h6>
              <ul>
                <li>Disease Detection & Diagnosis</li>
                <li>Drug Discovery & Development</li>
                <li>Patient Care Management</li>
                <li>Medical Imaging Analysis</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <h6>Blockchain in Finance</h6>
              <ul>
                <li>Decentralized Finance (DeFi)</li>
                <li>Smart Contracts</li>
                <li>Digital Currency Systems</li>
                <li>Cross-border Transactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-4">Market Statistics & Growth Projections</h5>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Current Market Size</th>
              <th>Expected Growth (2024)</th>
              <th>Key Drivers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI/ML</td>
              <td>$93.5B</td>
              <td>37.3% CAGR</td>
              <td>Cloud Computing, Big Data</td>
            </tr>
            <tr>
              <td>Blockchain</td>
              <td>$7.18B</td>
              <td>67.3% CAGR</td>
              <td>DeFi, NFTs</td>
            </tr>
            <tr>
              <td>IoT</td>
              <td>$384.7B</td>
              <td>26.4% CAGR</td>
              <td>5G, Smart Devices</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h5 class="mt-4">Career Opportunities</h5>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h6>AI/ML</h6>
              <ul>
                <li>Machine Learning Engineer</li>
                <li>AI Research Scientist</li>
                <li>Data Scientist</li>
                <li>NLP Engineer</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h6>Blockchain</h6>
              <ul>
                <li>Blockchain Developer</li>
                <li>Smart Contract Engineer</li>
                <li>Cryptocurrency Analyst</li>
                <li>DeFi Architect</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h6>IoT</h6>
              <ul>
                <li>IoT Solutions Architect</li>
                <li>Embedded Systems Engineer</li>
                <li>IoT Security Specialist</li>
                <li>Network Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-4">Technical Deep Dives</h5>
      <div class="accordion" id="techDeepDives">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#aiDeepDive"
            >
              AI/ML Technologies
            </button>
          </h2>
          <div id="aiDeepDive" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <p>Key components of modern AI systems:</p>
              <ul>
                <li>Neural Networks Architecture</li>
                <li>Deep Learning Frameworks</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-4">Additional Resources</h5>
      <ul>
        <li>
          <a
            href="https://www.technologyreview.com/"
            target="_blank"
            class="text-decoration-none text-primary"
          >
            MIT Technology Review
          </a>
          : Provides insights and analysis on the latest technology trends and
          innovations.
        </li>
        <li>
          <a
            href="https://www.wired.com/"
            target="_blank"
            class="text-decoration-none text-primary"
          >
            Wired
          </a>
          : Covers the latest news in technology, science, and culture.
        </li>
        <li>
          <a
            href="https://www.theverge.com/tech"
            target="_blank"
            class="text-decoration-none text-primary"
          >
            The Verge - Tech
          </a>
          : Offers news and reviews on the latest gadgets, apps, and tech
          trends.
        </li>
        <li>
          <a
            href="https://www.cnet.com/news/"
            target="_blank"
            class="text-decoration-none text-primary"
          >
            CNET News
          </a>
          : Provides news and analysis on the latest technology developments.
        </li>
        <li>
          <a
            href="https://www.zdnet.com/"
            target="_blank"
            class="text-decoration-none text-primary"
          >
            ZDNet
          </a>
          : Covers the latest trends in enterprise technology and innovation.
        </li>
      </ul>
    </>
  );
};

export default LatestTrendsContent;
