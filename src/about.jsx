import React from "react";

// Template for individual section in the About page
const AboutSection = ({ title, content }) => (
  <div className="flex flex-col justify-between bg-gray-100 text-gray-800 font-serif border rounded-lg p-6 max-w-md shadow-lg transition-transform transform-gpu hover:shadow-xl hover:scale-105 cursor-pointer">
    {/* Title of the section */}
    <h3 className="mb-4 text-xl font-semibold text-teal-900">{title}</h3>
    {/* Content of the section */}
    <p>{content}</p>
  </div>
);

function About() {
  return (
    <div className="flex justify-center my-12">
      {/* Grid layout for the About page sections */}
      <div className="grid grid-cols-2 gap-6 lg:gap-8">
        {/* About section */}
        <AboutSection
          title="Explore Nature's Beauty"
          content="Discover breathtaking landscapes, serene beaches, and lush forests. Immerse yourself in the tranquility of nature's wonders."
        />
        {/* Culture section */}
        <AboutSection
          title="Experience Rich Culture"
          content="Delve into the vibrant tapestry of local traditions, festivals, and cuisine. Immerse yourself in the heart and soul of diverse cultures."
        />
        {/* Adventure section */}
        <AboutSection
          title="Embark on Adventures"
          content="Unleash your adventurous spirit with thrilling activities like trekking, diving, and wildlife safaris. Create unforgettable memories."
        />
        {/* Hospitality section */}
        <AboutSection
          title="Experience Warm Hospitality"
          content="Indulge in unparalleled hospitality as you stay in cozy homestays, luxurious resorts, and boutique hotels. Feel at home away from home."
        />
      </div>
    </div>
  );
}

export default About;
