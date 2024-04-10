import React from "react";
import image1 from "../assets/Neer.jpeg";
import image2 from "../assets/Ujjata.jpg";
import image3 from "../assets/Unakoti.jpe";

const Tripura = () => {
  const places = [
    {
      name: "Neermahal",
      image: image1,
      description: "Water palace in the Rudrasagar Lake",
      speciality:
        "Neermahal, meaning 'Water Palace', is a royal palace located in the middle of Rudrasagar Lake in Tripura. It was built in the 1930s as a summer resort for the royal family.",
    },
    {
      name: "Ujjayanta Palace",
      image: image2,
      description: "Palace turned into a museum in Agartala",
      speciality:
        "Ujjayanta Palace, located in Agartala, is a historic palace that has been converted into a museum showcasing the cultural heritage of Tripura. It houses artifacts, sculptures, paintings, and royal regalia.",
    },
    {
      name: "Unakoti",
      image: image3,
      description: "Ancient rock-cut sculptures",
      speciality:
        "Unakoti is an archaeological site known for its rock-cut sculptures dating back to the 7th–9th centuries CE. It features thousands of rock carvings and sculptures of Hindu deities and figures.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Tripura!
      </h1>
      <p className="text-lg mb-6 text-center">
        Tripura, known for its rich cultural heritage and natural beauty, offers
        a glimpse into the history and traditions of the region.
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
              <p className="text-xs text-gray-600 hover:text-teal-400 transition-colors duration-300">
                {place.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tripura;
