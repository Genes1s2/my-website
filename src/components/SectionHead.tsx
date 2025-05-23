

// import React from 'react';

// const SectionHead = () => {
//     return (
//         <div className='section-contact'>
//             <section className="relative bg-white dark:bg-gray-900 text-left">

//                 <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
//                     <div className="max-w-screen-md">
//                         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//                             Stimuler l'innovation dans plus de 200 000 entreprises à travers le monde
//                         </h2>
//                         <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
//                             Offrez rapidement d'excellentes expériences de service, sans la complexité des solutions ITSM traditionnelles. Accélérez le travail de développement critique, éliminez les efforts et déployez les changements en toute simplicité.
//                         </p>
//                         <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
//                             <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
//                                 Voir plus
//                             </a>
//                             <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//                                 <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
//                                 </svg>
//                                 Videos
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SectionHead;

import React from 'react';

const SectionHead = () => {
    return (
        <div className="section-head">
            <div className='section-layer'></div>
            <section className="relative text-left">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md">
                        <h2 className="mb-4 text-white text-4xl tracking-tight font-extrabold">
                            Stimuler l'innovation dans plus de 200 000 entreprises à travers le monde
                        </h2>
                        <p className="mb-8 font-light text-gray-200 sm:text-xl">
                            Offrez rapidement d'excellentes expériences de service, sans la complexité des solutions ITSM traditionnelles. Accélérez le travail de développement critique, éliminez les efforts et déployez les changements en toute simplicité.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Voir plus
                            </a>
                            <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Videos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionHead;
