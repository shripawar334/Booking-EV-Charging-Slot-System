"use client";
import Image from "next/image";

export default function about() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Driving the future of sustainable transportation.  
          We bring you the most seamless EV advance booking experience.
        </p>
      </section>

      {/* About Content */}
      <section className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-6 py-12 gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-300 mb-4">
            We are a passionate team working to revolutionize electric vehicle adoption.  
            Our platform allows users to explore, compare, and book EVs with just a few clicks.
          </p>
          <p className="text-gray-400">
            With cutting-edge technology and a commitment to sustainability,  
            we aim to make eco-friendly travel accessible to everyone.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/ev-team.jpg"
            alt="Our Team"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-300">
            To accelerate the transition to sustainable energy by making EV bookings simple,
            transparent, and accessible to all.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-300">
            A greener planet where electric vehicles are the norm, and clean energy fuels every journey.
          </p>
        </div>
      </section>
    </div>
  );
}
