// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22.46 6c-.77.35-1.57.58-2.42.69.87-.52 1.53-1.35 1.84-2.34-.81.48-1.71.83-2.66 1.02a4.27 4.27 0 0 0-7.3 3.89c-3.56-.18-6.72-1.89-8.83-4.49a4.3 4.3 0 0 0-.58 2.14 4.27 4.27 0 0 0 1.9 3.55 4.23 4.23 0 0 1-1.93-.54v.06a4.29 4.29 0 0 0 3.42 4.19 4.24 4.24 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.96 8.58 8.58 0 0 1-5.31 1.83A8.56 8.56 0 0 1 2 19.61a12.08 12.08 0 0 0 6.56 1.93c7.87 0 12.18-6.5 12.18-12.13 0-.19-.01-.38-.02-.57a8.7 8.7 0 0 0 2.15-2.24z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22 12a10 10 0 1 0-11 9.95V14.9h-2.65v-2.9H11V9.5c0-2.63 1.58-4.08 3.93-4.08 1.11 0 2.07.08 2.35.12v2.72H15.6c-1.23 0-1.47.59-1.47 1.44v1.89h2.93l-.38 2.9h-2.55V22A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.96 3.61 9.05 8.3 9.93.61.11.83-.27.83-.59v-2.17c-3.38.74-4.1-1.62-4.1-1.62-.56-1.42-1.37-1.8-1.37-1.8-1.12-.76.08-.75.08-.75 1.24.09 1.89 1.27 1.89 1.27 1.1 1.88 2.88 1.34 3.58 1.02.11-.8.43-1.34.78-1.65-2.7-.31-5.54-1.34-5.54-5.97 0-1.32.47-2.4 1.23-3.24-.12-.3-.54-1.55.12-3.24 0 0 1.02-.33 3.34 1.23.97-.27 2-.4 3.03-.4s2.06.13 3.03.4c2.32-1.56 3.34-1.23 3.34-1.23.66 1.69.24 2.94.12 3.24.76.84 1.23 1.92 1.23 3.24 0 4.64-2.85 5.66-5.55 5.96.44.38.83 1.14.83 2.3v3.41c0 .32.22.71.83.59A10.003 10.003 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 Dealership. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
