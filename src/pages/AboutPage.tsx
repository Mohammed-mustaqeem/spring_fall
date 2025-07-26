import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  User,
  Award,
  MessageCircle,
  Globe,
  School,
  CheckCircle,
  Heart,
  Lightbulb,
  Smile,
} from "lucide-react";
import mukeshImg from "../assets/images/mukesh.png";
import bipinImg from "../assets/images/original_heluu.png";
import manojImg from "../assets/images/manoj.jpg";
import sabinaImg from "../assets/images/sabina.jpg";
import AboutCards from "@/components/common/AboutCards";
import AdminSection from "@/components/home/AdminSection";

const AboutPage = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  return (
    <div
    // className={`min-h-screen flex flex-col ${
    //   theme === "dark" ? "dark bg-gray-900 text-white" : ""
    // }`}
    >
      <Header />

      <main className="flex-grow pt-28 bg-gradient-to-b from-slate-900 via-gray-900 to-gray-800 ">
        <section className="py-24 md:py-32 transition-colors duration-500 bg-gradient-to-b from-slate-900 via-gray-900 to-gray-800">
          <div className="container-custom mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-montserrat mb-6 leading-tight tracking-tight transition-all duration-500 text-white">
                About <span className="bg-clip-text">Spring/Fall USA</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 transition-opacity duration-700 text-gray-400">
                Making the F-1 visa journey smoother, transparent, and
                stress-free for students around the world.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5">
                <Link to="/uniportal">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-full text-white bg-visa-blue hover:bg-visa-navy shadow-lg hover:shadow-[0_0_10px_rgba(0,123,255,0.6)] transform hover:scale-105 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800">
                    Uniportal
                  </button>
                </Link>
                <Link to="/resources">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-full border transition duration-300 transform hover:scale-105 bg-white hover:bg-white shadow-lg hover:shadow-[0_0_10px_rgba(0,123,255,0.6)]">
                    Browse Resources
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 transition-colors duration-500 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
          <div className="container-custom mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Founder Image */}
              <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-visa-gold max-w-[260px] sm:max-w-xs">
                  <img
                    src={sabinaImg}
                    alt="Miss Sabina GC - Founder | Visa Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Message */}
              <div className="w-full md:w-[60%] text-center md:text-left px-2 sm:px-0">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-white mb-4 leading-tight">
                  Sabina GC
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-6">
                  Message from Founder | Visa Expert
                </p>
                <p className="text-base sm:text-lg font-sans text-gray-200 dark:text-gray-300 leading-relaxed mb-5">
                  Spring/Fall USA was founded in 2019 with the sole aim of
                  helping students apply to the USA for their further studies.
                  We are proud to have supported more than{" "}
                  <span className="font-bold text-visa-blue">
                    100,000 students
                  </span>{" "}
                  across our platform and remain committed to empowering even
                  more students in their journey to academic success in the
                  United States.
                </p>
                <p className="text-base sm:text-lg font-sans text-gray-200 dark:text-gray-300 leading-relaxed">
                  We created Spring/Fall USA to provide clear guidance, share
                  authentic experiences, and build a supportive community for
                  international students applying for F-1 visas to study in the
                  United States.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* //// */}

        <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-950 via-black to-blue-900 overflow-hidden">
          {/* Subtle SVG background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 100,0 100,100" fill="white" />
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative z-10 container-custom mx-auto px-4">
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 sm:mb-12 leading-snug sm:leading-tight tracking-tight">
                We've helped over{" "}
                <span className="text-yellow-400">100,000 students</span>{" "}
                successfully navigate their visa journey, and we're just getting
                started.
              </h2>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5">
                <Link to="/register">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-visa-blue text-white hover:bg-visa-navy shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800">
                    Join Our Telegram Group
                  </button>
                </Link>
                <Link to="/visa-experiences">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
                    Browse Visa Experiences
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div>
          <AboutCards />
        </div>

        <div>
          <AdminSection />
        </div>

        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 `}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                className={`text-3xl md:text-4xl font-serif font-bold text-white`}
              >
                Impact & Community
              </h2>
              <p
                className={`mt-3 max-w-2xl mx-auto text-sm md:text-base text-white`}
              >
                Real stories, real support, real success. Here's how we're
                making a difference.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 mb-12">
              {[
                {
                  icon: <User size={22} />,
                  title: "5,000+ Students Helped",
                  desc: "We've helped thousands confidently complete their F-1 visa process.",
                },
                {
                  icon: <Globe size={22} />,
                  title: "100+ Countries",
                  desc: "Diverse community members from around the world bring unique experiences.",
                },
                {
                  icon: <MessageCircle size={22} />,
                  title: "3,000+ Experiences Shared",
                  desc: "Interview tips & real stories from successful applicants.",
                },
                {
                  icon: <School size={22} />,
                  title: "500+ Universities",
                  desc: "Students attend hundreds of U.S. institutions — Ivy League to State colleges.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 bg-gray-300  rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300`}
                >
                  <div className="bg-visa-blue dark:bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="">
                    <h4 className={`text-base font-semibold mb-1 `}>
                      {item.title}
                    </h4>
                    <p className={`text-sm `}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="max-w-4xl mx-auto bg-gray-300 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-5">
                <Smile
                  size={42}
                  className="text-visa-blue dark:text-blue-400"
                />
              </div>
              <h3
                className={`text-lg md:text-xl font-bold text-center mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                What Our Community Says
              </h3>
              <div className="space-y-5 text-sm md:text-base">
                {[
                  {
                    quote:
                      "Spring/Fall USA was my lifeline during my F-1 visa application. The interview experiences and tips helped me prepare perfectly. I'm now studying at UC Berkeley!",
                    author: "— Mei L., Taiwan",
                  },
                  {
                    quote:
                      "I was overwhelmed by the visa process until I found this community. I got my visa approved on the first try!",
                    author: "— Carlos G., Brazil",
                  },
                ].map((item, idx) => (
                  <blockquote
                    key={idx}
                    className={`border-l-4 pl-4 italic border-visa-blue ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.quote}
                    <footer className="mt-2 font-medium">{item.author}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 `}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`text-4xl font-serif font-bold mb-4 leading-tight text-white `}
            >
              Join Our Community
            </h2>
            <p
              className={`text-base md:text-lg mb-8  text-white`}
            >
              Whether you're just starting your U.S. education journey or want
              to share your experience to help others, we'd love to have you as
              part of our growing community.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <button className="bg-visa-blue hover:bg-visa-navy text-white text-sm md:text-base font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-800 hover:scale-105">
                  Join Our Telegram Group
                </button>
              </Link>
              <Link to="/visa-experiences">
                <button
                  className={`border text-sm md:text-base font-medium px-6 py-3 rounded-full bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 `}
                >
                  Browse Visa Experiences
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
