import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Your Company Name</h1>
                    <p className="mt-2">Your Company Slogan</p>
                </div>

                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-300">About Us</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Portfolio</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <Facebook />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Twitter />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Instagram />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <LinkedIn />
                    </a>
                </div>
            </div>
            <div className="container mx-auto mt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
        </footer>
    );
}
