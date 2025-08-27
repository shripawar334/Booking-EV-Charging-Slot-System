"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 text-white">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Confirm Your Booking
        </h1>

        {/* Booking Details */}
        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-gray-300">Name:</span>
            <span className="font-semibold">John Doe</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-gray-300">Service:</span>
            <span className="font-semibold">Premium Haircut</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-gray-300">Date:</span>
            <span className="font-semibold">12 Aug 2025</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-gray-300">Time:</span>
            <span className="font-semibold">3:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Price:</span>
            <span className="font-semibold">₹999</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300">
            Confirm Booking
          </button>
          <button onClick={()=>router.push("/book")} className="flex-1 border border-white/30 hover:bg-white/10 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300">
            Go Back
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
