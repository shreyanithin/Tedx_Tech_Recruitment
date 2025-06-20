"use client";

import { motion } from "framer-motion";

const speakers = [
  {
    name: "Suresh Pillai",
    title: "Chef",
    description:
      "Chef Pillai, a social media sensation and celebrity chef, is the Culinary Director at Raviz Kollam and gained fame as a contestant on MasterChef UK 2017. He is celebrated for his innovative cooking techniques.",
    image: "/speakers/pillai.jpg",
  },
  {
    name: "Divya S Iyer",
    title: "IAS Officer",
    description:
      "Dr. Divya S. Iyer currently holds key roles as the Managing Director of Vizhinjam International Seaport Ltd and Project Director of Kerala Solid Waste Management Project.",
    image: "/speakers/divya.jpg",
  },
  {
    name: "Shariq Shamsudeen",
    title: "Entrepreneur",
    description:
      "Founder and CEO of Fundfolio, building India’s largest community of financially independent individuals by offering resources and a supportive network.",
    image: "/speakers/sharique.jpg",
  },
  {
    name: "Steffy Sunny",
    title: "Content Creator",
    description:
      "Steffy Sunny, a trilingual creator from Delhi, blends charisma and intellect to reshape digital media—educating, inspiring, and entertaining audiences.",
    image: "/speakers/steffy.jpeg",
  },
  {
    name: "Major Ravi",
    title: "Filmmaker",
    description:
      "Major A.K. Raveendran SM, a decorated army veteran and acclaimed filmmaker, blends real military valor with cinematic storytelling.",
    image: "/speakers/ravi.jpg",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#e62b1e] mb-12">
          Meet the Speakers
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 w-max">
            {speakers.map((speaker, idx) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={idx}
                className="snap-center min-w-[260px] md:w-[260px] bg-[#1c1c1c] rounded-lg overflow-hidden relative group shadow-md"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-400">{speaker.title}</p>
                </div>
                <div className="absolute inset-0 h-64 bg-black bg-opacity-90 text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-left">
                  <p>{speaker.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
