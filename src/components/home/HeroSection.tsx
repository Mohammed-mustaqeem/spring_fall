import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";

// SEO metadata for the home page
const SEO = {
  title: "Spring/Fall USA - Free F1 Visa Guide & Preparation Resources",
  description:
    "Get free guidance and resources to help international students navigate the F-1 visa process successfully. Expert tips for F1 visa preparation.",
  keywords:
    "F1 visa, Free F1 visa guide, F1 visa preparation, US student visa, study in USA, F1 visa interview, F1 visa process",
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const finalCount = 10000;
  const successRate = 95;

  useEffect(() => {
    // Add meta tags for SEO
    document.title = SEO.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SEO.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = SEO.description;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", SEO.keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = SEO.keywords;
      document.head.appendChild(meta);
    }
    setIsVisible(true);

    // Animate count up
    const duration = 2000; // ms
    const interval = 20; // ms
    const step = finalCount / (duration / interval);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      setCount(Math.min(Math.floor(current), finalCount));
      if (current >= finalCount) {
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Scroll functions for buttons
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToGuide = () => {
    const guideSection = document.getElementById("f1-guide-section");
    if (guideSection) {
      guideSection.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // If the guide section isn't on the homepage, navigate to the F1 visa info page
      window.location.href = "/f1-visa-info";
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-950 via-black to-blue-700  overflow-hidden shadow-inner">
      <div className="container-custom mx-auto">
        <div>
          <div
            className={`transition-all duration-700  text-center flex flex-col items-center pointer-events-none  ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            {/* H1 heading for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-serif text-white leading-snug tracking-widest font-extrabold">
             SPRINGFALL
            </h1>

            <p className="mt-6 text-sm  text-white font-semibold max-w-lg tracking-tighter ">
              We provide free guidance and resources to help international
              students navigate the F-1 visa process successfully.
            </p>

            <div className="mt-8 space-x-4 flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white cursor-pointer text-black  px-6 font-semibold flex items-center rounded-3xl "
                onClick={scrollToGuide}
                
              >
                Get Started
                <ArrowDown size={16} className="ml-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white cursor-pointer bg-transparent  text-white font-semibold rounded-3xl"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* // lower section 
 // */}

      <div className="w-full flex  items-end justify-between px-14 ">
        {/* //badges section */}
        <div className="mt-12 flex flex-col gap-2">
          <div className="relative group w-60">
            <div className="absolute inset-0 bg-black/50 rounded-2xl transform transition-all duration-500  w-full"></div>
            <div className="relative p-4">
              <div className="flex items-baseline space-x-1">
                <span
                  className={`font-sans text-2xl font-extrabold text-blue-600 ${styles["animate-slide-up"]}`}
                >
                  100K
                </span>
                <span
                  className={`font-sans text-1xl font-bold text-blue-600 ${styles["animate-slide-up"]}`}
                >
                  +
                </span>
              </div>
              <p
                className={`mt-0 text-gray-600 text-xs font-medium ${styles["animate-fade-in"]}`}
              >
                Students helped with their F-1 visas
              </p>
              {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"></div> */}
            </div>
          </div>

          <div className="relative group w-60">
            <div className="absolute  inset-0 bg-transparent rounded-2xl transform transition-all duration-500 group-hover:scale-105 w-full"></div>
            <div className="relative p-4 border rounded-2xl">
              <div className="flex items-baseline space-x-1">
                <span
                  className={`font-sans text-2xl font-extrabold text-yellow-400 ${styles["animate-slide-up"]}`}
                >
                  95
                </span>
                <span
                  className={`font-sans text-1xl font-bold text-yellow-400 ml-1 ${styles["animate-slide-up"]}`}
                >
                  %
                </span>
              </div>
              <p
                className={`mt-0 text-yellow-400 text-xs font-medium ${styles["animate-fade-in"]}`}
              >
                Satisfied and happy students
              </p>
              {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"></div> */}
            </div>
          </div>
        </div>

        {/* image section */}
        <div
          className={`  transition-all flex  items-center justify-center gap-2 duration-700 delay-300 bg-white p-4 rounded-xl ${
            isVisible ? "opacity-100" : "opacity-0 translate-x-10"
          } `}
        >
          <div className="relative z-10 w-40  ">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="International students celebrating with diplomas after successful F1 visa applications"
              className="rounded-xl shadow-2xl object-cover w-full h-auto"
            />
          </div>
          <div className=" w-60 bg-white p-2 rounded-lg  transform  ">
            <p className="text-visa-navy text-xs font-bold font-sans">
              "Spring/Fall USA helped me achieve my dream of studying in the
              US!"
            </p>
            <p className="text-xs mt-2 text-visa-navy font-sans">
              - Maria, Computer Science Student
            </p>
          </div>
          {/* <div className="absolute -z-10 top-1/4 -right-8 w-60 h-60 bg-visa-blue rounded-full opacity-10 blur-3xl"></div> */}
          {/* <div className="absolute -z-10 bottom-1/4 -left-8 w-48 h-48 bg-visa-orange rounded-full opacity-10 blur-3xl"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
