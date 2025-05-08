import React from 'react'
import img from '../img/Pro_Tips_to_Design.jpeg'

const OurMission = () => {
    return (
        <div>
            <section className="py-20">
                <div className="container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
                            <p className="text-lg mb-6">
                            Nous sommes profondément attachés à l'excellence. Notre mission est de proposer des solutions innovantes qui résolvent des problèmes concrets et stimulent la créativité.
                            </p>
                            <p className="text-lg">
                            Nous nous efforçons de créer un impact positif sur le monde en favorisant l’innovation, la collaboration et la durabilité.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden h-96 shadow-lg">
                            <img
                                src={img}
                                alt="Mission"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurMission