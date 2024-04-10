import React from "react";
import image1 from "../assets/Rock.jpg";
import image2 from "../assets/Sukhna.jpeg";
import image3 from "../assets/Rose.jpeg";

const Chandigarh = () => {
  const handleClick = () => {
    alert("You clicked on View Details!");
  };
  const places = [
    {
      name: "Rock Garden",
      image: image1,
      description: "Sculpture garden made from industrial and home waste",
      speciality:
        "Rock Garden, also known as Nek Chand's Rock Garden, is a unique sculpture garden located in Sector 1 of Chandigarh. It was created by Nek Chand, a government official, using industrial and home waste materials. The garden is a testament to human creativity and environmental conservation, featuring sculptures made from recycled materials such as broken bangles, tiles, and ceramic pots.",
    },
    {
      name: "Sukhna Lake",
      image: image2,
      description: "Artificial lake at the foothills of the Himalayas",
      speciality:
        "Sukhna Lake is an artificial reservoir located at the foothills of the Shivalik range in Chandigarh. It was created in 1958 by damming the Sukhna Choe stream. The lake is a popular spot for recreational activities such as boating, jogging, and picnicking. Visitors can also enjoy stunning views of the surrounding hills and sunset.",
    },
    {
      name: "Rose Garden",
      image: image3,
      description: "Largest rose garden in Asia",
      speciality:
        "Rose Garden, also known as Zakir Hussain Rose Garden, is the largest rose garden in Asia, spanning over 30 acres in Chandigarh's Sector 16. It features thousands of rose bushes representing hundreds of different varieties. The garden hosts an annual rose festival, attracting visitors from around the world to admire the colorful blooms and participate in cultural events.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Chandigarh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Chandigarh, India's first planned city, is known for its modern
        architecture, well-maintained gardens, and vibrant culture. Explore its
        unique attractions and enjoy the city's serene ambiance.
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
              <p className="text-xs text-gray-600 hover:text-teal-400 transition-colors duration- mb-2">
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

export default Chandigarh;
