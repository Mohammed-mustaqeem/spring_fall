import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import styles from "./HeroSection.module.css";

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

  useEffect(() => {
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

    const duration = 2000;
    const interval = 20;
    const step = finalCount / (duration / interval);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      setCount(Math.min(Math.floor(current), finalCount));
      if (current >= finalCount) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGuide = () => {
    const guideSection = document.getElementById("f1-guide-section");
    if (guideSection) {
      guideSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/f1-visa-info";
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-950 via-black to-blue-700 overflow-hidden shadow-inner">
      <div className="container-custom mx-auto px-4">
        <div>
          <div
            className={`transition-all duration-700 text-center flex flex-col items-center pointer-events-none ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-[40px] md:text-5xl lg:text-[110px] font-serif text-white leading-snug tracking-widest font-extrabold">
              SPRINGFALL
            </h1>
            <p className="mt-6 text-sm text-white font-semibold max-w-lg tracking-tighter">
              We provide free guidance and resources to help international
              students navigate the F-1 visa process successfully.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToGuide}
                className="bg-white hover:bg-black hover:shadow-md hover:shadow-white  text-black px-6 font-semibold rounded-3xl cursor-pointer"
              >
                Get Started
                <ArrowDown size={16} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white font-semibold rounded-3xl"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between px-6 md:px-14 mt-12 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="relative group w-full md:w-60">
            <div className="absolute inset-0 bg-black/50 rounded-2xl w-full"></div>
            <div className="relative p-4">
              <div className="flex items-baseline space-x-1">
                <span className={`font-sans text-2xl font-extrabold text-blue-600 ${styles["animate-slide-up"]}`}>100K</span>
                <span className={`font-sans text-1xl font-bold text-blue-600 ${styles["animate-slide-up"]}`}>+</span>
              </div>
              <p className={`mt-0 text-gray-600 text-xs font-medium ${styles["animate-fade-in"]}`}>
                Students helped with their F-1 visas
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-60">
            <div className="absolute inset-0 bg-transparent rounded-2xl group-hover:scale-105 w-full"></div>
            <div className="relative p-4 border rounded-2xl">
              <div className="flex items-baseline space-x-1">
                <span className={`font-sans text-2xl font-extrabold text-yellow-400 ${styles["animate-slide-up"]}`}>95</span>
                <span className={`font-sans text-1xl font-bold text-yellow-400 ml-1 ${styles["animate-slide-up"]}`}>%</span>
              </div>
              <p className={`mt-0 text-yellow-400 text-xs font-medium ${styles["animate-fade-in"]}`}>
                Satisfied and happy students
              </p>
            </div>
          </div>
        </div>

 <div
  className={`transition-all flex items-center justify-center gap-2 duration-700 delay-300 bg-white p-2 rounded-xl ${
    isVisible ? "opacity-100" : "opacity-0 translate-x-10"
  }`}
>
  {/* Image */}
  <div className="relative z-10 w-28 sm:w-40">
    <img
      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      alt="International students celebrating with diplomas after successful F1 visa applications"
      className="rounded-xl shadow-2xl object-cover w-full h-auto"
    />
  </div>

  {/* Text */}
  <div className="w-48 sm:w-60 bg-white p-2 sm:p-2 rounded-lg">
    <p className="text-visa-navy text-xs font-bold font-sans">
      "Spring/Fall USA helped me achieve my dream of studying in the US!"
    </p>
    <p className="text-xs mt-2 text-visa-navy font-sans">
      – Maria, Computer Science Student
    </p>
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
