import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
      <Contact />
    </>
  );
};

export default NotFound;