"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (

        <nav className="flex text-white items-center justify-between p-4 bg-gray-900">
            <div className=' '>Ev App</div>
            <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
                <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
                <li><Link href="/login" className="hover:text-blue-500">login</Link></li>
                <li className="relative group">
                    <button className="hover:text-blue-500 inline-flex items-center">More
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <ul className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg ring-1 ring-black/10 hidden group-hover:block">
                        <li>
                            <Link href="/customer" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Customer</Link>
                        </li>
                        <li>
                            <Link href="/highway" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Highway station</Link>
                        </li>
                        <li>
                            <Link href="/building" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Building station</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar