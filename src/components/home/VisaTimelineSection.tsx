import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

const VisaTimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const sec = document.getElementById("visa-timeline-section");
    if (sec) obs.observe(sec);
    return () => sec && obs.unobserve(sec);
  }, []);

  const steps = [
    {
      title: "Receive University Acceptance",
      desc: "Secure admission into a SEVP-approved U.S. school and receive an acceptance letter. This is the first step in your F-1 visa journey.",
      timeframe: "6–12 months",
      icon: <CalendarDays />,
    },
    {
      title: "Receive Form I-20",
      desc: "After accepting admission, your university will issue Form I-20. This document is essential for your visa application.",
      timeframe: "3–5 months before program start",
      icon: <CalendarDays />,
    },
    {
      title: "Pay SEVIS Fee",
      desc: "Pay the $350 SEVIS I-901 fee online using your I-20 SEVIS ID. Keep the confirmation for your records.",
      timeframe: "At least 3 days before DS-160",
      icon: <CalendarDays />,
    },
    {
      title: "Complete DS-160 Form",
      desc: "Fill out the DS-160 online visa application. Upload a digital photo and note the confirmation number.",
      timeframe: "2–3 months before intended travel",
      icon: <CalendarDays />,
    },
    {
      title: "Schedule Visa Interview",
      desc: "Pay the MRV visa fee and schedule your interview at a U.S. embassy or consulate in your country.",
      timeframe: "2–3 months before program start",
      icon: <CalendarDays />,
    },
    {
      title: "Attend Visa Interview",
      desc: "Attend your interview with required documents. The officer will determine your F-1 visa eligibility.",
      timeframe: "1–3 months before travel",
      icon: <CalendarDays />,
    },
  ];

  return (
    <section
      id="visa-timeline-section"
      className="relative py-20 bg-gradient-to-b from-blue-950 via-black to-blue-950 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-12 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white">
            F‑1 Visa <span className="text-visa-blue/90">Timeline</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Plan ahead for your F‑1 visa journey. A smooth process starts here.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-blue-200"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center md:items-start 
                  ${
                    isLeft ? "md:flex-row-reverse" : ""
                  } transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="z-10 flex-shrink-0 bg-white border-4 border-visa-blue w-6 h-6 rounded-full"></div>

                  <div
                    className={`mt-3 md:mt-0 md:w-1/2 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4`}
                  >
                    <div className="bg-visa-blue p-3 rounded-full text-white">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-visa-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{step.desc}</p>
                      <span className="inline-block mt-3 bg-blue-50 text-visa-blue text-xs px-2 py-1 rounded-full">
                        {step.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            to="/resources#timeline"
            className="inline-flex items-center px-6 py-3 bg-visa-blue text-white rounded-lg shadow hover:bg-visa-navy transition-colors"
          >
            View Full Visa Timeline
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisaTimelineSection;
