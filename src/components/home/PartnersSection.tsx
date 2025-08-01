import React, { useEffect, useRef, useState } from "react";
import { Users, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Partner images
import arkansasImg from "@/assets/images/arkansas.png";
import roanokeImg from "@/assets/images/roanoke.png";
import ukentucyImg from "@/assets/images/ukentucy.png";
import jackImg from "@/assets/images/jack.png";
import lissaImg from "@/assets/images/lissa.png";
import yvetteImg from "@/assets/images/yvette.png";

const PartnersSection = () => {
  const [hoveredUniversity, setHoveredUniversity] = useState<number | null>(null);
  const [hoveredOfficer, setHoveredOfficer] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-reveal", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const universities = [
    {
      name: "Arkansas State University",
      logo: arkansasImg,
      website: "https://www.astate.edu/",
      description: "A vibrant campus community with comprehensive academic programs",
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
      description: "A private liberal arts college in the beautiful Roanoke Valley",
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
      ref={sectionRef}
      className="py-24 px-4 bg-[#0D0D0D] bg-gradient-to-b from-black via-[#0D0D0D] to-[#000511]"
    >
     {/* University Affiliates Section */}
<div className="animate-reveal mb-20">
  <h3 className="text-2xl font-semibold text-white text-center mb-10">
    <span className="border-b-2 border-blue-500 pb-2">University Affiliates</span>
  </h3>

  <div className="flex flex-wrap justify-center gap-10">
    {universities.map((uni, index) => (
      <div
        key={index}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 w-[280px] hover:scale-105 transition-transform duration-500 group"
        onMouseEnter={() => setHoveredUniversity(index)}
        onMouseLeave={() => setHoveredUniversity(null)}
      >
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 mb-4 rounded-full overflow-hidden border-2 border-blue-600">
            <img src={uni.logo} alt={uni.name} className="object-contain w-full h-full" />
          </div>
          <h4 className="text-white text-lg font-medium mb-2">{uni.name}</h4>
          <p className="text-sm text-white/60 mb-3 min-h-[48px]">{uni.description}</p>
          <a
            href={uni.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-sm flex items-center gap-1"
          >
            Visit Website <ExternalLink size={12} />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Visa Officer Affiliates Section */}
<div className="animate-reveal mb-10">
  <h3 className="text-2xl font-semibold text-white text-center mb-10">
    <span className="border-b-2 border-blue-500 pb-2">Visa Officer Affiliates</span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {visaOfficers.map((officer, index) => (
      <div
        key={index}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-transform duration-500 group text-center"
        onMouseEnter={() => setHoveredOfficer(index)}
        onMouseLeave={() => setHoveredOfficer(null)}
      >
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={officer.logo}
              alt={officer.name}
              className="h-24 w-24 rounded-full object-cover border-2 border-blue-500"
            />
          </div>
          <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {officer.name}
          </h4>
          <a
            href={`https://${officer.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm hover:underline mb-2"
          >
            {officer.website}
          </a>
          <p className="text-sm text-white/60 min-h-[48px]">{officer.description}</p>
          <div
            className={`mt-3 transition-opacity duration-300 ${
              hoveredOfficer === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              {officer.promo}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default PartnersSection;
