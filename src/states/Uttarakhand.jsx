import React from "react";
import image1 from "../assets/Valley_of_Flowers.jpg";
import image2 from "../assets/Badrinath.jpg";
import image3 from "../assets/Nainital.jpg";

const Uttarakhand = () => {
  const places = [
    {
      name: "Valley of Flowers",
      image: image1,
      description: "National Park known for its alpine flowers",
      speciality:
        "Valley of Flowers is a UNESCO World Heritage Site located in the Chamoli district of Uttarakhand. It is known for its stunning alpine flowers, diverse flora and fauna, and breathtaking landscapes.",
    },
    {
      name: "Badrinath",
      image: image2,
      description: "Hindu pilgrimage site in the Himalayas",
      speciality:
        "Badrinath is a sacred town and a major pilgrimage site in the Chamoli district of Uttarakhand. It is dedicated to Lord Vishnu and is one of the Char Dham pilgrimage destinations.",
    },
    {
      name: "Nainital",
      image: image3,
      description: "Hill station and lake district",
      speciality:
        "Nainital is a popular hill station and lake district in Uttarakhand. It is known for its scenic beauty, pleasant climate, and recreational activities such as boating, trekking, and horse riding.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Uttarakhand!
      </h1>
      <p className="text-lg mb-6 text-center">
        Uttarakhand, often referred to as the "Land of Gods", is known for its
        pristine natural beauty, spiritual significance, and adventure
        opportunities.
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

export default Uttarakhand;
