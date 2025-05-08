import React from 'react'

const MainBlogPost = () => {
    return (
            <div className="lg:col-span-2">
                {/* Featured Post */}
                <div className="mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold mb-4">Featured Post Title</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a
                            href="#"
                            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Read More →
                        </a>
                    </div>
                </div>

                {/* Blog Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Blog Post 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 4 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title 4</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex space-x-4">
                        <a
                            href="#"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                        >
                            3
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                        >
                            Next →
                        </a>
                    </nav>
                </div>
            </div>
    )
}

export default MainBlogPost