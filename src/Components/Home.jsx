import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Platform 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is our home page. Sign up for a new account or log in to continue.
        </p>
        
        {/* Auth Buttons */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/signup')} 
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          <button 
            onClick={() => navigate('/login')} 
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl shadow hover:bg-gray-300 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home