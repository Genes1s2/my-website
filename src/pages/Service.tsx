import React from 'react'
import SectionHead from '../components/SectionHead'
import SectionApp from '../components/SectionApp'
import SectionContact from '../components/SectionContact'
import Project from '../components/Project'
import NavBar from '../components/NavBar'
import PageFooter from '../components/Footer'

const Service = () => {
  return (
    <div>
      <NavBar />
        <SectionHead />
        <Project />
        <SectionApp />
        <SectionContact />
        <PageFooter />
    </div>
  )
}

export default Service