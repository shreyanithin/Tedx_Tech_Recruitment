"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-16 flex flex-col justify-center items-center text-center px-6 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/bg6 cleaned.jpg")' }} 
    >
      <div className="absolute inset-0  bg-opacity-60 backdrop-blur-[1px] z-0" />
      <div className="z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-[#e62b1e]"
        >
          TEDxCUSAT 2025
        </motion.h1>

        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
        >
          &quot;Kaleidoscope: Alchemy of Voices&quot;
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8"
        >
          <a
            href="#speakers"
            className="inline-block bg-[#e62b1e] text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
          >
            Meet the Speakers
          </a>
        </motion.div>
      </div>
    </section>
  );
}