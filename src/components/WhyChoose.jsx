import React from 'react'
import './WhyChoose.css'

const WhyChoose = React.memo(() => {
  return (
    <section className="why-choose" id="about">
      <div className="container">
        <h2 className="section-title">Why Choose SageFlow?</h2>
        <p className="section-description">
          A comprehensive platform designed specifically for students, combining mental health support, academic tracking, and personal development in one secure environment.
        </p>
      </div>
    </section>
  )
})

WhyChoose.displayName = 'WhyChoose'

export default WhyChoose
