import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const finalCount = 10000;
  const navigate = useNavigate();

  // Refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // === Counter Animation ===
    const duration = 2000;
    const interval = 20;
    const step = finalCount / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      const newValue = Math.min(Math.floor(current), finalCount);
      setCount(newValue);

      if (current >= finalCount) clearInterval(timer);
    }, interval);

    // === GSAP Animation Timeline ===
    const ctx = gsap.context(() => {
      const chars = titleRef.current?.querySelectorAll(".char") || [];

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        chars,
        { y: 80, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power4.out",
        }
      )
        .fromTo(
          paraRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.6"
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          statsRef.current,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
          "-=0.4"
        );
    }, titleRef);

    return () => {
      ctx.revert();
      clearInterval(timer);
    };
  }, [navigate]);

  // Split text for animated title
  const splitText = (text: string) =>
    text.split("").map((char, idx) => (
      <span
        key={idx}
        className="inline-block char text-[40px] md:text-5xl lg:text-[110px] font-serif text-white tracking-widest lg:tracking-[28px] font-extrabold leading-none"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-950 via-black to-blue-700 overflow-hidden relative min-h-screen flex items-center">
      {/* Subtle animated grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 180, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 180, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="text-center flex flex-col items-center">
          {/* Animated Title */}
          <h1 ref={titleRef} className="flex flex-wrap justify-center pt-16">
            {splitText("SPRINGFALL")}
          </h1>

          {/* Tagline */}
          <p ref={paraRef} className="mt-6 text-sm text-white/90 font-semibold max-w-lg tracking-tight">
            We provide free guidance and resources to help international students navigate the F-1 visa process successfully.
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-5 justify-center">
            <button
              onClick={() => navigate("/f1-visa-info")}
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowDown size={18} />
              </span>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 -z-0 blur-md opacity-0 group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent scale-x-0 group-hover:scale-x-150 group-hover:animate-shine rounded-3xl transition-transform duration-700" />
            </button>

            <button
              onClick={() => navigate("/community")}
              className="group relative px-8 py-4 text-white font-semibold rounded-full border-2 border-white/30 bg-transparent transition-all duration-500 hover:border-blue-400 hover:bg-blue-900/30 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <span className="flex items-center gap-2">
                <Send size={18} /> Get Free Guidance
              </span>
              <div className="absolute inset-0 rounded-3xl border border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse -z-0" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-transparent -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Unified Stats & Testimonial Card */}
        <div
          ref={statsRef}
          className="mt-16 mx-auto max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,120,255,0.2)] will-change-transform"
        >
          {/* Inner glow overlay */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-400/20 to-transparent blur-xl -z-10 transition-opacity duration-500" />

          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Stats */}
            <div className="flex-1 space-y-5">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-blue-300">100K+</span>
                <span className="text-sm text-blue-200 font-medium">Students helped</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-yellow-300">95%</span>
                <span className="text-sm text-yellow-200 font-medium">Success rate</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-white/20" />

            {/* Testimonial */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Happy student"
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg mx-auto md:mx-0"
              />
              <p className="text-white text-sm mt-3 leading-relaxed font-medium">
                "Spring/Fall USA helped me achieve my dream of studying in the US!"
              </p>
              <p className="text-blue-200 text-xs mt-1">– Maria, Computer Science Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



