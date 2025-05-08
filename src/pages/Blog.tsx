import React from 'react'
import SignUpNewsLetter from '../components/SignUpNewsLetter'
import BlogHeader from '../components/BlogHeader'
import NavBar from '../components/NavBar'
import PageFooter from '../components/Footer'
import Articles from '../components/Articles'
import MainBlogPost from '../components/blog/MainBlogPost'
import { Sidebar } from 'flowbite-react'
import SideBarBlogLink from '../components/blog/SideBarBlogLink'

const Blog = () => {
    return (
        <div>

            {/* Install the "flowbite-typography" NPM package to apply styles and format the article content: 

URL: https://flowbite.com/docs/components/typography/  */}
            <NavBar />
            {/* Hero Section */}
            <BlogHeader />

            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

                {/* Blog Content Section */}
                <section className="">
                    <div className="container py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Blog Posts */}
                            <MainBlogPost />
                            {/* Sidebar */}
                            <SideBarBlogLink />
                        </div>
                    </div>
                </section>

            </div>

            <Articles />
            <PageFooter />
        </div>
    )
}

export default Blog

//  pubdate datetime="2022-06-23"