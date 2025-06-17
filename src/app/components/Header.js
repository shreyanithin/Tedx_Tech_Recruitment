"use client";

import { useEffect, useState } from "react";

export default function Header(){
    const[showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY > window.innerHeight * 0.6);
        };
    
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    },[]);

    return(
        <header
            className={`fixed top-0 left-0 w-full bg-black text-white transition-transform duration-500 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-[#e62b1e]">TEDxCUSAT 2025</h1>
                <nav className="space-x-6 text-sm md:text-base">
                    <a href="#about" className="hover:text-[#e62b1e] transition">
                        About
                    </a>
                    <a href="#speakers" className="hover:text-[#e62b1e] transition">
                        Speakers
                    </a>
                    <a href="#sponsors" className="hover:text-[#e62b1e] transition">
                        Sponsors
                    </a>
                </nav>
            </div>
        </header>
    );
}