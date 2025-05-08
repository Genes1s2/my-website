import React from 'react'

const CustomerPricing = () => {
    return (
        <div>
            <section className="py-10 bg-white dark:bg-gray-800">
                <div className="container max-w-screen-xl px-4 py-8 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Ce que disent nos clients
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                « L'offre Pro a révolutionné notre activité. L'assistance prioritaire est fantastique ! »
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Customer 1"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Jane Doe</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">PDG, société A</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                « Nous avons opté pour l'offre Entreprise et nous en sommes ravis. Les solutions personnalisées sont de premier ordre. »
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Customer 2"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">John Smith</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Directeur technique, société B</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                « L'offre Basic est parfaite pour notre startup. Elle est abordable et offre tout ce dont nous avons besoin. »
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Customer 3"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Maria Garcia</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Fondateur, Société C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomerPricing