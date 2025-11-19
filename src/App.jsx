import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCarousel from './components/FeaturedCarousel'
import TopicsCloud from './components/TopicsCloud'
import WhyEcho from './components/WhyEcho'
import Testimonials from './components/Testimonials'
import LiveFeed from './components/LiveFeed'
import MassiveCTA from './components/MassiveCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Navbar />
      <Hero />
      <FeaturedCarousel />
      <TopicsCloud />
      <WhyEcho />
      <Testimonials />
      <LiveFeed />
      <MassiveCTA />
      <Footer />
    </div>
  )
}

export default App
