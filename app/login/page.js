"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-md mt-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1e293b] rounded-xl p-8 space-y-6 shadow-lg"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold border-l-4 border-purple-500 pl-3">Login</h1>
            <p className="text-gray-300">Sign in to access your EV account.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all font-semibold"
            >
              Sign In
            </motion.button>
          </form>

          <div className="text-sm text-gray-400 text-center space-y-2">
            <div>
              <span>Forgot your password?</span>
            </div>
            <div>
              <span>Don't have an account? </span>
              <Link href="/signup" className="text-purple-400 hover:text-purple-300 underline">Sign up</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
