import React from 'react'
import Navbar from '../components/navbar'
import LandingPage from '../components/hero'
import Tech from '../components/tech'
import HR from '../components/hr'
import Fashion from '../components/fashion'
import Rotaract from '../components/rotaract'


const Landing = () => {
  return (
    <div>
      <LandingPage />
      <Tech />
      <HR />
      <Fashion />
      <Rotaract />
    
    </div>
  )
}

export default Landing
