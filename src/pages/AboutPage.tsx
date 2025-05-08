import React from 'react';
import NavBar from '../components/NavBar';
import PageFooter from '../components/Footer';
import Team from '../components/Team';
import AboutHeader from '../components/AboutHeader';
import OurMission from '../components/OurMission';
import OurValues from '../components/OurValues';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <NavBar />
            {/* Hero Section */}
            <AboutHeader />
            {/* Mission Section */}
            <OurMission />
            {/* Values Section */}
            <OurValues />
            {/* Team Section */}
            <Team />
            <PageFooter />
        </div>
    );
};

export default AboutPage;