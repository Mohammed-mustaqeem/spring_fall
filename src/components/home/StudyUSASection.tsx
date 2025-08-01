import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Clock, Calendar, Users, Globe, Award } from "lucide-react";
import degree from "../../assets/images/degree.jpg";

gsap.registerPlugin(ScrollTrigger);

const StudyUSASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: <BookOpen size={24} className="text-blue-400" />,
      title: "World-Class Education",
      desc: "Access top-ranked universities and innovative programs in STEM, business, and more.",
    },
    {
      icon: <Clock size={24} className="text-blue-400" />,
      title: "OPT & CPT Benefits",
      desc: "Gain up to 36 months of work experience in your field through Optional Practical Training.",
    },
    {
      icon: <Calendar size={24} className="text-blue-400" />,
      title: "Flexible Intakes",
      desc: "Choose from Spring, Summer, or Fall semesters to start your academic journey.",
    },
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: "Global Network",
      desc: "Build lifelong connections with students and professionals from 190+ countries.",
    },
    {
      icon: <Globe size={24} className="text-blue-400" />,
      title: "Cultural Immersion",
      desc: "Experience diverse cultures, cities, and career opportunities across the USA.",
    },
    {
      icon: <Award size={24} className="text-blue-400" />,
      title: "Career Pathways",
      desc: "Many F-1 graduates transition to H-1B visas and long-term career success.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          paraRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          cardsRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.1)",
            stagger: 0.15,
          },
          "-=0.3"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );

      // Image animation
      gsap.fromTo(
        imageWrapperRef.current,
        { opacity: 0, x: 50, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="study-usa-section"
      className="py-28 md:py-36 bg-gradient-to-b from-slate-950 via-black to-blue-950 text-white overflow-hidden relative"
    >
      {/* Subtle animated background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(100, 180, 255, 0.3), transparent 1px),
            linear-gradient(rgba(100, 180, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 180, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 40px 40px, 40px 40px",
        }}
      />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              Your Gateway to{" "}
              <span className="text-blue-300">Studying in the USA</span>
            </h2>

            <p
              ref={paraRef}
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
            >
              Discover new opportunities in education, work, and culture. The F-1 visa opens the door to a world-class education, hands-on experience, and a global career.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="group relative p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-blue-400/30 blur-xl pointer-events-none" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div ref={buttonRef} className="pt-2">
              <Link
                to="/f1-visa-info"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/40  hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Learn About F-1 Visa
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageWrapperRef}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform hover:scale-102 transition-transform duration-700"
          >
            <img
              src={degree}
              alt="International students celebrating graduation in the USA"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyUSASection;