import React from "react";
import image1 from "../assets/Char.jpeg";
import image2 from "../assets/Golkonda.jpg";
import image3 from "../assets/Ramoji.jpeg";

const Telangana = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Charminar",
      image: image1,
      description: "Iconic monument in Hyderabad",
      speciality:
        "Charminar is an iconic monument and mosque located in the heart of Hyderabad. It was built in 1591 by Sultan Muhammad Quli Qutb Shah to commemorate the end of a deadly plague.",
    },
    {
      name: "Golkonda Fort",
      image: image2,
      description: "Historic fort in Hyderabad",
      speciality:
        "Golkonda Fort, also known as Golla Konda, is a historic fort located in Hyderabad. It is known for its impressive architecture, acoustics system, and diamond mines that once produced renowned diamonds like the Koh-i-Noor.",
    },
    {
      name: "Ramoji Film City",
      image: image3,
      description: "Largest film studio complex in the world",
      speciality:
        "Ramoji Film City, located in Hyderabad, is the largest film studio complex in the world. It offers visitors a behind-the-scenes look at the filmmaking process, along with entertainment options such as amusement parks and guided tours.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Telangana!
      </h1>
      <p className="text-lg mb-6 text-center">
        Telangana, known for its rich history, vibrant culture, and bustling
        cities, offers a mix of historic landmarks and modern attractions.
      </p>

      {/* Popular Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="relative cursor-pointer">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-64 object-cover rounded-lg mb-2 shadow-md"
            />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-semibold mb-2">{place.name}</p>
              <p className="text-sm mb-4">{place.description}</p>
              <p className="text-xs text-gray-600 hover:text-teal-400 transition-colors duration-300 mb-2">
                {place.speciality}
              </p>
              <button
                onClick={handleClick}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Telangana;
