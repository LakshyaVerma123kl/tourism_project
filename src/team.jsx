import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import kushagraImage from "./assets/kushagra.jpg";
import LakshyaVImage from "./assets/LakshyaV.jpg";
import LakshyaKrImage from "./assets/Lakshyakr.jpg";
import NamanImage from "./assets/Naman.jpg";

function TeamMember({ imageUrl, name, role, githubLink, linkedinLink }) {
  return (
    <div
      className="team-member w-70 h-80 bg-[#f8f8ab] rounded-xl relative overflow-hidden group
     shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col
     justify-center items-center"
    >
      <div className="avatar w-40 h-40 bg-white rounded-full flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Profile"
          className="h-full w-full rounded-full object-contain"
        />
      </div>
      <h4 className="mt-3 text-teal-900 font-semibold text-lg">{name}</h4>
      <h5 className="mt-1 text-teal-700 text-sm">{role}</h5>
      <div className="mt-2 flex">
        <a href={githubLink} className="text-teal-900 mr-4">
          <FaGithub size={24} />
        </a>
        <a href={linkedinLink} className="text-teal-900">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      imageUrl: LakshyaKrImage,
      name: "Lakshya Kumar Singh",
      role: "(Full Stack Developer and React Supervisor)",
      githubLink: "https://github.com/Lakshya-249",
      linkedinLink: "http://www.linkedin.com/in/lakshya-kumar-singh-b52839263",
    },
    {
      imageUrl: kushagraImage,
      name: "Kushagra Vats",
      role: "(Full Stack Developer)",
      githubLink: "https://github.com/kushagravats",
      linkedinLink:
        "https://www.linkedin.com/in/kushagra-vats-4961a9269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imageUrl: LakshyaVImage,
      name: "Lakshya Verma",
      role: "(Project Coordinator, UI/UX Designer and Frontend Developer)",
      githubLink: "https://github.com/LakshyaVerma123kl",
      linkedinLink:
        "https://www.linkedin.com/in/lakshya-verma-a79745255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imageUrl: NamanImage,
      name: "Naman Soni",
      role: "(Frontend Developer and Documentation Specialist)",
      githubLink: "https://github.com/naman8586",
      linkedinLink:
        "https://www.linkedin.com/in/naman-soni-6977952b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <div className="team-container h-[45rem] my-10 flex flex-wrap justify-center items-center mx-5">
      <div className="team-wrapper grid grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;
