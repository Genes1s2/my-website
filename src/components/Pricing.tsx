// import React from 'react'

// const Pricing = () => {
//     return (
//         <div>
//             <section className="bg-white dark:bg-gray-900">
//                 <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//                     <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
//                         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Conçu pour les équipes commerciales comme la vôtre</h2>
//                         <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Chez Genesis, nous nous concentrons sur les marchés où la technologie, l’innovation et le capital peuvent générer de la valeur à long terme et stimuler la croissance économique.</p>
//                     </div>
//                     <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
//                         {/* Pricing Card */}
//                         <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//                             <h3 className="mb-4 text-2xl font-semibold">Démarreur</h3>
//                             <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Meilleure option pour un usage personnel et pour votre prochain projet.</p>
//                             <div className="flex justify-center items-baseline my-8">
//                                 <span className="mr-2 text-5xl font-extrabold">500K XAF</span>
//                                 <span className="text-gray-500 dark:text-gray-400">/mois</span>
//                             </div>
//                             {/* List */}
//                             <ul role="list" className="mb-8 space-y-4 text-left">
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Configuration individuelle</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Aucune installation ni frais cachés</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Taille de l'équipe: <span className="font-semibold">1 développeur</span></span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Assistance premium: <span className="font-semibold">6 mois</span></span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Mises à jour gratuites: <span className="font-semibold">6 mois</span></span>
//                                 </li>
//                             </ul>
//                             <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get started</a>
//                         </div>
//                         {/* Pricing Card */}
//                         <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//                             <h3 className="mb-4 text-2xl font-semibold">PME</h3>
//                             <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Adapté à plusieurs utilisateurs, support étendu et premium..</p>
//                             <div className="flex justify-center items-baseline my-8">
//                                 <span className="mr-2 text-5xl font-extrabold">750K XAF</span>
//                                 <span className="text-gray-500 dark:text-gray-400">/mois</span>
//                             </div>
//                             {/* List */}
//                             <ul role="list" className="mb-8 space-y-4 text-left">
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Configuration individuelle</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Aucune installation ni frais cachés</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Team size: <span className="font-semibold">10 développeurs</span></span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Premium support: <span className="font-semibold">24 mois</span></span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Free updates: <span className="font-semibold">24 mois</span></span>
//                                 </li>
//                             </ul>
//                             <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get started</a>
//                         </div>
//                         {/* Pricing Card */}
//                         <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//                             <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
//                             <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Idéal pour les utilisations à grande échelle et les droits de redistribution étendus.</p>
//                             <div className="flex justify-center items-baseline my-8">
//                                 <span className="mr-2 text-5xl font-extrabold">1M XAF</span>
//                                 <span className="text-gray-500 dark:text-gray-400">/mois</span>
//                             </div>
//                             {/* List */}
//                             <ul role="list" className="mb-8 space-y-4 text-left">
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Configuration individuelle</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Aucune installation ni frais cachés</span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Team size: <span className="font-semibold">100+ développeurs</span></span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Assistance premium: <span className="font-semibold">36 mois</span></span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     
//                                     <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                                     <span>Mises à jour gratuites: <span className="font-semibold">36 mois</span></span>
//                                 </li>
//                             </ul>
//                             <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get started</a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Pricing

import React from 'react';

const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Hero Section */}
            
            {/* Pricing Tiers Section */}
            

            {/* Comparison Table Section */}
            

            {/* Testimonials Section */}
            

            {/* Call-to-Action Section */}
            
        </div>
    );
};

export default PricingPage;