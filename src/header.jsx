import React from "react";
import image from "./assets/mylogo.jpg";

function Header() {
  const handleLoginButtonClick = () => {
    alert(`Clicked Login`);
  };

  const handleNavButtonClick = (text) => {
    alert(`Clicked ${text}`);
  };

  return (
    <div className="bg-[#008080] p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
      <div className="flex items-center justify-center md:justify-start">
        <img
          src={image}
          alt="logo"
          className="w-[150px] h-[48px] rounded-full"
        />
      </div>
      <div className="text-white font-sans text-lg flex justify-center space-x-8 md:justify-center md:space-x-4">
        <button
          className="nav-button"
          onClick={() => handleNavButtonClick("Home")}
        >
          <span>Home</span>
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavButtonClick("Explore Destination")}
        >
          <span>Explore Destination</span>
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavButtonClick("Packages")}
        >
          <span>Packages</span>
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavButtonClick("Team")}
        >
          <span>Team</span>
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavButtonClick("About")}
        >
          <span>About</span>
        </button>
      </div>
      <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
        <button
          className="login-button px-4 py-2 bg-white text-[#008080] rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={handleLoginButtonClick}
        >
          <span>Login/Sign Up</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
