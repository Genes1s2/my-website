import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from 'react-router';
import { useTheme } from '../helpers/DarkModeContext';

const NavBar = () => {
    const Navigate = useNavigate()


    const { isDarkMode, toggleDarkMode } = useTheme();

    const links = [
        { name: "Accueil", ref: "/" },
        { name: "Services", ref: "/services" },
        { name: "À propos", ref: "/a propos" },
        { name: "Tarifs", ref: "/tarifs" },
        { name: "Blog", ref: "/blog" }
    ]
    return (

        <div className=' shadow-md bg-white dark:bg-gray-800  dark:text-white z-10 py-4 sticky top-0'>
            <div className=' max-w-screen-xl mx-auto'>
                <Navbar fluid rounded>
                    <Navbar.Brand href="https://flowbite-react.com">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Genesis</span>
                    </Navbar.Brand>
                    <div className="flex gap-5 md:order-2">

                        <button
                            onClick={toggleDarkMode}
                            className=" text-white rounded"
                        >
                            {isDarkMode? '🔆': '🌙'}
                            
                        </button>
                        <Button
                            onClick={() => Navigate('/contact')}
                            className='bg-blue-600'
                        >Contact
                        </Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        {
                            links.map((item, index) => (
                                <Navbar.Link key={index} >
                                    <NavLink
                                        to={item.ref}
                                        className={({ isActive }) =>
                                            isActive ? "text-blue-600" : "text-black dark:text-white"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </Navbar.Link>
                            ))
                        }

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar

// import React, { useState } from 'react';

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-lg">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-2xl font-bold text-gray-800 dark:text-white">
//             MyLogo
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-800 dark:text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
//               Home
//             </a>
//             <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
//               About
//             </a>
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 onMouseLeave={() => setIsDropdownOpen(false)}
//                 className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none"
//               >
//                 Services
//               </button>
//               {/* Dropdown Menu */}
//               <div
//                 className={`absolute top-8 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'bg-orange-600 opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
//               >
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   Web Design
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   SEO
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   Marketing
//                 </a>
//               </div>
//             </div>
//             <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
//           <a href="#" className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
//             Home
//           </a>
//           <a href="#" className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
//             About
//           </a>
//           <div className="relative">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="w-full text-left py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none"
//             >
//               Services
//             </button>
//             {/* Dropdown Menu */}
//             <div
//               className={`pl-4 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}
//             >
//               <a
//                 href="#"
//                 className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
//               >
//                 Web Design
//               </a>
//               <a
//                 href="#"
//                 className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
//               >
//                 SEO
//               </a>
//               <a
//                 href="#"
//                 className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
//               >
//                 Marketing
//               </a>
//             </div>
//           </div>
//           <a href="#" className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;