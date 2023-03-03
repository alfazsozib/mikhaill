import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HomeContent from '@/components/HomeContent'
import Maplocation from '@/components/Maplocation'
import Navbar from '@/components/Navbar'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Navbar />
       <Hero/>
       <HomeContent />
       <Maplocation />
       <Footer />
    </div>
  )
}

export default HomePage
