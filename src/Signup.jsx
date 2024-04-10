import React, { useState } from "react";

const Input = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label
      className="block text-sm font-semibold mb-2 text-teal-900"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add next link to home page here
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-8">
      <div className="w-full lg:max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-center text-teal-900 text-3xl font-bold mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <Input
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          <div className="mb-4 relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*********"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center top-[1.5rem] px-3 bg-transparent text-teal-900"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <Input
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="*********"
          />

          <div>
            <label
              className="block text-teal-900 text-sm font-semibold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded my-4 w-full lg:w-auto focus:outline-none focus:shadow-outline transition-colors duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-teal-900">
        <p className="text-center mb-2">Already have an account?</p>
        <a
          href="#"
          className="block text-center text-teal-700 text-sm hover:text-teal-900 focus:outline-none focus:underline"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default SignUp;
