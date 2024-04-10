import React from "react";
import image1 from "../assets/Rohtang.jpg";
import image2 from "../assets/Shimla.jpeg";
import image3 from "../assets/Manali.jpg";

const HimachalPradesh = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Rohtang Pass",
      image: image1,
      description: "High mountain pass in the Pir Panjal Range",
      speciality:
        "Rohtang Pass is a high mountain pass located on the eastern Pir Panjal Range of the Himalayas. It connects the Kullu Valley with the Lahaul and Spiti Valleys of Himachal Pradesh.",
    },
    {
      name: "Shimla",
      image: image2,
      description: "Capital city of Himachal Pradesh",
      speciality:
        "Shimla, the capital city of Himachal Pradesh, is famous for its colonial architecture, scenic beauty, and pleasant climate. It was once the summer capital of British India.",
    },
    {
      name: "Manali",
      image: image3,
      description: "Popular hill station in the Kullu district",
      speciality:
        "Manali is a popular hill station nestled in the mountains of the Kullu district. It is known for its picturesque landscapes, adventure activities, and vibrant culture.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Himachal Pradesh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Himachal Pradesh, nestled in the lap of the Himalayas, is known for its
        stunning natural beauty, serene landscapes, and adventure sports.
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

export default HimachalPradesh;
