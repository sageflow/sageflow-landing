import React from 'react'
import './Stats.css'

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-content">
                    <div className="stats-header">
                        <h2 className="stats-title">Our Stats</h2>
                        <p className="stats-subtitle">Empowering students to build healthy habits and mental wellness</p>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Active Students</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Satisfaction Rate</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">Wellness Checks</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
