import React from 'react'
import img1 from '../img/Digital Marketing.jpg'
import img2 from '../img/Flipmart - Multipurpose.jpg'

const SectionImgHead = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-800 text-left">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Maquettes graphiques de votre site web</h2>
                        <p className="mb-4">Nous sommes des stratèges, des concepteurs et des développeurs. Nous innovons et résolvons les problèmes.
                            Assez petits pour être simples et rapides, mais assez grands pour vous offrir la portée que vous souhaitez au rythme dont vous avez besoin.</p>
                        <p>Nous sommes des stratèges, des designers et des développeurs. Nous innovons et résolvons les problèmes. Nous sommes suffisamment petits pour être simples et rapides.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src={img1} alt="Digital Marketing" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={img2} alt="Flipmart - Multipurpose" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionImgHead