import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", id: "home" },
  { name: "Our Achievement", id: "achievement" },
  { name: "Courses", id: "courses" },
  { name: "Batches", id: "batches" },
  { name: "Why Mentors", id: "why-mentors" },
  { name: "Testimonials", id: "testimonials" },
  { name: "News & Media", id: "news-media" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu in mobile view after clicking
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-yellow-400 py-3 px-6 flex flex-col sm:flex-row justify-center items-center text-sm sm:text-base text-black text-center gap-2">
        <p className="font-semibold leading-tight">
          Admission Open For <br className="sm:hidden" /> JEE/NEET/FOUNDATION - ( Register Now & Get Up to 100% Scholarship )
        </p>
        <a
          href="tel:9607768696"
          className="flex items-center gap-2 font-bold text-lg hover:text-gray-700 transition"
        >
          <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full shadow-md">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span>Talk to our expert 9569668800
          </span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-white text-black py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center focus:outline-none"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-20%20at%2012.33.08%20PM-ZkWiXpssgjLNDVK5mj6e4i9OFepWAo.jpeg"
              alt="Mentors Eduserv Logo"
              className="h-16 w-auto object-contain rounded-lg border-none shadow-none scale-[1.2] transition-transform duration-300 hover:scale-125"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 font-medium text-base">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-yellow-600 transition duration-200 focus:outline-none"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white flex flex-col gap-2 shadow-md">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-4 py-2 text-black hover:bg-yellow-600 hover:text-white transition duration-200 focus:outline-none"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
