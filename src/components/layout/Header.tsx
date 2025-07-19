import React, { useState, useEffect } from "react";
import { Menu, X, Send, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "../../../src/assets/images/springfall.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paypalDonationUrl =
    "https://www.paypal.com/donate/?hosted_button_id=5VXV68NC6TC9U";


  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 1, name: "About Us", path: "/about" },
    { id: 2, name: "F-1 Visa Info", path: "/f1-visa-info" },
    { id: 3, name: "Interview Prep", path: "/interview-prep" },
    { id: 4, name: "Visa Experiences", path: "/visa-experiences" },
    { id: 5, name: "Resources", path: "/resources" },
    { id: 6, name: "Uniportal", path: "https://springfall-usa.vercel.app/" },
  ];

  const openDonation = () => {
    window.open(paypalDonationUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 mt-10 bg-[#05051a]/70 backdrop-blur-sm px-6 md:mx-28  md:m-10 p-3 flex justify-between items-center rounded-full shadow-lg  transition-all duration-300 text-white/60`}
      >
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              target={item.path.startsWith("http") ? "_blank" : "_self"}
              rel={item.path.startsWith("http") ? "noopener noreferrer" : ""}
              className="relative tracking-wide text-xs hover:text-white/100 transition-colors duration-300 group"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link to="/community">
            <Button className="bg-white text-xs hover:bg-white hover:shadow-md hover:shadow-white/50 transition-all text-black flex items-center duration-300 rounded-full">
              <Send size={18} className="mr-0" />
              Get Free Guidance
            </Button>
          </Link>
          <Button
            className="bg-white text-xs hover:bg-white hover:shadow-md hover:shadow-white transition-all text-black flex items-center duration-300 rounded-full"
            onClick={openDonation}
          >
            <Heart size={18} className="mr-2" />
            Support Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Slide-in Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden pointer-events-none`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-lg transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-black/80 text-white shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="px-6 pb-6 flex justify-center">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* <nav className="flex-1 px-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-blue-300 font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav> */}

          <nav className="flex-1 px-6 space-y-2">
            {navItems.map((item) =>
              item.path.startsWith("http") ? (
                <a
                  key={item.name}
                  href={item.path}
               
                  rel="noopener noreferrer"
                  className="block text-white hover:text-blue-300 font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-white hover:text-blue-300 font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="p-6 pt-2 space-y-3">
            <Link to="/community" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-white text-xs text-black hover:shadow-md hover:shadow-white flex items-center justify-center w-full rounded-full transition-all duration-300">
                <Send size={16} className="mr-2" />
                Get Free Guidance
              </Button>
            </Link>
            <Button
              className="bg-white text-xs text-black hover:shadow-md hover:shadow-white flex items-center justify-center w-full rounded-full transition-all duration-300"
              onClick={() => {
                openDonation();
                setIsMenuOpen(false);
              }}
            >
              <Heart size={16} className="mr-2" />
              Support Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
