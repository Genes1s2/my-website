import React from 'react'

const Address = () => {
  return (
    <div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-blue-500 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold">Address</h3>
                                        <p className="text-gray-600 dark:text-gray-300">123 Main Street, City, Country</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-blue-500 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-300">+1 (123) 456-7890</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-blue-500 mr-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-300">info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default Address