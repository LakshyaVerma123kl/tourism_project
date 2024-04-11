import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrain } from '@fortawesome/free-solid-svg-icons';

function SpiritualPlaces() {
  
  const places = [
    {
      name: 'Nubra Valley, Ladakh',
      image: 'https://imgs.search.brave.com/SXinDARv0IdnzusV0jzHAZvWeFj0iIje9YYJo5Cpe0E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnR1/c2t0cmF2ZWwuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDMvQ2Ft/ZWwtU2FmYXJpLWlu/LU51YnJhLVZhbGxl/eS1MYWRha2gtMTAy/NHg4MzcuanBlZz9y/ZXNpemU9MTAyNCw4/Mzcmc3NsPTE',
      description: 'Diskit Monastery, the oldest and largest monastery in Nubra, offers peaceful meditation sessions and stunning views of the valley.',
      connectivity: 'It is accessible only by road via Khardung La, the highest motorable pass in the world. There are three routes to reach Nubra Valley from Leh.',
      airport: 'Kushok Bakula Rimpochee Airport',
      station: 'Jammu Tawi Station',
    },
    {
      name: 'Dudhsagar Waterfalls, Goa',
      image: 'https://imgs.search.brave.com/U9pOJLarOC4nrgYrbqE7uZxa2y2oMYlsen0LeifqC1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJjL0R1ZGhzYWdh/cl9GYWxsc19Ucmlw/bGV0LmpwZw',
      description: 'The waterfall\'s natural beauty and secluded setting create a peaceful environment for meditation and inner contemplation.',
      connectivity: 'Nearest airport: Goa Airport\nNearest station: Kulem Station',
      airport: 'Goa Airport',
      station: 'Kulem Station',
    },
    {
      name: 'Auroville, Tamil Nadu',
      image: 'https://imgs.search.brave.com/mg7XVBTXgnk8gjNwX61fRX5aYBZOFsjGVlc-HdBP-gc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y2L1RoZV9NYXRy/aW1hbmRpcl9pbl9B/dXJvdmlsbGUsX1Rh/bWlsX05hZHUsX0lu/ZGlhLmpwZw',
      description: 'It\'s a place where people from around the world live in harmony, focusing on sustainable living, spiritual practices, and personal growth.',
      connectivity: 'Nearest airport: Chennai Airport\nNearest station: Chennai Station',
      airport: 'Chennai Airport',
      station: 'Chennai Station',
    },
    {
      name: 'Thiruvannamalai, Tamil Nadu',
      image: 'https://imgs.search.brave.com/Sr-8yel3J-8xI4tKNmzG6Davvnp6U0KvkouoS4IIigE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm92ZWQuY29t/L2FzdHJvcGVkaWEv/YXNzZXRzL2ltYWdl/cy90ZW1wbGVzL2Fy/dW5hY2hhbGFtLmpw/Zw',
      description: 'Many spiritual devotees come here for its powerful energy and the Ramana Maharshi Ashram, dedicated to the teachings of the renowned sage Ramana Maharshi.',
      connectivity: 'Nearest airport: Chennai Airport\nNearest station: Chennai Station',
      airport: 'Chennai Airport',
      station: 'Chennai Station',
    },
    {
      name: 'Pachmarhi, Madhya Pradesh',
      image: 'https://imgs.search.brave.com/RqsLDUomSSzmfHJY5JX4yVmi_I_QIM7l0mOCuvdaui4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by8xMDMz/NzI2NDMvUGFuZGF2/YS1DYXZlcy1pbi1Q/YWNobWFyaGlNYWRo/eWEtUHJhZGVzaC5q/cGc_d2lkdGg9NzQ4/JnJlc2l6ZT00',
      description: 'It\'s where the Pandava brothers from the Mahabharata spent their time in exile. The Pandav Caves and the serene atmosphere make it a place for introspection and peace.',
      connectivity: 'Nearest airport: Rajabhoj Airport\nNearest station: Pipariya Station',
      airport: 'Rajabhoj Airport',
      station: 'Pipariya Station',
    },
    {
      name: 'Hemis, Ladakh',
      image: 'https://imgs.search.brave.com/v4KVvHz3mCvkZYuhv7mx0ZyYK2J3FWAih1rVVsdQR48/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVobGFkYWtoaW5k/aWEuY29tL3BpY3R1/cmVzL3RyYXZlbC9o/ZW1pcy1tb25hc3Rl/cnktMTkuanBlZw',
      description: 'The monastery itself is a spiritual haven, with ancient scriptures, thangkas, and a sense of deep history and tradition.',
      connectivity: 'Nearest airport: Kushok Bakula Rimpochee Airport\nNearest station: Jammu Tawi Station',
      airport: 'Kushok Bakula Rimpochee Airport',
      station: 'Jammu Tawi Station',
    },
    {
      name: 'Mallikarjuna Temple, Andhra Pradesh',
      image: 'https://imgs.search.brave.com/29zvSmJ5qYs7iNQ6Fk8LsU-JowrPestZTXkvTmqFDrQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGlsZ3JpbWFnZXRv/dXIuaW4vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8x/MS9CZXN0LVRpbWUt/VG8tVmlzaXQtTWFs/bGlrYXJqdW4tVGVt/cGxlLmpwZw',
      description: 'Mallikarjuna Temple, located in Srisailam, Andhra Pradesh, is a significant Jyotirlinga dedicated to Lord Shiva.',
      connectivity: 'Nearest airport: Kurnool Airport\nNearest station: Markapur Station',
      airport: 'Kurnool Airport',
      station: 'Markapur Station',
    },
    {
      name: 'Varanasi, Uttar Pradesh',
      image: 'https://imgs.search.brave.com/VzTxb-56T6QA6m-EwnDsnQJhO1wuNUPrDmHl4s0v3-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM3/OTg4MTY1L3Bob3Rv/L3ZhcmFuYXNpLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1m/RnBFTDE3TWlRSng1/TmtrTklWclRzZXNk/MkU4YjA0U0Nnempm/aFVtUTdnPQ',
      description: 'Situated on the banks of the Ganges River, it\'s a major pilgrimage site where millions come to bathe in the sacred waters, perform rituals, and seek spiritual purification.',
      connectivity: 'Nearest airport: Lal Bahadur Shastri International Airport\nNearest station: Varanasi Station',
      airport: 'Lal Bahadur Shastri International Airport',
      station: 'Varanasi Station',
    },
    {
      name: 'Bishnupur, West Bengal',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/RadhaShyam.jpg/266px-RadhaShyam.jpg',
      description: 'Visitors can explore these temples, known for their intricate terracotta carvings depicting scenes from the Ramayana and Mahabharata, offering a spiritual and artistic experience.',
      connectivity: 'Nearest airport: DumDum kolkata\nNearest station: Bishnupur Junction',
      airport: 'Dumdum Kolkata',
      station: 'Bishnupur Junction',
    },
  ];
  const handleViewDetails = (placeName) => {
    alert(`Details for ${placeName}`);
  };

  return (
    <div className="bg-[#faebd7] p-10">
      <h1 className="text-5xl font-bold text-teal-800 text-center mb-10 uppercase">
        Spiritual Places
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border-2 flex flex-col cursor-pointer shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={place.image}
              className="w-full rounded-t-xl object-cover h-48"
              alt={place.name}
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-bold text-xl text-teal-800 mb-2">{place.name}</h2>
              <p className="text-sm text-gray-700 mb-4">{place.description}</p>
              <div className="flex flex-col">
                <h3 className="font-bold">Connectivity:</h3>
                {place.airport && (
                  <p className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faPlane} className="mr-2" />
                    {place.airport}
                  </p>
                )}
                {place.station && (
                  <p className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faTrain} className="mr-2" />
                    {place.station}
                  </p>
                )}
              </div>
              <div className='flex justify-center mt-auto'>
                <button
                  className='border-2 rounded-2xl w-32 font-bold p-1 text-lg bg-teal-700 hover:bg-teal-500 hover:text-gray-300'
                  onClick={() => handleViewDetails(place.name)}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpiritualPlaces;
