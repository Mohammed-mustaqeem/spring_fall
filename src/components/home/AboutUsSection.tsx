import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { ArrowRight,  Globe, Award, School, Users } from 'lucide-react';
// import teamImage from '@/assets/images/springfall.png';
// import { FaArrowRight } from 'react-icons/fa';
import Card from '../common/Cards';
import CardSection from '../common/CardSection';
import aboutus from '../../assets/images/aboutus.jpg'

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countStats, setCountStats] = useState({
    students: 0,
    countries: 0, 
    experiences: 0,
    universities: 0
  });
  const finalStats = {
    students: 100000,
    countries: 5,
    experiences: 1000,
    universities: 3
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Animate count up when section is visible
  const startCountAnimation = () => {
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = {
      students: finalStats.students / (duration / interval),
      countries: finalStats.countries / (duration / interval),
      experiences: finalStats.experiences / (duration / interval),
      universities: finalStats.universities / (duration / interval)
    };
    
    let current = {
      students: 0,
      countries: 0,
      experiences: 0,
      universities: 0
    };
    
    const timer = setInterval(() => {
      current.students += steps.students;
      current.countries += steps.countries;
      current.experiences += steps.experiences;
      current.universities += steps.universities;
      
      setCountStats({
        students: Math.min(Math.floor(current.students), finalStats.students),
        countries: Math.min(Math.floor(current.countries), finalStats.countries),
        experiences: Math.min(Math.floor(current.experiences), finalStats.experiences),
        universities: Math.min(Math.floor(current.universities), finalStats.universities)
      });
      
      if (
        current.students >= finalStats.students &&
        current.countries >= finalStats.countries &&
        current.experiences >= finalStats.experiences &&
        current.universities >= finalStats.universities
      ) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  };

  return (
    <section
      id="about-section"
      className="py-10 relative overflow-hidden  bg-gradient-to-b from-blue-700 via-black to-blue-700"
    >
      <div>
        <div className="text-white px-4 sm:px-6 md:px-10 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto flex flex-col space-y-8 items-center">
            {/* Row 1: pill image + “Unique Ideas” */}
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6 lg:space-y-0 text-center lg:text-left">
              <img
                src={aboutus}
                alt="Team discussion"
                className="w-[280px] sm:w-[300px] lg:w-[320px] h-[80px] sm:h-[90px] lg:h-[96px] object-cover rounded-full"
              />
              <h1 className="flex flex-wrap justify-center lg:justify-start items-baseline text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-none">
                <span className="font-bold">Our Mission</span>
                <span className="font-light ml-2 sm:ml-3 md:ml-4">
                  & Vision
                </span>
              </h1>
            </div>

            {/* Row 2: “For Your Business.” + button */}
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
              <h2 className="flex flex-wrap justify-center lg:justify-start items-baseline text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-none">
                <span className="font-normal">About</span>
                <span className="font-bold mx-2 sm:mx-3 md:mx-4">
                  Spring/Fall
                </span>
                <span className="font-light">USA</span>
              </h2>

              <button className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-white hover:shadow-md hover:shadow-white/50 transition-all">
                <span className="text-xs sm:text-sm font-medium tracking-widest">
                  WHAT WE DO
                </span>
                <div className="bg-black p-2 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 
                 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 
                 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-center py-6  text-white">
          <p className="max-w-3xl mx-auto">
            Empowering international students with knowledge, resources, and
            support to navigate the F-1 visa process and achieve their dreams of
            studying in the United States.
          </p>
        </div>

        {/* Services Section - Centered Row with Card */}
        <div className="flex justify-center py-10  ">
          <div className="text-white ">
            <Card />
          </div>
        </div>
      </div>

      {/* Stats counter section */}
      <div
        className={`mt-20 transition-all duration-1000 delay-600  ${
          isVisible
            ? "opacity-100 transform translate-y-0 "
            : "opacity-0 transform translate-y-10 "
        }`}
      >
        <CardSection />
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutUsSection;
