"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "EVENTS", value: 5 },
  { label: "SPEAKERS", value: 50 },
  { label: "ACTIVE MEMBERS", value: 100 },
  { label: "COMMUNITY MEMBERS", value: 500 },
];

function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000; 
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const step = () => {
      current += increment;
      if (current < value) {
        setCount(Math.ceil(current));
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [start, value]);

  return <span>{count}+</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 }); 
  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-3xl font-bold"
          >
            <div className="text-[#e62b1e] text-4xl md:text-5xl mb-2">
              <AnimatedNumber value={stat.value} start={isInView} />
            </div>
            <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
