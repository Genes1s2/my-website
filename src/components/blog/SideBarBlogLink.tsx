import React from 'react'

const SideBarBlogLink = () => {
    return (
        <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Technology
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Design
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Business
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Lifestyle
                        </a>
                    </li>
                </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Blog Post Title 1
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Blog Post Title 2
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Blog Post Title 3
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            Blog Post Title 4
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarBlogLink