import React from 'react'
import Faqs from '../components/Acoordions'
import PageFooter from '../components/Footer'
import Testimonies from '../components/Testimonies'
import HeroSection from '../components/HeroSection'
import Section from '../components/Section'
import SectionApp from '../components/SectionApp'
import Team from '../components/Team'
import SectionImgHead from '../components/SectionImgHead'
import SectionHead from '../components/SectionHead'
import Partners from '../components/Partners'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Section />
      <HeroSection />
      <SectionApp />
      <SectionImgHead />
      <Team />
      <Testimonies />
      {/* <ContactForm /> */}
      <Faqs />
      {/* <Pricing /> */}
      {/* <SectionContact /> */}
      {/* <Slider /> */}
      {/* <Timelines /> */}
      <SectionHead />
      <Partners />
      <PageFooter />
    </div>
  )
}

export default Home