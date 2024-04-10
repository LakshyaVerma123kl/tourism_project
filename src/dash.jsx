import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faMapMarkedAlt,
  faPlaneDeparture,
  faGem,
  faMountain,
  faMedal,
  faHistory,
  faTimes,
  faUsers,
  faHotel,
  faCalendarAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function Dash() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (itemName) => {
    alert(`You have clicked on ${itemName}`);
  };

  return (
    <div className="relative flex h-screen">
      {/* open button */}
      {!isOpen && (
        <button
          className="absolute top-5 left-5 z-10 bg-teal-600 text-white px-4 py-2 rounded-md shadow-md"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      {/* Sliding menu */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-teal-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        {isOpen && (
          <button
            className="absolute top-5 right-5 z-10 bg-teal-600 text-white px-4 py-2 rounded-md shadow-md"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}

        {/* Menu items */}
        <ul className="p-4 mt-16">
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Profile")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span>Profile</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Map")}
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            <span>Map</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Upcoming Trips")}
          >
            <FontAwesomeIcon icon={faPlaneDeparture} className="mr-2" />
            <span>Upcoming Trips</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Curated Options")}
          >
            <FontAwesomeIcon icon={faGem} className="mr-2" />
            <span>Curated Options</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Off Beat Locations")}
          >
            <FontAwesomeIcon icon={faMountain} className="mr-2" />
            <span>Off Beat Locations</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Achievements")}
          >
            <FontAwesomeIcon icon={faMedal} className="mr-2" />
            <span>Achievements</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Curated Stays")}
          >
            <FontAwesomeIcon icon={faHotel} className="mr-2" />
            <span>Curated Stay</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Community")}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            <span>Community</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Events")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            <span>Events</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Customer Support")}
          >
            <FontAwesomeIcon icon={faHeadset} className="mr-2" />
            <span>Customer Support</span>
          </li>
          <li
            className="py-3 flex items-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 rounded-md"
            onClick={() => handleMenuItemClick("Past Trips")}
          >
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            <span>Past Trips</span>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div
        className={`flex flex-col items-start h-full ${
          isOpen ? "ml-56" : ""
        } w-full bg-taupe-500 text-taupe-100 font-sans rounded-r-[.5rem]`}
        style={{ maxWidth: isOpen ? "calc(100vw - 56px)" : "100%" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">Welcome to Your Dashboard!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula odio nec dui accumsan, vel consectetur neque condimentum.
            Integer a felis dapibus, consequat arcu eu, tempor nisi. Proin
            tincidunt, elit vitae rutrum accumsan, lorem augue tempus tortor,
            nec malesuada ex turpis in sem. Sed auctor hendrerit risus, id
            dictum neque facilisis in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dash;
