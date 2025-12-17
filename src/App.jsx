import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import Stats from './components/Stats'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Hero />
        <WhyChoose />
        <Stats />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
