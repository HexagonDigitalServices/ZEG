// src/components/HomePage.jsx
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaVideo, FaRocket } from 'react-icons/fa';
import { IoIosKeypad } from 'react-icons/io';

const HomePage = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        if (value.trim()) {
            navigate(`/room/${value}`);
        }
    }, [navigate, value]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleJoinRoom();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50
     flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Animated floating elements (hidden on xs for clarity) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-indigo-100 opacity-50"
                        style={{
                            width: `${Math.random() * 80 + 20}px`,
                            height: `${Math.random() * 80 + 20}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main card with entrance animation */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl 
      shadow-xl overflow-hidden transform transition-all duration-500 animate-fadeInUp">
                <div className="p-6 sm:p-8 md:p-10">
                    <div className="text-center mb-6 sm:mb-8">
                        {/* Animated icon */}
                        <div className="flex justify-center">
                            <div className="p-2 sm:p-3 md:p-4 bg-indigo-100 rounded-full animate-pulse-slow">
                                <FaVideo className="text-indigo-600 text-2xl sm:text-3xl md:text-4xl" />
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-3 sm:mt-4">
                            Video Connect
                        </h1>
                        <p className="text-indigo-600 text-sm sm:text-base mt-1 sm:mt-2">
                            Enter your room code to join the meeting
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div>
                            <label htmlFor="room-code" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                                Room Code
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IoIosKeypad className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                                </div>
                                <input
                                    id="room-code"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    type="text"
                                    placeholder="e.g. 123-456-789"
                                    className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-50 border border-indigo-200 rounded-xl
                   text-gray-800 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300
                    focus:border-transparent transition-all hover:shadow-md"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleJoinRoom}
                            disabled={!value.trim()}
                            className={`w-full flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium transition-all duration-300 ${value.trim()
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md hover:shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <FaRocket className="mr-2 transform transition-transform duration-500 group-hover:rotate-45 text-sm sm:text-base" />
                            <span className="text-sm sm:text-base">Join Now</span>
                        </button>
                    </div>
                </div>

                <div className="bg-indigo-50 p-3 sm:p-4 text-center">
                    <p className="text-indigo-600 text-xs sm:text-sm">
                        Enter a room code to start your video conference
                    </p>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(-10px) translateX(-10px) rotate(-5deg); }
          75% { transform: translateY(10px) translateX(5px) rotate(3deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.1); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
        </div>
    );
};

export default HomePage;
