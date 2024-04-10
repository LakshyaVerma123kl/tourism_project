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
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Dash() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Profile"); // Initially set to "Profile"

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item when a menu item is clicked
    alert(`You have clicked on ${itemName}`);
  };

  return (
    <div className="relative flex h-screen">
      {/* open button */}
      {!isOpen && (
        <button
          className="absolute top-3 left-3 z-10 bg-teal-600 text-white px-4 py-2 rounded-md shadow-md"
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
            className="absolute top-2 right-3 z-10 bg-teal-600 text-white px-4 py-2 rounded-md shadow-md"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}

        {/* Menu items */}
        <ul className="p-4 mt-12">
          <MenuItem
            icon={faUser}
            itemName="Profile"
            isActive={activeItem === "Profile"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faMapMarkedAlt}
            itemName="Map"
            isActive={activeItem === "Map"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faPlaneDeparture}
            itemName="Upcoming Trips"
            isActive={activeItem === "Upcoming Trips"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faGem}
            itemName="Curated Options"
            isActive={activeItem === "Curated Options"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faMountain}
            itemName="Off Beat Locations"
            isActive={activeItem === "Off Beat Locations"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faMedal}
            itemName="Achievements"
            isActive={activeItem === "Achievements"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faHotel}
            itemName="Curated Stay"
            isActive={activeItem === "Curated Stay"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faGlobe}
            itemName="Culture Connect"
            isActive={activeItem === "Culture Connect"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faUsers}
            itemName="Community"
            isActive={activeItem === "Community"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faCalendarAlt}
            itemName="Events"
            isActive={activeItem === "Events"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faHeadset}
            itemName="Customer Support"
            isActive={activeItem === "Customer Support"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
          <MenuItem
            icon={faHistory}
            itemName="Past Trips"
            isActive={activeItem === "Past Trips"} // Check if the item is active
            onClick={handleMenuItemClick}
          />
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

// Reusable menu item component
const MenuItem = ({ icon, itemName, isActive, onClick }) => {
  return (
    <li
      className={`py-[.71rem] flex items-center cursor-pointer ${
        isActive
          ? "bg-gray-100 bg-opacity-20 pl-1"
          : "hover:bg-gray-100 hover:bg-opacity-20"
      } rounded-md`}
      onClick={() => onClick(itemName)}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span>{itemName}</span>
    </li>
  );
};

export default Dash;
