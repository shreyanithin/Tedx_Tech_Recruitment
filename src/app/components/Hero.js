"use client";

import { motion } from "framer-motion";

const headingText = "TEDxCUSAT 2025";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-16 flex flex-col  justify-center items-center text-center px-6 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/bg6 cleaned.jpg")' }}
    >
      <div className="absolute inset-0  bg-opacity-60 backdrop-blur-[1px] z-0" />
    <div className="z-10 translate-x-0 sm:translate-x-0 md:translate-x-[-30%]">
      <motion.div
        className="z-10 flex flex-wrap justify-center "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className="text-5xl md:text-6xl font-bold text-[#e62b1e]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300 z-10"
      >
        &quot;Kaleidoscope: Alchemy of Voices&quot;
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="mt-8 z-10"
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
