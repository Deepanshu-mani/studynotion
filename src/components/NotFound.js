import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">Go Back to Home</Link>
      </div>
    );
  };
  
  export default NotFound;