import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const SEO = {
  title: "Spring/Fall USA - Free F1 Visa Guide & Preparation Resources",
  description:
    "Get free guidance and resources to help international students navigate the F-1 visa process successfully. Expert tips for F1 visa preparation.",
  keywords:
    "F1 visa, Free F1 visa guide, F1 visa preparation, US student visa, study in USA, F1 visa interview, F1 visa process",
};

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const finalCount = 10000;
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const testimonialRef = useRef(null);
useEffect(() => {
  // SEO Meta Tags setup remains unchanged...

  // Counter Animation
  const duration = 2000;
  const interval = 20;
  const step = finalCount / (duration / interval);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    setCount(Math.min(Math.floor(current), finalCount));
    if (current >= finalCount) clearInterval(timer);
  }, interval);

  // === GSAP TIMELINE ===
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.5 } });

  const chars = titleRef.current.querySelectorAll(".char");
  tl.fromTo(
    chars,
    { y: 80, opacity: 0, rotateX: 90 },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1,
      stagger: 0.06,
      ease: "power4.out",
    }
  )
    .fromTo(paraRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6")
    .fromTo(buttonsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
    .addLabel("contentBlocks", "-=0.4")
    .fromTo(
      [stat1Ref.current, stat2Ref.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 },
      "contentBlocks"
    )
    .fromTo(
      testimonialRef.current,
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1 },
      "contentBlocks"
    );

  return () => clearInterval(timer);
}, []);


  const splitText = (text) =>
    text.split("").map((char, idx) => (
      <span
        key={idx}
        className="inline-block char text-[40px] md:text-5xl lg:text-[110px] font-serif text-white tracking-widest lg:tracking-[28px] font-extrabold"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-950 via-black to-blue-700 overflow-hidden shadow-inner">
      <div className="container-custom mx-auto px-4">
        <div className="text-center flex flex-col items-center">
          <h1 ref={titleRef} className="flex flex-wrap justify-center pt-16">
            {splitText("SPRINGFALL")}
          </h1>

          <p
            ref={paraRef}
            className="mt-6 text-sm text-white font-semibold max-w-lg tracking-tighter"
          >
            We provide free guidance and resources to help international
            students navigate the F-1 visa process successfully.
          </p>

          <div
            ref={buttonsRef}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/f1-visa-info")}
              className="bg-white hover:bg-white hover:shadow-sm hover:shadow-white transition-all text-black px-6 font-semibold rounded-3xl cursor-pointer"
            >
              Get Started <ArrowDown size={18} className="ml-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent hover:text-white hover:shadow-sm hover:shadow-white hover:bg-transparent text-white font-semibold rounded-3xl"
              onClick={() => navigate("/community")}
            >
              <Send size={18} className="mr-1" /> Get free Guidance
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between lg:px-28 mt-12 gap-8 md:gap-0">
          <div className="flex flex-col gap-4 md:gap-2">
            <div ref={stat1Ref} className="relative group w-full md:w-60">
              <div className="absolute inset-0 bg-black/50 rounded-2xl w-full"></div>
              <div className="relative p-4">
                <div className="flex items-baseline space-x-1">
                  <span className="font-sans text-2xl font-extrabold text-blue-600">100K</span>
                  <span className="font-sans text-1xl font-bold text-blue-600">+</span>
                </div>
                <p className="mt-0 text-gray-600 text-xs font-medium">
                  Students helped with their F-1 visas
                </p>
              </div>
            </div>

            <div ref={stat2Ref} className="relative group w-full md:w-60">
              <div className="absolute inset-0 bg-transparent rounded-2xl group-hover:scale-105 w-full"></div>
              <div className="relative p-4 border rounded-2xl">
                <div className="flex items-baseline space-x-1">
                  <span className="font-sans text-2xl font-extrabold text-yellow-400">95</span>
                  <span className="font-sans text-1xl font-bold text-yellow-400 ml-1">%</span>
                </div>
                <p className="mt-0 text-yellow-400 text-xs font-medium">
                  Satisfied and happy students
                </p>
              </div>
            </div>
          </div>

          <div
            ref={testimonialRef}
            className="transition-all flex lg:flex-col items-center justify-center gap-2 duration-700 bg-white p-2 rounded-xl"
          >
            <div className="w-28 bg-white lg:w-56 h-20 lg:14">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="International students celebrating with diplomas after successful F1 visa applications"
                className="rounded-xl object-cover object-bottom w-full h-full"
              />
            </div>
            <div className="w-48 sm:w-60 bg-white p-2 sm:p-2 rounded-lg lg:text-center">
              <p className="text-visa-navy text-[11px] lg:text-xs font-bold font-sans">
                "Spring/Fall USA helped me achieve my dream of studying in the US!"
              </p>
              <p className="text-[10px] lg:text-xs mt-1 text-visa-navy font-sans">
                – Maria, Computer Science Student
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
