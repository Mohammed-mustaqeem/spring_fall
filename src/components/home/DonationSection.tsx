import React, { useEffect, useRef } from 'react';
import { Gift, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DonationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.donate-animate', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const paypalDonationUrl = 'https://www.paypal.com/donate/?hosted_button_id=5VXV68NC6TC9U';

  return (
    <section
      ref={sectionRef}
      className="py-28 px-4 bg-gradient-to-br from-[#050505] via-[#020B17] to-[#000000] text-white overflow-hidden"
    >
      <div className="container-custom mx-auto max-w-6xl">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-12 md:p-20 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Section */}
          <div className="donate-animate">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-snug tracking-tight">
              Empower the <span className="text-blue-500">Dreams</span><br />
              of Future Scholars
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Your support fuels free webinars, visa coaching, and educational access for international students.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-white/10 rounded-xl mr-4">
                  <Gift size={22} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Sponsor Hope</h4>
                  <p className="text-white/50 text-sm">Aid students who can't afford visa application fees.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-white/10 rounded-xl mr-4">
                  <Heart size={22} className="text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Build Education</h4>
                  <p className="text-white/50 text-sm">Fund webinars and global visa awareness programs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="donate-animate bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 shadow-inner">
            <h3 className="text-2xl md:text-3xl font-semibold font-serif mb-4 text-blue-300">
              Your Help Goes Further
            </h3>
            <p className="text-white/60 text-base mb-6">
              Spring/Fall USA is driven by passionate volunteers. Every donation contributes directly to helping students achieve their dreams.
            </p>

            <div className="bg-white/5 p-5 rounded-xl border border-blue-500/20 mb-8">
              <p className="text-white font-medium mb-2 text-lg">Why Donate?</p>
              <p className="text-white/60 text-sm leading-relaxed">
                We're not just an organization — we're a movement. Your generosity helps amplify resources for thousands of students worldwide.
              </p>
            </div>

            <a href={paypalDonationUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-white  text-black font-semibold text-sm py-3 rounded-3xl shadow-md hover:bg-white/80 transition-transform">
                Donate via PayPal
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
