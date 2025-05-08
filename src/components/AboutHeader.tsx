import React from 'react'

const AboutHeader = () => {
    return (
        <div className='section-about'>
            <div className='section-layer'></div>
            <section className="py-20 relative">
                <div className="container text-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h1 className="text-white text-5xl font-bold mb-4">À propos de nous</h1>
                    <p className=" text-gray-200 text-xl max-w-2xl mx-auto">
                        Nous sommes une équipe passionnée qui se consacre à la création de solutions innovantes
                        qui font la différence. Notre mission est de donner du pouvoir aux gens grâce à la technologie.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutHeader