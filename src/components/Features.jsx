import React, { useEffect, useRef } from 'react'
import './Features.css'

const Features = React.memo(() => {
  const featuresRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const currentRef = featuresRef.current
    const featureCards = currentRef?.querySelectorAll('.feature-card')
    
    featureCards?.forEach(card => {
      observer.observe(card)
    })

    return () => {
      if (currentRef) {
        const cards = currentRef.querySelectorAll('.feature-card')
        cards.forEach(card => {
          observer.unobserve(card)
        })
      }
      observer.disconnect()
    }
  }, [])

  const features = [
    {
      icon: 'fas fa-brain',
      title: 'Mental Health Support',
      description: 'Connect with licensed therapists, access mental health resources, and build emotional resilience through our comprehensive support system.',
      iconClass: 'mental-health'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Habit Tracking',
      description: 'Monitor daily habits, sleep patterns, exercise routines, and screen time to build healthy lifestyle choices and improve overall well-being.',
      iconClass: 'habit-tracking'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Academic Profiling',
      description: 'Track academic performance, identify learning patterns, and receive personalized insights to optimize your educational journey.',
      iconClass: 'academic'
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Assessment Suite',
      description: 'Take comprehensive IQ, EQ, and personality assessments monthly to track your cognitive and emotional development over time.',
      iconClass: 'assessment'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safe Reporting',
      description: 'Report bullying, harassment, or other issues anonymously with our secure complaint system. Your safety and privacy are our top priorities.',
      iconClass: 'safety'
    },
    {
      icon: 'fas fa-heart',
      title: 'Weekly Wellness Checks',
      description: 'Take quick weekly pulse checks to monitor your mood and stress levels, with personalized insights and progress tracking over time.',
      iconClass: 'wellness'
    },
    {
      icon: 'fas fa-book-open',
      title: 'Daily Learning Engagement',
      description: 'Expand your vocabulary with a new word each day and challenge your mind with brain teasers in a fun, gamified format that builds consistent learning habits.',
      iconClass: 'learning'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Personalized Daily Routines',
      description: 'Get tailor-made daily routines based on your mood, energy levels, academic performance, and mental health data for optimal productivity and well-being.',
      iconClass: 'routines'
    },
    {
      icon: 'fas fa-users',
      title: 'Family Integration',
      description: 'Keep parents and guardians informed about your progress while maintaining your privacy. Build stronger family relationships through shared insights.',
      iconClass: 'family'
    }
  ]

  return (
    <section className="features" id="features" ref={featuresRef}>
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-icon ${feature.iconClass}`}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Features.displayName = 'Features'

export default Features
