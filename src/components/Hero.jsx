import React from 'react'
import { useRipple } from '../hooks/useRipple'
import './Hero.css'

const Hero = () => {
  const createRipple = useRipple()

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Students to Build Healthy Habits and Mental Wellness
          </h1>
          <p className="hero-description">
            SageFlow combines mental health tracking, habit building, and academic profiling to help students thrive in school and life.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary btn-large"
              onClick={createRipple}
              aria-label="Start your wellness journey with SageFlow"
            >
              Start Your Journey
            </button>
            <button 
              className="btn btn-secondary btn-large"
              onClick={createRipple}
              aria-label="Join SageFlow as a parent"
            >
              Join as Parent
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
