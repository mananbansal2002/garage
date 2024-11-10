"use client";
import React, { useState } from "react";

const Header = ({ isDarkMode, toggleDarkMode }) => (
  <header className={`sticky top-0 z-50 ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-md`}>
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>Montu Garage</h1>
        <div className="flex items-center space-x-6">
          <a href="#services" className={`hover:text-[#982B1C] ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
            Services
          </a>
          <a href="#about" className={`hover:text-[#982B1C] ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
            About
          </a>
          <a href="#gallery" className={`hover:text-[#982B1C] ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
            Gallery
          </a>
          <a href="#contact" className={`hover:text-[#982B1C] ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
            Contact
          </a>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-[#F2E8C6] dark:bg-gray-800">
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  </header>
);

const Hero = ({ isDarkMode }) => (
  <section className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-[#F2E8C6]"}`}>
    <div className="container mx-auto px-6 text-center">
      <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>Quality Service for Every Ride!</h1>
      <p className={`text-xl mb-8 ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>Your trusted two-wheeler service center in Bhuvaneshwar</p>
      <a href="#contact" className="bg-[#982B1C] text-white px-8 py-3 rounded-full hover:bg-[#800000] transition duration-300">
        Book Service
      </a>
    </div>
  </section>
);

const Highlights = ({ isDarkMode }) => (
  <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>Key Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Affordable pricing", "Experienced technicians", "Quick turnaround time"].map((highlight, index) => (
          <div key={index} className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-[#F2E8C6]"} text-center`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#982B1C]"}`}>{highlight}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = ({ isDarkMode }) => (
  <section id="about" className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-[#DAD4B5]"}`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>About Us</h2>
      <div className="max-w-3xl mx-auto">
        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#982B1C]"}`}>Meet Montu Bhaiya</h3>
        <p className={`mb-6 ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>A passionate two-wheeler mechanic with over 22 years of experience. Born and raised in Cuttack, he started Montu Garage with a mission to provide reliable, affordable services to local bike owners.</p>
        <div className="mt-8">
          <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#982B1C]"}`}>Our Values:</h4>
          <ul className={`list-disc pl-6 ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
            <li>Customer satisfaction</li>
            <li>Quality craftsmanship</li>
            <li>Transparency and honesty</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Services = ({ isDarkMode }) => (
  <section id="services" className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>Services We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Basic Service",
            services: ["Oil change", "Brake inspection", "Tyre pressure check"],
          },
          {
            title: "Premium Service",
            services: ["Engine Replacement", "Engine Tuning", "Lubricating", "Air filter replacement"],
          },
          {
            title: "Customized and Critical Repairs",
            services: ["Electrical System Repair", "Gear Box Overhaul"],
          },
        ].map((service, index) => (
          <div key={index} className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-[#F2E8C6]"}`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#982B1C]"}`}>{service.title}</h3>
            <ul className={`space-y-2 ${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
              {service.services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Gallery and Contact components remain the same, just updating colors
const Gallery = ({ isDarkMode }) => (
  <section id="gallery" className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-[#DAD4B5]"}`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="/image1.jpeg" alt="Garage Service 1" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        <img src="/image2.jpeg" alt="Garage Service 2" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        <img src="/image3.jpeg" alt="Garage Service 3" className="rounded-lg shadow-lg w-full h-64 object-cover" />
      </div>
      <div className="mt-8">
        <video controls className="h-72 w-full rounded-lg shadow-lg">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

const Contact = ({ isDarkMode }) => (
  <section id="contact" className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#800000]"}`}>Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`${isDarkMode ? "text-[#DAD4B5]" : "text-gray-700"}`}>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-[#DAD4B5]" : "text-[#982B1C]"}`}>Location & Hours</h3>
          <p className="mb-4">Plot No-818, Mayfair Lagoon Rd, Jayadev Vihar, Bhuvaneshwar</p>
          <p className="mb-4">Phone: 9861392654</p>
          <p className="mb-4">Opening Hours: Monday To Sunday, 9:00 AM – 9:00 PM</p>
        </div>
        <div className="h-64">
          <iframe src="https://www.google.com/maps?q=20.29858,85.8186333&z=17&hl=en&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ isDarkMode }) => (
  <footer className={`py-8 ${isDarkMode ? "bg-gray-900" : "bg-[#800000]"} text-white`}>
    <div className="container mx-auto px-6 text-center">
      <p>© 2024 Montu Garage. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <Highlights isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Gallery isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
