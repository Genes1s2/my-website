import React from 'react'

const Map = () => {
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239.7467021289187!2d9.73507947563764!3d4.096329136758076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e08cfa38289%3A0xfe5b0f8baed80c33!2sCarrefour%20Market%20Bonamoussadi!5e1!3m2!1sen!2scm!4v1742252702977!5m2!1sen!2scm"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Map