import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top: Company Info */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand & Description */}
          <div className="flex-1 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-3xl font-bold tracking-wide"
            >
              <span className="text-white font-serif">Spring/Fall</span>
              <span className="text-white23
               font-serif">USA</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Helping international students achieve their dreams of studying in
              the USA with free F-1 visa guidance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-600  transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-600  transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-600  transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/f1-visa-info" className="hover:text-white">
                  F-1 Visa Information
                </Link>
              </li>
              <li>
                <Link to="/interview-prep" className="hover:text-white">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link to="/visa-experiences" className="hover:text-white">
                  Visa Experiences
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/f1-visa-info" className="hover:text-white">
                  F-1 Visa Requirements
                </Link>
              </li>
              <li>
                <Link to="/interview-prep" className="hover:text-white">
                  Interview Questions
                </Link>
              </li>
              <li>
                <Link to="/resources#checklist" className="hover:text-white">
                  Document Checklist
                </Link>
              </li>
              <li>
                <Link to="/resources#faq" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/resources#timeline" className="hover:text-white">
                  Visa Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Uniportal & Newsletter */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Uniportal</h3>
            <ul className="mb-6 text-gray-400 text-sm space-y-2">
              <li>
                <Link to="/uniportal" className="hover:text-white">
                  Access Portal
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold text-sm mb-2">
              Developed with love by PROX
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-full text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-800 text-black px-4 py-2 rounded-r-full transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Spring/Fall USA. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
