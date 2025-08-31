import React from "react";
import { Link, Route, useNavigate } from "react-router-dom";


const Header = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.setLoginState(false);
    alert("Logged Out Successfully!");
    navigate("/Login");
  };

  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold text-white tracking-wide">
          MyApp
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          

          {props.loginState ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg shadow transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
            <Link
            className="text-white hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300"
            to="/"
          >
            Home
          </Link>
              <Link
                className="text-white hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300"
                to="/signup"
              >
                Sign Up
              </Link>
              <Link
                className="text-white hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300"
                to="/login"
              >
                Login
              </Link>
            </>
          )}

          <Link
            className="text-white hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
