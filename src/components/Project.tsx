import React from 'react'

const Project = () => {
    return (
        // <div>
        //     <section className="bg-white dark:bg-gray-900 antialiased">
        //         <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        //             <div className="max-w-2xl mx-auto text-center">
        //                 <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        //                 Notre travail
        //                 </h2>
        //                 <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        //                 Conçu avec compétence et soin pour aider nos clients à développer leur entreprise !
        //                 </p>
        //             </div>

        //             <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        //                 <div className="space-y-4">
        //                     <span
        //                         className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        //                         Alphabet Inc.
        //                     </span>
        //                     <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        //                         Official website
        //                     </h3>
        //                     <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        //                         Flowbite helps you connect with friends, family and communities of people who share your interests.
        //                     </p>
        //                     <a href="#" title=""
        //                         className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //                         role="button">
        //                         View case study
        //                         <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        //                             fill="currentColor">
        //                             <path fill-rule="evenodd"
        //                                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                 clip-rule="evenodd" />
        //                         </svg>
        //                     </a>
        //                 </div>

        //                 <div className="space-y-4">
        //                     <span
        //                         className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        //                         Microsoft Corp.
        //                     </span>
        //                     <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        //                         Management system
        //                     </h3>
        //                     <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        //                         Flowbite helps you connect with friends, family and communities of people who share your interests.
        //                     </p>
        //                     <a href="#" title=""
        //                         className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //                         role="button">
        //                         View case study
        //                         <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        //                             fill="currentColor">
        //                             <path fill-rule="evenodd"
        //                                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                 clip-rule="evenodd" />
        //                         </svg>
        //                     </a>
        //                 </div>

        //                 <div className="space-y-4">
        //                     <span
        //                         className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        //                         Adobe Inc.
        //                     </span>
        //                     <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        //                         Logo design
        //                     </h3>
        //                     <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        //                         Flowbite helps you connect with friends, family and communities of people who share your interests.
        //                     </p>
        //                     <a href="#" title=""
        //                         className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //                         role="button">
        //                         View case study
        //                         <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        //                             fill="currentColor">
        //                             <path fill-rule="evenodd"
        //                                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        //                                 clip-rule="evenodd" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div>
  <section className="bg-white dark:bg-gray-900 antialiased">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Notre travail
        </h2>
        <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Conçu avec compétence et soin pour aider nos clients à développer leur entreprise !
        </p>
      </div>

      <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
          <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Alphabet Inc.
          </span>
          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Site officiel
          </h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Nous avons conçu et développé un site Web moderne et réactif pour Alphabet Inc. afin de présenter leurs projets et services innovants.
          </p>
          <a
            href="#"
            className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
            role="button"
          >
            Voir l'étude de cas
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Card 2 */}
        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
          <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Microsoft Corp.
          </span>
          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Système de gestion
          </h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Nous avons construit un système de gestion robuste pour Microsoft Corp. afin de rationaliser ses opérations et d'améliorer son efficacité.
          </p>
          <a
            href="#"
            className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
            role="button"
          >
            Voir l'étude de cas
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Card 3 */}
        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
          <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Adobe Inc.
          </span>
          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Conception de logo
          </h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Nous avons créé un superbe logo pour Adobe Inc. qui reflète leur identité de marque et résonne auprès de leur public.
          </p>
          <a
            href="#"
            className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
            role="button"
          >
            Voir l'étude de cas
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
    )
}

export default Project