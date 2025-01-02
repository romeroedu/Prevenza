import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import authUser from './AuthContext.jsx';

const Header = () => {
    const { user, firstName, lastName } = authUser();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-sky-900 p-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
                        <RxHamburgerMenu className="h-8 w-8" />
                    </button>
                    <img alt="Cummins Logo" className="h-10 w-10 ml-4 lg:ml-0" src="./Cummins_Logo_White.png" />
                    <a href="/" className="text-white text-3xl font-bold ml-4">Prevenza</a>
                </div>
                <div className="hidden lg:flex items-center space-x-10">
                    {user && (
                        <a href="/home" className="text-white font-medium text-xl hover:text-black">Home</a>
                    )}
                    {/* <a href="/trips" className="text-white font-medium text-xl hover:text-black">Your Trips</a> */}
                    <a href="/about" className="text-white font-medium text-xl hover:text-black">About</a>
                    <a href="/support" className="text-white font-medium text-xl hover:text-black">Support/FAQs</a>
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="text-white font-medium text-xl">
                                {firstName} {lastName}
                            </span>
                            <a href="/profile" className="block w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
                                <img src="./pfp.png" alt="Profile" className="w-full h-full object-cover" />
                            </a>
                        </>
                    ) : (
                        <a href="/login" className="text-white font-medium text-xl hover:text-black">
                            Login / Signup
                        </a>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden mt-4 flex flex-col items-center space-y-4">
                    {user && (
                        <a href="/home" className="text-white font-medium text-xl hover:text-black">Home</a>
                    )}
                    {/* <a href="/trips" className="text-white font-medium text-xl hover:text-black">Your Trips</a> */}
                    <a href="/about" className="text-white font-medium text-xl hover:text-black">About</a>
                    <a href="/support" className="text-white font-medium text-xl hover:text-black">Support/FAQs</a>
                    {user && (
                        <div className="flex items-center mt-4 space-x-4">
                            <span className="text-white font-medium text-xl">
                                {firstName} {lastName}
                            </span>
                            <a href="/profile" className="block w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
                                <img src="./pfp.png" alt="Profile" className="w-full h-full object-cover" />
                            </a>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Header;