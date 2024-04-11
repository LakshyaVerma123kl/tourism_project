import React from "react";
import image1 from "./assets/adventure.jpg";
import image2 from "./assets/culture.jpg";
import image3 from "./assets/cuisine.jpg";
import image4 from "./assets/Heritage.jpg";

const HomeSection = ({ title, description, longDescription, imageUrl }) => (
  <div className="flex flex-col items-center w-[29rem] m-4 justify-start hover:cursor-pointer rounded-lg shadow-lg pb-5 transition duration-300 transform hover:shadow-xl">
    <img src={imageUrl} alt={title} className="w-full mb-4" />
    <h3 className="text-2xl font-bold text-teal-600 mb-2 px-2">{title}</h3>
    <p className="text-gray-800 text-center mb-4 hover:text-teal-600 px-2">
      {description}
    </p>
    <p className="text-gray-700 text-center hover:text-teal-600 px-2">
      {longDescription}
    </p>
  </div>
);

const FeaturesBox = () => (
  <div className="bg-gray-50 my-auto rounded-lg shadow-lg px-10 mx-auto max-sm:w-full text-left py-[1rem] transition duration-300 transform hover:shadow-xl">
    <h3 className=" text-[4.5rem] font-black text-teal-600 text-opacity-50 mb-4">
      Features after Login
    </h3>
    <ul className="text-gray-800 space-y-5 px-5">
      <li className="hover:text-teal-600">
        Access to exclusive travel guides.
      </li>
      <li className="hover:text-teal-600">
        Customized trip recommendations based on your interests.
      </li>
      <li className="hover:text-teal-600">
        Exclusive discounts on bookings for members on hotels and tickets.
      </li>
      <li className="hover:text-teal-600">
        Personalized itinerary planning with AI-driven suggestions.
      </li>
      <li className="hover:text-teal-600">
        24/7 customer support for all your travel queries.
      </li>
      <li className="hover:text-teal-600">
        Integration with social media platforms for sharing your travel
        experiences.
      </li>
      <li className="hover:text-teal-600">
        Interactive map for better navigation and planning.
      </li>
      <li className="hover:text-teal-600">
        Offbeat location suggestions based on your preferences.
      </li>
    </ul>
  </div>
);

const Section = () => (
  <div className="flex flex-wrap justify-evenly py-5">
    <HomeSection
      title="Adventure"
      description="Embark on thrilling adventures across India's diverse landscapes."
      longDescription="Explore the majestic Himalayas, pristine beaches, and tranquil backwaters of Kerala."
      imageUrl={image1}
    />
    <HomeSection
      title="Culture"
      description="Discover India's rich cultural heritage through vibrant festivals, traditional dances, and intricate art forms."
      longDescription="Visit ancient temples, palaces, and UNESCO World Heritage sites."
      imageUrl={image2}
    />
    <HomeSection
      title="Cuisine"
      description="Indulge your taste buds with a gastronomic journey through India's diverse cuisine."
      longDescription="Savor spicy curries, aromatic biryanis, and delectable street food delights."
      imageUrl={image3}
    />
    <HomeSection
      title="Heritage"
      description="Explore India's fascinating heritage sites and architectural marvels."
      longDescription="Discover ancient temples, majestic forts, and intricately carved caves."
      imageUrl={image4}
    />
    <div className="md:col-span-2 lg:col-span-2 flex justify-center">
      <FeaturesBox />
    </div>
  </div>
);

export default Section;
