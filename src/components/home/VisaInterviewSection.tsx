import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VisaInterviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("visa-interview-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const interviewPoints = [
    "Legitimacy as a student and intent to study",
    "Financial resources to cover education and living expenses",
    "Strong ties to home country and intent to return after studies",
    "English language proficiency and academic preparation",
    "Complete and accurate documentation",
  ];

  const commonQuestions = [
    "Why did you choose this university?",
    "How will you finance your studies?",
    "What are your plans after graduation?",
    "Why study in the US instead of your home country?",
    "What is your family background?",
  ];

  return (
    <section
      id="visa-interview-section"
      className="py-24 bg-gradient-to-br from-blue-950 via-black to-blue-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-12">
          What to Expect at Your{" "}
          <span className="text-blue-700">Visa Interview</span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {/* Evaluation Points */}
          <div
            className={`lg:col-span-3 p-6 bg-white rounded-xl shadow-md border border-blue-100 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-semibold text-visa-navy mb-4">
              What Officers Evaluate
            </h3>
            <ul className="space-y-3">
              {interviewPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 text-sm"
                >
                  <Check className="text-visa-blue mr-2 mt-1" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Interview Prep Guide */}
          <div
            className={`lg:col-span-3 bg-visa-blue text-white rounded-xl flex flex-col justify-between p-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Interview Prep Guide</h3>
              <p className="text-sm text-blue-100">
                Download our free guide to prepare confidently and succeed.
              </p>
            </div>
            <Button className="mt-6 bg-white text-visa-blue hover:bg-blue-100">
              <Download className="mr-2" size={18} />
              Download Guide
            </Button>
          </div>

          {/* Common Questions */}
          <div
            className={`sm:col-span-2 lg:col-span-4 bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-semibold text-visa-navy mb-4">
              Common Interview Questions
            </h3>
            <ul className="space-y-3">
              {commonQuestions.map((question, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 text-sm"
                >
                  <span className="bg-visa-blue text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full mr-3">
                    {index + 1}
                  </span>
                  {question}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <Link
                to="/interview-prep"
                className="text-visa-blue hover:text-visa-navy text-sm inline-flex items-center"
              >
                View all Q&A <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Ace Your Interview Box (bottom left on mobile) */}
          <div
            className={`sm:col-span-1 lg:col-span-2 bg-visa-navy text-white p-6 rounded-xl flex flex-col transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-bold mb-3">
              Ace Your Interview with Confidence
            </h3>
            <p className="text-sm text-blue-100">
              Preparation is everything. Understand what’s expected, practice
              smart, and walk in with the confidence to succeed.
            </p>
          </div>

          {/* Pro Tip Box (full-width last row) */}
          <div
            className={`sm:col-span-2 lg:col-span-6 bg-yellow-50 border border-yellow-200 p-4 sm:p-6 rounded-xl flex items-start gap-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-yellow-100 p-2 rounded-full flex items-center justify-center">
              <svg
                className="text-yellow-700 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800">Pro Tip</h4>
              <p className="text-yellow-700 mt-1 text-sm">
                Schedule a free mock interview with our team and get detailed
                feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInterviewSection;
