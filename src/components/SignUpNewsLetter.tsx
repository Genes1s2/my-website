import React from 'react'

const SignUpNewsLetter = () => {
    return (
        <div>
            <section className="">
                <div
                className=" text-left"
                >
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Inscrivez-vous à notre newsletter</h2>
                        <p className="text-gray-500 dark:text-gray-400 mx-auto mb-8 max-w-2xl md:mb-8">Restez au courant de l'avancement de la feuille de route, des annonces et des remises exclusives, n'hésitez pas à vous inscrire avec votre e-mail.</p>
                        <form action="/">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresse email</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" type="email" id="email" required />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">Nous nous soucions de la protection de vos données. <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lisez notre politique de confidentialité</a>.</div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUpNewsLetter