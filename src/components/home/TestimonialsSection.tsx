import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anjali Sinha",
    role: "MS in CS - USA",
    message:
      "Spring/Fall helped me throughout my F1 Visa journey. The guidance and prep resources were a lifesaver. Highly recommended!",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "MS in Data Science - USA",
    message:
      "I was nervous about the visa process, but Spring/Fall made it smooth. The interview prep and mock sessions were excellent.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "BS in Engineering - USA",
    message:
      "Incredible support system. The team made the entire process easy to understand and navigate.",
  },
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 1.1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#010101] py-28 px-6 md:px-16 lg:px-32 text-white overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-20 relative z-10">
        <span className="bg-white  bg-clip-text text-transparent">
          What Students Say About Us
        </span>
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 z-10 relative">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative p-8 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-3xl shadow-[0_0_20px_rgba(0,255,255,0.1)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            <CardContent className="p-0">
              <p className="text-md leading-relaxed text-white/90 mb-6 italic tracking-wide">
                “{testimonial.message}”
              </p>
              <div>
                <p className="text-lg font-semibold text-cyan-400 group-hover:text-[#00fff0] transition duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </CardContent>
            <div className="absolute inset-0 border border-cyan-400 opacity-5 group-hover:opacity-20 rounded-3xl pointer-events-none transition duration-300" />
          </Card>
        ))}
      </div>

      {/* Ambient Glow Blurs */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-cyan-500 blur-[180px] opacity-30 rounded-full z-0 pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-blue-700 blur-[180px] opacity-30 rounded-full z-0 pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;
