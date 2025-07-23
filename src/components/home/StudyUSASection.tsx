import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Calendar, Users } from "lucide-react";
import degree from "../../assets/images/degree.jpg"

const StudyUSASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const section = document.getElementById("study-usa-section");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  const benefits = [
    {
      icon: <BookOpen size={22} className="text-visa-blue" />,
      title: "Top-Tier Education",
      desc: "Learn from globally recognized universities and programs.",
    },
    {
      icon: <Clock size={22} className="text-visa-blue" />,
      title: "OPT Benefits",
      desc: "Get practical work experience during and after study.",
    },
    {
      icon: <Calendar size={22} className="text-visa-blue" />,
      title: "Flexible Intakes",
      desc: "Choose between Spring, Summer, or Fall semesters.",
    },
    {
      icon: <Users size={22} className="text-visa-blue" />,
      title: "Global Network",
      desc: "Connect with students and professionals worldwide.",
    },
  ];

  return (
    <section
      id="study-usa-section"
      className="py-20  bg-gradient-to-b from-blue-950 via-black to-blue-950"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Your Gateway to{" "}
              <span className="text-white/85">Studying in the USA</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Discover new opportunities in education, work, and culture. The
              F-1 visa opens the door to a world-class education and beyond.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-md font-semibold text-visa-navy">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-800 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/f1-visa-info"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-visa-blue text-white hover:bg-visa-navy transition-all font-medium"
            >
              Learn About F-1 Visa
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right image */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={degree}
                alt="Students on campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyUSASection;
