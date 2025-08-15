"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold border-l-4 border-purple-500 pl-3">
            Get in Touch
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Have a question, feedback, or just want to say hello?  
            Fill out the form or reach us through the details below.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold">📍 Address</p>
              <p className="text-gray-400">123 EV Street, Pune, India</p>
            </div>
            <div>
              <p className="text-lg font-semibold">📞 Phone</p>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-lg font-semibold">📧 Email</p>
              <p className="text-gray-400">support@evapp.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="bg-[#1e293b] rounded-xl p-8 space-y-6 shadow-lg">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
