import React from "react";
import image1 from "../assets/Chitrakote.jpg";
import image2 from "../assets/Tirathgarh.jpeg";
import image3 from "../assets/Kangery.jpg";

const Chhattisgarh = () => {
  const places = [
    {
      name: "Chitrakote Falls",
      image: image1,
      description: "Widest waterfall in India",
      speciality:
        "Chitrakote Falls, also known as the 'Niagara Falls of India', is located on the Indravati River in Bastar district. It is the widest waterfall in India and offers breathtaking views, especially during the monsoon season.",
    },
    {
      name: "Tirathgarh Falls",
      image: image2,
      description: "Scenic waterfall surrounded by lush greenery",
      speciality:
        "Tirathgarh Falls is a picturesque waterfall located near Jagdalpur in Bastar district. It is surrounded by dense forests and offers a serene environment for nature lovers and photographers.",
    },
    {
      name: "Kanger Valley National Park",
      image: image3,
      description: "Rich biodiversity and limestone caves",
      speciality:
        "Kanger Valley National Park, located in Bastar district, is known for its rich biodiversity, dense forests, and unique limestone caves. It is home to various species of flora and fauna, including the endangered Bastar hill myna.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Chhattisgarh!
      </h1>
      <p className="text-lg mb-6 text-center">
        Chhattisgarh, known as the "Rice Bowl of India", is a state blessed with
        natural beauty, vibrant culture, and historical heritage.
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

export default Chhattisgarh;
