import React from 'react';
import logo from '../images/download.jpg'
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
      <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <div className="flex items-center ml-12 space-x-4">
        
          <Link to="/"  className="text-white  no-underline text-lg font-semibold">Home</Link>
          <Link to="about" className="text-gray-300 no-underline hover:text-white">About</Link>
        <Link to="service" className="text-gray-300 no-underline hover:text-white">Services</Link>
        <div className="container-select">
        <label for="cars" className='text-white px-2'>choose your city:</label>
  <select name="cars" id="cars">
    <option value="volvo">Mumbai</option>
    <option value="saab">Navi Mumbai</option>
          </select>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input 
            type="search" 
            placeholder="Search" 
            className="bg-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <img 
            src={logo} 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>
    
  )
}
