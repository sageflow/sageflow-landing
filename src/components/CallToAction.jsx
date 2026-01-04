import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-container">
          <div className="cta-badge">
            <i className="fas fa-rocket"></i>
            <span>Start Your Wellness Journey Today</span>
          </div>

          <h2 className="cta-title">
            Ready to Transform Your Student Life?
          </h2>

          <p className="cta-description">
            Join thousands of students who are already building healthier habits, improving their mental wellness, and achieving their academic goals with SageFlow.
          </p>

          <div className="cta-buttons">
            <a href="#https://sage-flow-ebon.vercel.app/" className="btn btn-white btn-large">
              <span>Get Started Free</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline btn-large" style={{ borderColor: 'white', color: 'white' }}>
              <i className="fas fa-calendar"></i>
              <span>Schedule a Demo</span>
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
    </section>
  )
}

export default CallToAction
