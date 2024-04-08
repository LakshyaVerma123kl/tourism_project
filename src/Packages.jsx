import React from "react";
import image1 from "./assets/adventure.jpg";
import image2 from "./assets/culture.jpg";
import image3 from "./assets/cuisine.jpg";
import image4 from "./assets/Heritage.jpg";

const PackageCard = ({ title, description, destinations, imageUrl }) => (
  <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-yellow-200 mx-auto transition duration-300 ease-in-out transform hover:shadow-xl">
    <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center cursor-default hover:cursor-pointer">
        {title}
      </div>
      <p className="text-gray-700 text-base text-center hover:text-teal-600 cursor-pointer">
        {description}
      </p>
      <p className="text-gray-700 text-base mt-2 text-center hover:text-teal-600 cursor-pointer">
        Destinations: {destinations.join(", ")}
      </p>
    </div>
    <div className="flex justify-center mt-2 mb-3">
      <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer">
        View Details
      </button>
    </div>
  </div>
);

const PackagesPage = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 mx-auto max-w-7xl">
    <PackageCard
      title="Adventure Package"
      description="Embark on thrilling adventures across India's diverse landscapes."
      destinations={["Himalayas", "Goa", "Kerala"]}
      imageUrl={image1}
    />
    <PackageCard
      title="Culture Package"
      description="Discover India's rich cultural heritage through vibrant festivals, traditional dances, and intricate art forms."
      destinations={["Rajasthan", "Varanasi", "Hampi"]}
      imageUrl={image2}
    />
    <PackageCard
      title="Cuisine Package"
      description="Indulge your taste buds with a gastronomic journey through India's diverse cuisine."
      destinations={["Delhi", "Mumbai", "Jaipur"]}
      imageUrl={image3}
    />
    <PackageCard
      title="Heritage Package"
      description="Explore India's fascinating heritage sites and architectural marvels."
      destinations={["Agra", "Khajuraho", "Ellora Caves"]}
      imageUrl={image4}
    />
  </div>
);

export default PackagesPage;
