import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./assets/meghalaya.jpg";
import image2 from "./assets/Kerala.jpg";
import image3 from "./assets/Agra.jpg";
import image4 from "./assets/Punjab.jpg";
import image5 from "./assets/Tamilnadu.jpg";
import image6 from "./assets/Ladakh.jpg";

// Array of images with their source, alt text, and caption
const images = [
  { src: image, alt: "Meghalaya", caption: "Meghalaya" },
  { src: image2, alt: "Kerala", caption: "Kerala" },
  { src: image3, alt: "Agra", caption: "Agra" },
  { src: image4, alt: "Punjab", caption: "Punjab" },
  { src: image5, alt: "Tamil Nadu", caption: "Tamil Nadu" },
  { src: image6, alt: "Ladakh", caption: "Ladakh" },
];

// Component for the Picture Carousel
const PictureCarousel = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "w-2/3 mx-auto max-w-screen-lg",
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F5F5DC] px-4 py-8">
      {/* Header section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-teal-600">
          Explore Beautiful Places
        </h1>
        <p className="text-lg text-taupe-600 font-semibold">
          Discover stunning destinations across India.
        </p>
      </div>
      {/* Slider component */}
      <Slider {...settings}>
        {/* Mapping through images and rendering each as a slide */}
        {images.map((img, index) => (
          <ImageSlide
            key={index}
            src={img.src}
            alt={img.alt}
            caption={img.caption}
          />
        ))}
      </Slider>
    </div>
  );
};

// Component for individual image slide
const ImageSlide = ({ src, alt, caption }) => (
  <div className="h-64 overflow-hidden rounded-lg shadow-lg relative">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
    />
    {/* Caption overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
      <p>{caption}</p>
    </div>
  </div>
);

// Component for custom previous arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 z-10 cursor-pointer"
      style={{ transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

// Component for custom next arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 z-10 cursor-pointer"
      style={{ transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export default PictureCarousel;
