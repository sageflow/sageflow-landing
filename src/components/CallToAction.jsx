import React from 'react'
import { useRipple } from '../hooks/useRipple'
import './CallToAction.css'

const CallToAction = () => {
  const createRipple = useRipple()

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Student Wellness?</h2>
          <p className="cta-description">
            Join thousands of students, parents, and educators who are already using SageFlow to build healthier, happier learning environments.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-white btn-large"
              onClick={createRipple}
              aria-label="Sign up as a student"
            >
              Start as Student
            </button>
            <button 
              className="btn btn-white btn-large"
              onClick={createRipple}
              aria-label="Join as a teacher"
            >
              Join as Teacher
            </button>
            <button 
              className="btn btn-white btn-large"
              onClick={createRipple}
              aria-label="Join as a parent"
            >
              Join as Parent
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
