import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrain } from '@fortawesome/free-solid-svg-icons';

function ScenicPlaces() {
  
  const places = [
    {
      name: 'Pangong Lake, Ladakh',
      image: 'https://imgs.search.brave.com/ZSxwWaNezB0WS5B5jimn6ww9sqq9uSB_sEd_1bEIy1A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by8xMDUy/OTM0MTYvUGFuZ29u/Zy1MYWtlLUxhZGFr/aC5qcGc_d2lkdGg9/NzQ4JnJlc2l6ZT00',
      description: ' A high-altitude lake renowned for its stunning blue waters that change color throughout the day, surrounded by towering mountains..',
      connectivity: 'It is accessible only by road via Khardung La, the highest motorable pass in the world. There are three routes to reach Nubra Valley from Leh.',
      airport: 'Kushok Bakula Rimpochee Airport',
      station: 'Jammu Tawi Station',
    },
    {
      name: 'Daman and Diu',
      image: 'https://imgs.search.brave.com/HHg-280t-HnwyJz_bM4-2_inGwMRvC54FENMTJjSSNY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzcwL0RhbWFuXzAx/MDEyMDEyXzIxNy5K/UEc',
      description: 'Former Portuguese colonies, these coastal towns offer quiet beaches, historic forts, and a laid-back atmosphere.',
      connectivity: 'Nearest airport: Nani Daman Airport\nNearest station: Vapi Station',
      airport: 'Nani Daman Airport',
      station: 'Vapi Station',
    },
    {
      name: 'Kumarakom, Kerala',
      image: 'https://imgs.search.brave.com/y0MmavX-kTXh-yiiZFwY3rkbafXXJGuwgOR4iaoscQM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlL3J6cHRp/djBmeXRpeWxjejNx/bDFjZXhjY3l4dDZf/MWphcm05NzBzZXZk/emk3YWhhdzB4bDFt/NmVpY19zaHV0dGVy/c3RvY2tfMTIzODky/MDc0NC53ZWJw',
      description: ' A tranquil backwater destination, known for its network of canals, lakes, and rivers lined with lush greenery and traditional houseboats.',
      connectivity: 'Nearest airport: Kochi Airport\nNearest station: Kottayam Station',
      airport: ' Kochi airport  ',
      station: 'Kottayam Station',
    },
    {
      name: 'Orchha, Madhya Pradesh',
      image: 'https://imgs.search.brave.com/KkctXB6hbeLGqRSIAyEPAhWbVb-iwufFOPjxyKQEtSg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTk4Mzg3ODA1LHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM',
      description: ' A hidden gem with stunning medieval architecture, including palaces and temples, set against the Betwa River.',
      connectivity: 'Nearest airport: Khajurao \nNearest station: Jhansi Station',
      airport: 'Khajurao Airport',
      station: 'Jhansi Station',
    },
    {
      name: 'KodiaKanal , Tamil Nadu',
      image: 'https://imgs.search.brave.com/mB1guUFLWM340GbbKuxdVVXSyt7y7WXrWQk5t3j7VVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hc3NldHR5cGUu/Y29tL291dGxvb2t0/cmF2ZWxsZXIvMjAy/My0xMC80ZWZlNDY3/Ny02NTU2LTQ2NzMt/ODc0Yy01NjViNmYw/MjBhYWMvc2h1dHRl/cnN0b2NrXzIzNzA5/MDczOTcuanBnP3c9/NjQwJmF1dG89Zm9y/bWF0LGNvbXByZXNz',
      description: ' Kodaikanal offers a delightful mix of natural beauty, cultural experiences, and a relaxing ambiance.',
      connectivity: 'Nearest airport: Kushok Bakula Rimpochee Airport\nNearest station: Jammu Tawi Station',
      airport: ' Madurai Airport',
      station: 'Coimbatore Station',
    },
    {
      name: 'Malshej Ghat, Maharashtra',
      image: 'https://imgs.search.brave.com/eJXUh-_jfNZOWOYVVBdwhbQ59CW1b2pEsfUU_8nENFg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvdHRk/X2ltYWdlcy9tbXQv/YWN0aXZpdGllcy90/X3Vmcy9tX01hbHNo/ZWolMjBHaGF0X0hh/cmlzaGNoYW5kcmFn/YWRfZm9ydF8xX2xf/NDgwXzY0MC5qcGc',
      description: 'Known for its misty mountains, waterfalls, and bird-watching opportunities, especially during the monsoon season.',
      connectivity: 'Nearest airport: Mumbai Airport\nNearest station: Markapur Station',
      airport: 'Mumbai Airport',
      station: 'Markapur Station',
    },
    {
        name: 'Dudhsagar Waterfalls, Goa',
        image: 'https://imgs.search.brave.com/U9pOJLarOC4nrgYrbqE7uZxa2y2oMYlsen0LeifqC1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJjL0R1ZGhzYWdh/cl9GYWxsc19Ucmlw/bGV0LmpwZw',
        description: 'The waterfall\'s natural beauty and secluded setting create a peaceful environment for meditation and inner contemplation.',
        connectivity: 'Nearest airport: Goa Airport\nNearest station: Kalyan Station',
        airport: 'Goa Airport',
        station: 'Kalyan Station',
      },
    {
      name: 'Dang, Gujarat',
      image: 'https://imgs.search.brave.com/YssGaqiUdbkEgkuG1b5gB8os3t8jndKsce5oHXwt9hc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/Mzk2ODUvVHJpcERv/Y3VtZW50LzE1NDA4/MDY2MzRfY2F2ZV84/Mjg2MDRfMTI4MC5q/cGc',
      description: 'A tribal region with lush forests, waterfalls, and a rich tribal culture, offering a peaceful retreat.',
      connectivity: 'Nearest airport: Surat Airport\nNearest station: Navsari Station',
      airport: 'Surat Airport',
      station: 'Navsari Station',
    },
    {
      name: 'Kavaratti, Lakshadweep',
      image: 'https://imgs.search.brave.com/R0uPpTporp2chpZCyky6gLJKKmUzWD2lobxQy7PifM8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvbGFr/c2hhZHdlZXAvbW10/L2FjdGl2aXRpZXMv/bV9MYWtzaGFkd2Vl/cF9hY3Rpdml0eV9L/YXZhcmF0dGlfbF8z/NjBfNjQwLmpwZw',
      description: 'The capital of Lakshadweep, known for its unspoiled beaches, turquoise lagoons, and diverse marine life, ideal for snorkeling and diving.',
      connectivity: 'Nearest airport: Agatti \nNearest station: NO trains',
      airport: 'Agatti airport',
      station: 'NO trains',
    },
  ];
  const handleViewDetails = (placeName) => {
    alert(`Details for ${placeName}`);
  };

  return (
    <div className="bg-[#faebd7] p-10">
      <h1 className="text-5xl font-bold text-teal-800 text-center mb-10 uppercase">
        Nature's Canvas
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

export default ScenicPlaces;
