"use client";

import { useEffect, useState } from "react";
import {Menu, X} from "lucide-react";

export default function Header(){
    const[showHeader, setShowHeader] = useState(false);
    const[menuOpen,setMenuOpen]= useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY > window.innerHeight * 0.6);
        };
    
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    },[]);

    return(
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-black text-white transition-transform duration-500 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-[#e62b1e]">TEDxCUSAT 2025</h1>

                <nav className="hidden md:flex space-x-6 text-sm md:text-base">
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


                <button
                    className="md:hidden z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        <div
        className={`md:hidden bg-black text-white absolute top-full left-0 w-full px-6 py-4 space-y-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#about"
          className="block hover:text-[#e62b1e]"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#speakers"
          className="block hover:text-[#e62b1e]"
          onClick={() => setMenuOpen(false)}
        >
          Speakers
        </a>
        <a
          href="#sponsors"
          className="block hover:text-[#e62b1e]"
          onClick={() => setMenuOpen(false)}
        >
          Sponsors
        </a>
      </div>    
        </header>
    );
}