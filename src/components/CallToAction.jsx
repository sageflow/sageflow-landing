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
              AI Powered Student <span className="highlight">Mental Health</span> and <span className="highlight">Wellbeing Platform.</span>
            </h2>

            <p className="cta-description">
              Sageflow is an AI powered mental health platform that helps schools continuously understand and support each student’s emotional and cognitive wellbeing.
            </p>

            <div className="cta-buttons">
              <a href="https://sage-flow-ebon.vercel.app/" className="btn btn-white btn-large">
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
