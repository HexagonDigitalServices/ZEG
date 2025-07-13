// src/components/Navbar.jsx
import React from 'react'
import Logo from '../assets/Logo.png'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-white to-amber-50 backdrop-blur-lg bg-opacity-90 border-b border-purple-700 shadow-md shadow-amber-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    {/* Left: Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={Logo}
                            alt="Hexagon Logo"
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        />
                    </Link>

                    {/* Center: Animated Title */}
                    <div className="hidden sm:flex sm:flex-col sm:items-center 
                          md:absolute md:left-1/2 md:top-1/2 md:transform 
                          md:-translate-x-1/2 md:-translate-y-1/2">
                        <h1 className="text-lg sm:text-2xl font-bold 
                           bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 
                           bg-clip-text text-transparent tracking-wide">
                            HEXAGON DIGITAL SERVICES
                        </h1>
                        <div className="flex space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-0.5 w-2 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 rounded-full animate-pulse"
                                    style={{
                                        animationDelay: `${i * 0.1}s`,
                                        boxShadow: '0 0 4px rgba(245, 158, 11, 0.5)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Connect Button */}
                    <div>
                        <a
                            href="https://hexagondigitalservices.com/contact"
                            target="_blank"
                            className="group relative inline-block"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 
                              rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt" />
                            <button className="relative flex items-center cursor-pointer
                                 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white 
                                 font-medium text-purple-700 hover:text-purple-800 
                                 transition-all duration-300 border border-purple-200 shadow-sm">
                                <span className="mr-2">CONNECT</span>
                                <MdArrowForward className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
