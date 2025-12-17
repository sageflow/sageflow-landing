import React from 'react'
import './Testimonials.css'

const Testimonials = React.memo(() => {
    const testimonials = [
        {
            text: "SageFlow has completely transformed how I manage my mental health. The daily check-ins and habit tracking keep me accountable, and I love seeing my progress over time.",
            author: "Sarah Johnson",
            role: "High School Senior",
            rating: 5,
            avatar: "SJ"
        },
        {
            text: "As a college student dealing with anxiety, SageFlow has been a lifesaver. The anonymous reporting feature helped me get the support I needed without fear of judgment.",
            author: "Michael Chen",
            role: "College Sophomore",
            rating: 5,
            avatar: "MC"
        },
        {
            text: "The academic profiling feature helped me identify patterns in my study habits. I've improved my grades and feel more in control of my education.",
            author: "Emily Rodriguez",
            role: "Junior Student",
            rating: 5,
            avatar: "ER"
        },
        {
            text: "I love the daily brain teasers and word of the day! It's a fun way to start my morning and keeps my mind sharp. The gamification makes wellness feel less like a chore.",
            author: "David Park",
            role: "High School Freshman",
            rating: 5,
            avatar: "DP"
        },
        {
            text: "The personalized daily routines based on my mood have been incredibly helpful. SageFlow understands that every day is different and adapts accordingly.",
            author: "Jessica Williams",
            role: "College Junior",
            rating: 5,
            avatar: "JW"
        },
        {
            text: "Being able to share my progress with my parents while maintaining my privacy has strengthened our relationship. They understand me better now.",
            author: "Alex Thompson",
            role: "High School Sophomore",
            rating: 5,
            avatar: "AT"
        }
    ]

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">
                        Loved by Students Everywhere
                    </h2>
                    <p className="section-description">
                        See how SageFlow is making a real difference in students' lives across the country.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.author}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

Testimonials.displayName = 'Testimonials'

export default Testimonials
