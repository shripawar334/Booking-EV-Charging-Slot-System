"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";



const mockStations = [
  { id: 1, name: "Central EV Hub", location: "Mumbai", slots: 5, price: 120, rating: 4.8 },
  { id: 2, name: "GreenCharge Station", location: "Pune", slots: 2, price: 150, rating: 4.6 },
  { id: 3, name: "EcoVolt Charger", location: "Delhi", slots: 8, price: 100, rating: 4.9 },
  { id: 4, name: "VoltUp Power", location: "Bangalore", slots: 3, price: 200, rating: 4.7 },
  { id: 5, name: "ChargePoint", location: "Hyderabad", slots: 4, price: 180, rating: 4.5 },
  { id: 6, name: "ElectroStation", location: "Chennai", slots: 6, price: 160, rating: 4.4 },
  { id: 7, name: "PowerGrid EV", location: "Kolkata", slots: 1, price: 140, rating: 4.3 },
  { id: 8, name: "ChargeHub", location: "Ahmedabad", slots: 7, price: 130, rating: 4.2 },
  { id: 9, name: "WattStation", location: "Jaipur", slots: 2, price: 110, rating: 4.1 },
  { id: 10, name: "SparkCharge", location: "Surat", slots: 3, price: 170, rating: 4.0 },
];

export default function StationsList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("none");
  const router = useRouter();

  const filteredStations = mockStations
    .filter((station) =>
      station.name.toLowerCase().includes(search.toLowerCase()) ||
      station.location.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "low") return a.price - b.price;
      if (filter === "high") return b.price - a.price;
      if (filter === "slots") return b.slots - a.slots;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Select Your Charging Station</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg w-full md:w-1/3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="none">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="slots">Slots Available</option>
        </select>
      </div>

      {/* Stations List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredStations.map((station) => (
          <div
            key={station.id}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-green-500/40 hover:scale-105 transition transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{station.name}</h2>
            <p className="text-gray-300">{station.location}</p>
            <p className="mt-2">💰 Price: ₹{station.price}</p>
            <p>⚡ Slots Available: {station.slots}</p>
            <p>⭐ Rating: {station.rating}</p>
            <button onClick={()=>router.push("/book")} className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
