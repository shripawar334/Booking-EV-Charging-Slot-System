"use client";
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

export default function Navbar() {
    // Change this value to "black", "darkBlue", or "transparent" to test
    const [navStyle, setNavStyle] = useState("black");

    const backgroundColors = {
        black: '#222    ', // Current
        darkBlue: '#0a192f', // Classy Blue
        // Modern Glassy
        glassy: 'black' // Home page background color
    };

    return (
        <div>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                background: backgroundColors[navStyle],
                color: '#fff',
                transition: 'background 0.3s ease'
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>EV App</div>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ margin: '0 1rem' }}>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <Link href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
                    </li>
                    <li style={{ margin: '0 1rem' }}>
                        <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

