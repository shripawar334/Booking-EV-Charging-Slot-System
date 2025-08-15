// app/book-slot/page.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookSlotPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [plate, setPlate] = useState("");
  const [duration, setDuration] = useState("1");
  const router = useRouter();

  const station = {
    name: "GreenCharge EV Station",
    location: "Pune, Maharashtra",
    ratePerHour: 150,
  };

  const totalPrice = duration * station.ratePerHour;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-6">
        {/* Station Info */}
        <div className="bg-gray-700 p-5 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">{station.name}</h2>
          <p className="text-gray-300">{station.location}</p>
          <p className="mt-2 text-sm text-gray-400">
            ₹{station.ratePerHour} per hour
          </p>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm text-gray-300">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-300">Select Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Vehicle Information</h3>
          <input
            type="text"
            placeholder="Vehicle Brand (e.g. Tata)"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Vehicle Model (e.g. Nexon EV)"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Number Plate (e.g. MH12AB1234)"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Charging Duration (hours)</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="0.5">0.5 Hour</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
            <option value="4">4 Hours</option>
          </select>
        </div>

        {/* Summary */}
        <div className="bg-gray-700 p-5 rounded-xl shadow-md flex justify-between">
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-xl font-bold text-green-400">₹{totalPrice}</span>
        </div>

        {/* Button */}
        <button
          // onClick={() => alert("Proceeding to payment...")}
          onClick={() => router.push("/confirm")}
          className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 transition-all font-bold text-lg shadow-lg"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
