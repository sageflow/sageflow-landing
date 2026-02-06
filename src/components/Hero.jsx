import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">


            <h1 className="hero-title">
              Empowering Students to Build <span className="highlight">Healthy Habits</span> and <span className="highlight">Mental Wellbeing.</span>
            </h1>

            <p className="hero-description">
              Sageflow is an AI powered mental health platform that helps schools continuously understand and support each student’s emotional and cognitive wellbeing.
            </p>

            <div className="hero-cta">
              <a href="https://sage-flow-ebon.vercel.app/" className="btn btn-white btn-large">
                <span>Get Started</span>
                <i className="fas fa-arrow-right"></i>
              </a>

            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src="/dashboard-modern.png"
                alt="SageFlow Dashboard Preview"
                className="hero-image"
              />
            </div>

            <div className="floating-card floating-card-1">
              <div className="floating-card-icon purple">
                <i className="fas fa-heart"></i>
              </div>
              <div className="floating-card-title">Wellness Score</div>
              <div className="floating-card-value">92%</div>
            </div>

            <div className="floating-card floating-card-2">
              <div className="floating-card-icon orange">
                <i className="fas fa-fire"></i>
              </div>
              <div className="floating-card-title">Daily Streak</div>
              <div className="floating-card-value">28 Days</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToFeatures}>
        <span className="scroll-indicator-text">Scroll Down</span>
        <i className="fas fa-chevron-down scroll-indicator-icon"></i>
      </div>
    </section>
  )
}

export default Hero
