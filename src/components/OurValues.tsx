import React from 'react'

const OurValues = () => {
    return (
        <div>
            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nos valeurs</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Des professionnels passionnés et talentueux à votre service.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-3 transition-all rounded-lg">
                            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Nous repoussons constamment les limites pour créer des solutions révolutionnaires.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-3 transition-all rounded-lg">
                            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Collaboration</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Nous croyons au pouvoir du travail d’équipe et des objectifs partagés.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-3 transition-all rounded-lg">
                            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Excellence</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Nous nous engageons à offrir la plus haute qualité dans tout ce que nous faisons.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurValues