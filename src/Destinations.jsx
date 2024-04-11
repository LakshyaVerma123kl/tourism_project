import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const statesAndUTs = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = statesAndUTs.filter((state) =>
      state.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleClick = (state) => {
    alert(`Clicked on ${state}`);
    // yaha se aage ke page add kr skta hai
  };

  return (
    <div className=" absolute top-1.5 z-20 bg-white rounded-xl right-[4rem]">
      <div className="relative">
        <input
          type="text"
          placeholder="Discover your next adventure..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 pr-10 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <BsSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-teal-500 hover:opacity-80 transition-colors duration-300" />
      </div>
      <ul>
        {searchResults.map((result, index) => (
          <li
            key={index}
            className="mb-2 cursor-pointer hover:text-teal-600"
            onClick={() => handleClick(result)}
          >
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
