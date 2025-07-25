import React, { useEffect, useState } from "react";
import { Users, ExternalLink } from "lucide-react";

// Import partner images
import arkansasImg from "@/assets/images/arkansas.png";
import roanokeImg from "@/assets/images/roanoke.png";
import ukentucyImg from "@/assets/images/ukentucy.png";
import jackImg from "@/assets/images/jack.png";
import lissaImg from "@/assets/images/lissa.png";
import yvetteImg from "@/assets/images/yvette.png";


const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredUniversity, setHoveredUniversity] = useState<number | null>(
    null
  );
  const [hoveredOfficer, setHoveredOfficer] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("affiliates-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const universities = [
    {
      name: "Arkansas State University",
      logo: arkansasImg,
      website: "https://www.astate.edu/",
      description:
        "A vibrant campus community with comprehensive academic programs",
    },
    {
      name: "University of Kentucky",
      logo: ukentucyImg,
      website: "https://www.uky.edu/",
      description: "Kentucky's flagship institution of higher education",
    },
    {
      name: "Roanoke College",
      logo: roanokeImg,
      website: "https://www.roanoke.edu/",
      description:
        "A private liberal arts college in the beautiful Roanoke Valley",
    },
  ];

  const visaOfficers = [
    {
      name: "Jack Runkle",
      logo: jackImg,
      website: "visainterviewcoach.com",
      promo: "SPRINGFALL - 20% OFF",
      description: "Former consular officer with 15+ years experience",
    },
    {
      name: "Lissa Anderson",
      logo: lissaImg,
      website: "argovisa.com",
      promo: "Email with Spring/Fall USA name for discount",
      description: "Specializing in complex visa cases and appeals",
    },
    {
      name: "Yvette Bansal",
      logo: yvetteImg,
      website: "udetivisa.com",
      promo: "SPRINGFALL20 - 20% OFF",
      description: "Expert in student visa interview preparation",
    },
  ];

  return (
    <section
      id="affiliates-section"
      className="py-20 bg-gradient-to-b from-blue-700 via-black to-blue-950"
    >
      <div className="container-custom mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3  mb-4">
            <Users size={28} className="text-white" />
            <h2 className="text-4xl font-serif font-bold text-white inline-block">
              Our <span className="text-white/90">Affiliates</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Our trusted partnerships ensure you receive expert guidance and
            support throughout your visa journey.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-medium text-white mb-10 text-center">
            <span className="border-b-2 border-white pb-2">
              University Affiliates
            </span>
          </h3>

          <div className="flex justify-center gap-12 flex-wrap">
            {universities.map((university, index) => (
              <div
                key={university.name}
                className={`transition-all duration-700 delay-${
                  index * 150
                } transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setHoveredUniversity(index)}
                onMouseLeave={() => setHoveredUniversity(null)}
              >
                <div className="group relative flex flex-col items-center min-h-[320px]">
                  <div
                    className={`
                      relative z-10 rounded-full p-2 border-2 border-transparent
                      bg-gradient-to-br from-white to-blue-50 overflow-hidden 
                      shadow-lg transition-all duration-500
                      ${hoveredUniversity === index ? "border-visa-navy" : ""}
                    `}
                  >
                    <div
                      className={`
                        bg-white rounded-full p-4 flex items-center justify-center 
                        h-32 w-32 overflow-hidden transition-transform duration-300 
                        transform ${
                          hoveredUniversity === index
                            ? "scale-110"
                            : "scale-100"
                        }
                      `}
                    >
                      <img
                        src={university.logo}
                        alt={`${university.name} logo`}
                        className="object-contain max-h-20 max-w-20"
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center max-w-[220px]">
                    <h4 className="font-medium text-white text-lg">
                      {university.name}
                    </h4>
                    <div
                      className={`
                        h-24 mt-2 transition-opacity duration-500 ease-in-out 
                        ${
                          hoveredUniversity === index
                            ? "opacity-100"
                            : "opacity-0"
                        }
                        
                      `}
                    >
                      <p className="text-gray-300 text-sm mb-3">
                        {university.description}
                      </p>
                      <a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-visa-blue hover:text-visa-navy text-sm font-medium "
                      >
                        <span className=" cursor-pointer">Visit Website</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-medium text-white mb-10 text-center">
            <span className="border-b-2 border-white pb-2">
              Visa Officer Affiliates
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            {visaOfficers.map((officer, index) => (
              <div
                key={officer.name}
                className={`
                  transition-all duration-1000 delay-${100 * (index + 1)}
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                onMouseEnter={() => setHoveredOfficer(index)}
                onMouseLeave={() => setHoveredOfficer(null)}
              >
                <div className="relative group min-h-[320px]">
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-br from-visa-blue/5 to-visa-navy/10 
                      rounded-lg -z-10 transition-transform duration-500 
                      ${
                        hoveredOfficer === index
                          ? "scale-105 opacity-100"
                          : "opacity-0 scale-100"
                      }
                    `}
                  ></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-5">
                      <div
                        className={`
                          absolute inset-0 rounded-full 
                          bg-gradient-to-r from-visa-blue to-visa-gold 
                          animate-spin-slow opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                        `}
                      ></div>

                      <div className="absolute inset-0.5 bg-white rounded-full"></div>

                      <img
                        src={officer.logo}
                        alt={`${officer.name} photo`}
                        className="h-28 w-28 rounded-full object-cover relative z-10 border-2 border-white transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h4 className="font-semibold text-xl text-white mb-1 transition-all duration-300 group-hover:text-visa-blue">
                      {officer.name}
                    </h4>

                    <a
                      href={`https://${officer.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-visa-blue flex items-center gap-1 mb-3 text-sm hover:underline"
                    >
                      {officer.website}
                      <ExternalLink size={12} />
                    </a>

                    <p className="text-gray-400 mb-4 text-sm max-w-xs">
                      {officer.description}
                    </p>

                    <div
                      className={`
                        h-16 transition-opacity duration-500 ease-in-out 
                        ${
                          hoveredOfficer === index ? "opacity-100" : "opacity-0"
                        }
                        pointer-events-none
                      `}
                    >
                      <div className=" p-3 rounded-lg inline-block">
                        <span className="inline-block bg-white px-3 py-1.5 rounded-full text-visa-blue font-medium shadow-sm text-xs">
                          {officer.promo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`my-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <blockquote className="italic text-xl text-gray-400 max-w-3xl mx-auto relative">
            <div className="text-5xl text-gray-400 font-serif absolute -top-6 left-0">
              "
            </div>
            <p className="relative z-10">
              Spring/Fall USA has been an invaluable resource for our
              international students seeking F-1 visas.
            </p>
            <div className="text-5xl text-gray-400 font-serif absolute -bottom-10 right-0">
              "
            </div>
            <div className="w-16 h-1 bg-white mx-auto my-6"></div>
            <cite className="not-italic font-semibold text-white text-lg block">
              — Dr. Sarah Johnson, International Student Advisor
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
