// src/components/Footer.jsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'
import Logo from '../assets/Logo.png'

const Footer = () => (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-200">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Left: Logo & Title */}
                <div className="flex flex-col items-start sm:items-center md:items-start space-y-4">
                    <div className="flex items-center space-x-3">
                        <img
                            src={Logo}
                            alt="Hexagon Logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        />
                        <h2 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Hexagon Digital Services
                        </h2>
                    </div>

                    <div className="mt-4 sm:mt-6 bg-white p-4 rounded-xl shadow-md border border-blue-100 w-full sm:w-auto">
                        <h3 className="font-bold text-blue-600 flex items-center justify-center sm:justify-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2 text-xs">NEW</span>
                            Powered by ZEGOCLOUD
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Seamless one-to-one video calls with crystal clear audio and ultra-low latency.
                        </p>
                        <button className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                            Try Free Demo
                        </button>
                    </div>
                </div>

                {/* Center: Newsletter */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Stay Updated</h3>
                    <div className="w-full sm:max-w-sm md:max-w-md bg-white rounded-xl p-1 shadow-lg border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 p-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full sm:flex-1 px-4 py-2 text-gray-700 focus:outline-none rounded-xl sm:rounded-l-xl text-sm sm:text-base border border-gray-200"
                            />
                            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl sm:rounded-r-xl flex items-center justify-center text-sm sm:text-base">
                                <FaEnvelope className="mr-2" /> Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right: Social & Contact */}
                <div className="flex flex-col items-center sm:items-center md:items-end space-y-6">
                    <div className="text-center sm:text-center md:text-right">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 justify-center md:justify-end">
                            <a href="https://www.facebook.com/profile.php?id=61567156598660" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://www.instagram.com/hexagondigitalservices?igsh=MWp2NG1oNTlibWVnZA==" className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://youtube.com/@hexagondigitalservices?si=gqWYQAOUVbEPbJmR" className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="text-center sm:text-center md:text-right space-y-1">
                        <h4 className="font-semibold text-gray-800">Contact Us</h4>
                        <p className="text-gray-600 text-sm">hexagonsservices@gmail.com</p>
                        <p className="text-gray-600 text-sm">+91 8299431275</p>
                    </div>
                </div>

            </div>
        </div>

        {/* Copyright */}
        <div className="bg-white py-4 sm:py-6 md:py-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-600 text-xs sm:text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-0">
                    Designed by{' '}
                    <a
                        href="https://hexagondigitalservices.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Hexagon Digital Services
                    </a>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer
