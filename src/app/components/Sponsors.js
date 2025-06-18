"use client";

import { motion } from "framer-motion";

const sponsorsData={
    Gold: [
        {name: "Gold Sponsor 1", logo: "/sponsors/gold/gold1.svg"},
        {name: "Gold Sponsor 2", logo: "/sponsors/gold/gold2.svg"}
    ],
    Silver: [
        {name: "silver Sponsor 1", logo: "/sponsors/silver/silver.svg"},
    ],
    Bronze: [
    { name: "Bronze Sponsor 1", logo: "/sponsors/bronze/bronze1.svg" },
    { name: "Bronze Sponsor 2", logo: "/sponsors/bronze/bronze2.svg" },
    ]
};


const colors={
    Gold: "text-yellow-400",
    Silver: "text-gray-300",
    Bronze: "text-orange-400",
};

export default function Sponsors(){
    return(
        <section id="sponsors" className="bg-[#0e0e0e] text-white py-20 px-6"
            style={{ backgroundImage: 'url("/bg7.jpg")' }} 
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity:0, y:40}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[#e62b1e] mb-12"
                >
                    Meet Our Sponsors
                </motion.h2>

                {
                    Object.keys(sponsorsData).map((tier,tierIndex) =>(
                        <motion.div
                            key={tier}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            className="mb-12"
                            transition={{ duration: 0.5, delay: tierIndex * 0.3 }}
                        >
                            <h3
                                className= {`text-2xl font-semibold mb-6 ${colors[tier] || "text-white"}`}
                            >
                                {tier} Sponsors
                            </h3>

                            <div className="flex flex-wrap justify-center gap-6">
                                     {sponsorsData[tier].map((sponsor, i) => (
                                        <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-[#FFFFFF] p-4 rounded-lg shadow-md flex items-center justify-center h-48 w-58"
                                        >
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="max-h-16 object-contain"
                                        />
                                        </motion.div>
              ))}
                            </div>
                        </motion.div>
                    )) 
                }
            </div>
        </section>
    );
}