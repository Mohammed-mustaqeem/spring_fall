import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Sparkles,
} from "lucide-react";
import logo from "../../assets/images/logo/devxora2.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle Animated Background Gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-transparent to-purple-600 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link
              to="/"
              className="flex items-center space-x-2 text-3xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-serif">
                Spring/Fall
              </span>
              <span className="text-white font-serif">USA</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Empowering global students to study in the USA — with free F-1
              visa guidance and expert support.
            </p>
            <div className="flex space-x-4 pt-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Icon
                    size={16}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "F-1 Visa Info", path: "/f1-visa-info" },
                { name: "Interview Prep", path: "/interview-prep" },
                { name: "Visa Experiences", path: "/visa-experiences" },
                { name: "Resources", path: "/resources" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                "F-1 Visa Requirements",
                "Interview Questions",
                "Document Checklist",
                "FAQs",
                "Visa Timeline",
              ].map((res, idx) => (
                <li key={idx}>
                  <Link
                    to={`/resources#${res.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {res}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest visa tips and university updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              />
              <button
                type="submit"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Join</span>
                <Sparkles
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  size={16}
                />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Spring/Fall USA. All rights reserved.</p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white hover:underline transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* === 🔥 NEW: Ultra-Modern Credit Section === */}
        {/* === ✅ Beautiful & Clear Credit Section === */}
        <div className="mt-10 pt-8 border-t border-gray-800/70 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left: Elegant Credit Text */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base">
            <Sparkles size={18} className="text-yellow-400 animate-pulse" />
            <span className="font-medium">Crafted with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span className="font-medium">by</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold text-lg">
              DEVXORA
            </span>
          </div>

          {/* Right: Logo & Socials */}
          <div className="flex items-center space-x-6">
            {/* Studio Logo Badge */}
            <div className="group relative">
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <img
                src={logo} // Make sure `logo` is imported correctly in your component
                alt="DEVXORA - Web & UX Studio"
                className="relative w-16 h-16 rounded-full cursor-pointer border-2 border-gray-600 group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/48x48/1e293b/6366f1?text=DX"; // Fallback if logo fails
                }}
              />
            </div>

            {/* Social Icons with Real DEVXORA Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  color: "hover:text-blue-500",
                  href: "https://www.facebook.com/devxora", // ✅ Your FB
                  label: "Facebook",
                },
                {
                  icon: Twitter,
                  color: "hover:text-blue-400",
                  href: "https://twitter.com/devxora", // ✅ Your X/Twitter
                  label: "Twitter",
                },
                {
                  icon: Instagram,
                  color: "hover:text-pink-500",
                  href: "https://www.instagram.com/devxora", // ✅ Your IG
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  color: "hover:text-blue-600",
                  href: "https://www.linkedin.com/company/devxora", // ✅ Your LinkedIn
                  label: "LinkedIn",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2.5 rounded-full bg-gray-900 ${social.color} hover:bg-gradient-to-r from-blue-600/30 to-purple-600/30 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  aria-label={social.label}
                  title={`Follow us on ${social.label}`}
                >
                  <social.icon
                    size={18}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Corner Decoration (Optional) */}
      {/* <div className="absolute bottom-6 right-6 opacity-20">
        <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center rotate-45 animate-spin-slow">
          <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full"></div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

{
  /* Add this to your global CSS or Tailwind config for the slow spin */
}
{/* <style jsx>{`
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 90s linear infinite;
  }
`}</style>; */}
