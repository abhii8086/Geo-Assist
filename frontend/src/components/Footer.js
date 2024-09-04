import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-xl font-semibold mb-4'>Geo Assist</h2>
            <p className='text-gray-600'>
              We provide high-quality services that bring value to our customers. Contact us for more information.
            </p>
          </div>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/3'>
            <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
            <p className='text-gray-400'>
              Panvel, new Mumbai, Maharashtra, 4000
            </p>
            <p className='text-gray-400'>
              Email: www.geoassist.com
            </p>
            <p className='text-gray-400'>
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
          <p className=' text-white text-center p-4' >
            &copy; 2024 Geo Assist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
