import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-center text-teal-900 text-3xl font-bold mb-6">
          Login
        </h2>
        <div className="mb-6">
          <label
            className="block text-teal-900 text-sm font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username/email"
          />
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-teal-900 text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="*********"
          />
          <button
            className="absolute top-[2.2rem] right-0 mr-3 text-teal-500 hover:text-teal-700 focus:outline-none"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="button"
          >
            Login
          </button>
          <a
            href="#"
            className="text-teal-700 text-sm hover:text-teal-900 focus:outline-none focus:underline"
          >
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="mt-8 text-teal-900">
        <p className="text-center mb-2">Don't have an account?</p>
        <a
          href="#"
          className="block text-center text-teal-700 text-sm hover:text-teal-900 focus:outline-none focus:underline"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Login;
