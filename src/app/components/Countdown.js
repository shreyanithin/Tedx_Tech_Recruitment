"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Countdown(){
    const calculateTimeLeft = () => {
        const event = new Date("2025-09-10T09:00:00");
        const now = new Date ();
        const diff = event - now;

        if (diff <= 0) return {days:0, hours:0 ,minutes:0, seconds:0};

        return{
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [timeLeft,setTimeLeft] = useState(calculateTimeLeft());
    const [mounted,setMounted]= useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()),1000);

        return() => clearInterval(timer);
    },[]);

    if(!mounted || !timeLeft) return null;

    return (
        <section 
            id="countdown" className="bg-[#0e0e0e] text-white py-20 px-6"
            style={{ backgroundImage: 'url("/bg5.jpeg")' }}
        >
            <motion.div
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#e62b1e] mb-6">
                    Countdown to TEDxCUSAT 2025
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                    {
                        ["Days","Hours","Minutes","Seconds"].map((label,i) => {
                            const value=String(Object.values(timeLeft)[i]).padStart(2,'0');
                            return (
                                <motion.div
                                    key={label}
                                    whileHover={{ scale:1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg"
                                >
                                    <p className="text-4xl font-semibold text-white">{value}</p>
                                    <p className="text-sm text-gray-400 mt-2">{label}</p>
                                </motion.div>
                            );
                        })}

                </div>
            </motion.div>

        </section>

    );
}

