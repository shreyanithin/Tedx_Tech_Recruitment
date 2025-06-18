"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 justify-center items-center text-center">
        <div>
          <h3 className="text-xl font-bold text-[#e62b1e]">TEDxCUSAT 2025</h3>
          <p className="mt-2 text-sm">
            Igniting Ideas. Inspiring Change. Reimagining Tomorrow.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#speakers" className="hover:text-white transition">Speakers</a></li>
            <li><a href="#sponsors" className="hover:text-white transition">Sponsors</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Connect With Us</h4>
          <div className="flex space-x-4 justify-center ">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.png" alt="Instagram" className="h-6 w-6 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="h-6 w-6 hover:opacity-80" />
            </a>
            <a href="mailto:tedx@cusat.ac.in">
              <img src="/icons/mail.png" alt="Email" className="h-6 w-6 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TEDxCUSAT. This independent TEDx event is operated under license from TED.
      </div>
    </footer>
  );
}
