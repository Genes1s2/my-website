import React from 'react'

const PriceComparism = () => {
    return (
        <div>
            <section className=" bg-gray-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Comparaison des Plans
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <thead>
                                <tr className="border-b dark:border-gray-700">
                                    <th className="p-4 text-left text-gray-900 dark:text-white">Fonctionnalité</th>
                                    <th className="p-4 text-center text-gray-900 dark:text-white">Démarreur</th>
                                    <th className="p-4 text-center text-gray-900 dark:text-white">Business</th>
                                    <th className="p-4 text-center text-gray-900 dark:text-white">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Logo Design */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Conception de Logo</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* Visit Card Design */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Conception de Carte de Visite</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* Flyer Design */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Conception de Flyers</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* Website Development */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Développement de Site Web</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* Web App Development */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Développement d'Application Web</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* Mobile App Development */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Développement d'Application Mobile</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* System Analysis */}
                                <tr className="border-b dark:border-gray-700">
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Analyse de Système</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                                {/* Prototyping */}
                                <tr>
                                    <td className="p-4 text-gray-700 dark:text-gray-300">Prototypage</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">-</td>
                                    <td className="p-4 text-center text-gray-700 dark:text-gray-300">✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PriceComparism