"use client";

import { WorldMap } from "./WorldMap";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="w-full bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Title */}
        <motion.p
          className="font-bold text-5xl lg:text-[90px] dark:text-white text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our{" "}
          <span className="text-neutral-400 inline-block">
            {"Network".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-[clamp(0.9rem,2.5vw,1.125rem)] text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock global learning with Springfall. Access world-class education from anywhere — your home, a library, or a new city. Designed for modern learners with no borders.
        </motion.p>
      </div>

      {/* Map Section */}
      <motion.div
        className="mt-10 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: 34.0522, lng: -118.2437 },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            },
          ]}
        />
      </motion.div>
    </div>
  );
}
