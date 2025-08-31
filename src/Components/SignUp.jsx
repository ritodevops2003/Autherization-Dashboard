import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = () => {
        const payload = {
            name: name,
            role: role,
            email: email,
            password: password
        }
        console.log(payload);
        props.onSignup(payload);
        alert("Sign Up Successful! Please Login to continue.")
        navigate("/Login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create Your Account</h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Role</label>
              <input
                onChange={(e) => setRole(e.target.value)}
                type="text"
                placeholder="Enter your role"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleSignIn}
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate('/login')}>Login</span>
            </p>
          </div>
        </div>
      )
}

export default SignUp