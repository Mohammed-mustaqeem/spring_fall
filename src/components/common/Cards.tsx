import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutContent = [
  {
    title: "Our Mission",
    description:
      "Empowering international students with confidence, clarity, and powerful resources to navigate the F-1 visa process.",
  },
  {
    title: "Our Story",
    description:
      "Built by international students in 2019, now a trusted community empowering thousands across the globe.",
  },
  {
    title: "Our Values",
    description: [
      "Integrity & Transparency",
      "Community Support",
      "Educational Excellence",
      "Global Perspective",
    ],
  },
];

const Cards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative z-10 py-14 px-4 md:px-12 bg-gradient-to-t from-black/90 via-black black">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutContent.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 overflow-hidden hover:shadow-[0_0_30px_#00bfff33] transition-all duration-500"
          >
            <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-2xl opacity-10 group-hover:opacity-20 transition duration-500 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-white text-transparent bg-clip-text">
                {item.title}
              </h3>
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
