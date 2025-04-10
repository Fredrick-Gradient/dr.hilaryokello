import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
           

             

                <div className="flex space-x-4">
                  
                </div>
            </div>
            <div className="container mx-auto mt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Dr. Hilary Okello Comedy. All rights reserved.
            </div>
        </footer>
    );
}
