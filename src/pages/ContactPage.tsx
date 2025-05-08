import React from 'react';
import ContactForm from '../components/ContactForm';
import NavBar from '../components/NavBar';
import PageFooter from '../components/Footer';
import Address from '../components/Address';
import ContactHeader from '../components/ContactHeader';
import Map from '../components/Map';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <NavBar />
            {/* Hero Section */}
            <ContactHeader />

            {/* Contact Form and Details Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}

                        <ContactForm />
                        {/* Contact Details */}
                        <Address />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <Map />
            <PageFooter />
        </div>
    );
};

export default ContactPage;