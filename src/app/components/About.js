"use client";

import {motion} from "framer-motion";

export default function About(){
    return(
       <section id="about" className="bg-black text-white py-20 px-6">
            <motion.div
                initial={{opacity:0, y:40}}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#e62b1e] mb-6">
                    ABOUT
                    TEDxCUSAT
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    TEDxCUSAT is a vibrant platform where the brightest minds of Cochin University of Science and Technology come together to share ideas that inspire meaningful change. 
                    This year&aposs event, themed <span className="text-white font-semibold"> &quot;Kaleidoscope: Alchemy of Voices &quot;</span>, blends live talks with curated TED content to spark deep, thought-provoking conversations.
                    <br className="hidden md:block" />
                     More than just a series of talks, TEDxCUSAT creates a space where voices converge, perspectives shift, and ideas evolve into actions. Our mission is to ignite these conversations and empower our community to turn inspiration into real-world impact.
                </p>

            </motion.div>
       </section> 
    );
}