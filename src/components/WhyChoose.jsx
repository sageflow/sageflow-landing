import React from 'react'
import './WhyChoose.css'

const WhyChoose = React.memo(() => {
  const benefits = [
    {
      icon: 'fas fa-shield-heart',
      title: 'Comprehensive Support',
      description: 'All-in-one platform combining mental health tracking, habit building, and academic profiling in one secure environment.',
      iconClass: 'purple'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Data-Driven Insights',
      description: 'Track your progress with detailed analytics and personalized recommendations based on your unique patterns.',
      iconClass: 'orange'
    },
    {
      icon: 'fas fa-lock',
      title: 'Privacy First',
      description: 'Your data is encrypted and secure. We prioritize your privacy with industry-leading security measures.',
      iconClass: 'pink'
    },
    {
      icon: 'fas fa-users-medical',
      title: 'Professional Guidance',
      description: 'Access to licensed therapists and counselors who understand student mental health challenges.',
      iconClass: 'purple'
    },
    {
      icon: 'fas fa-mobile-screen',
      title: 'Always Accessible',
      description: 'Available on all devices, anytime, anywhere. Your wellness journey fits your schedule.',
      iconClass: 'orange'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Academic Integration',
      description: 'Seamlessly connects your mental wellness with academic performance for holistic growth.',
      iconClass: 'pink'
    }
  ]

  return (
    <section className="why-choose" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose SageFlow</span>
          <h2 className="section-title">
            Everything You Need for Mental Wellness in One Place
          </h2>
          <p className="section-description">
            A comprehensive platform designed specifically for students, combining mental health support, academic tracking, and personal development.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className={`benefit-icon ${benefit.iconClass}`}>
                <i className={benefit.icon}></i>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

WhyChoose.displayName = 'WhyChoose'

export default WhyChoose
