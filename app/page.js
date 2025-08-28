"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-tight mb-4"
          >
            Power Your Journey with <span className="text-indigo-500">Seamless EV Charging</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg max-w-2xl mx-auto mb-8 text-gray-300"
          >
            Find, book, and charge your electric vehicle at the nearest premium charging stations with just a few clicks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <button onClick={()=>router.push("/hello")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
              Book a Charging Slot
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      {/* Divider */}

      <div className="w-full flex justify-center my-0.1">
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Premium Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Instant Slot Booking</h3>
              <p className="text-gray-400">Reserve a charging slot instantly through our seamless booking system.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Real-Time Availability</h3>
              <p className="text-gray-400">Check real-time station availability before making your trip.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Fast & Reliable Charging</h3>
              <p className="text-gray-400">Experience ultra-fast EV charging with premium service standards.</p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Divider */}

      <div className="w-full flex justify-center my-0.1">
        <div className="h-1 w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="/ev.gif"
              alt="EV Charging"
              className="rounded-xl shadow-lg w-40 ml-10"
            />
            <div>
              <p className="text-lg mb-6 text-gray-300">
                We provide a network of high-speed EV charging stations across major cities, ensuring your trips are smooth and eco-friendly.
              </p>
              <ul className="space-y-4">
                <li>⚡ Ultra-Fast Charging Stations</li>
                <li>📍 Easy Navigation & Station Finder</li>
                <li>💳 Multiple Payment Options</li>
                <li>📊 Charging History & Usage Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}

      <div className="w-full flex justify-center ">
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Power Up Your EV?
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full text-lg font-semibold"
        >
          Book Now
        </motion.button>
      </div>

    </div>
  );
}
