import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-star"></i>
              <span>Trusted by 10,000+ Students</span>
            </div>

            <h1 className="hero-title">
              Empowering Students to Build <span className="highlight">Healthy Habits</span> and Mental Wellness
            </h1>

            <p className="hero-description">
              SageFlow combines mental health tracking, habit building, and academic profiling to help students thrive in school and life. Your journey to wellness starts here.
            </p>

            <div className="hero-cta">
              <a href="#features" className="btn btn-white btn-large">
                <span>Get Started Free</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#features" className="btn btn-outline btn-large" style={{ borderColor: 'white', color: 'white' }}>
                <i className="fas fa-play-circle"></i>
                <span>Watch Demo</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src="/hero_dashboard_mockup_1765964112247.png"
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
