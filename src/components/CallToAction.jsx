import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta" id="cta">
      <div className="cta-bg">
        <div className="cta-blob cta-blob-1"></div>
        <div className="cta-blob cta-blob-2"></div>
        <div className="cta-blob cta-blob-3"></div>
      </div>
      <div className="container">
        <div className="cta-container">
          <div className="cta-glass-card">
            <div className="cta-badge">
              <i className="fas fa-rocket"></i>
              <span>Start Your Wellness Journey Today</span>
            </div>

            <h2 className="cta-title">
              Smart &amp; Proactive <span className="highlight">Mental Health</span> Support.
            </h2>

            <h2 className="cta-subtitle">
              Continuous Assessment <i className="fas fa-arrow-right highlight-icon" style={{ margin: '0 12px', fontSize: '0.8em' }}></i> <span className="highlight">Prioritisation</span> <i className="fas fa-arrow-right highlight-icon" style={{ margin: '0 12px', fontSize: '0.8em' }}></i> Action
            </h2>

            <div className="cta-description">
              {/* <p>
                Sageflow is an AI powered mental health platform that helps schools continuously understand and support each student’s emotional and cognitive wellbeing.
              </p> */}

              <ul className="cta-text-list">
                <li>Adaptive AI assessments.</li>
                <li>Continuous mental health screening.</li>
                <li>Psychometric & behavioural mapping.</li>
                <li>Risk prioritisation & referral workflows.</li>
                <li>Dashboards for schools, parents, psychologists.</li>
              </ul>

              {/* <p>
                <strong>Upcoming:</strong> Private and secure integrated <strong>AI Counsellor</strong> to talk to mental health related issues.
              </p> */}

            </div>

            <div className="cta-buttons">
              <a href="https://app.sageflow.in" className="btn btn-white btn-large">
                <span>Get Started</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                <span>Free to start</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                <span>No credit card required</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
