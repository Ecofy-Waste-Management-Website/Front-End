import { useState } from "react";

const navLinks = ["Home", "About", "Services", "Contact us", "Blog"];
import React from 'react'
import Hero from './Components/Hero-Section/hero'
import Navbar from './Components/Top-Header-Section/navbar/navbar'
import Footer from './Components/Footer/footer'


export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="relative min-h-screen overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Background image simulation with overlay */
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.2) 100%),
            url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1400&q=80') center/cover no-repeat;
          z-index: 0;
        }

        /* Navbar */
        .navbar {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 64px;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
        }
        .brand {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 5px 8px;
        }
        .nav-item {
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          padding: 6px 16px;
          border-radius: 999px;
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.2s;
        }
        .nav-item:hover { color: #fff; }
        .nav-item.active {
          background: #22c55e;
          color: #fff;
          font-weight: 600;
        }
        .auth-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .auth-btn {
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .auth-btn:hover { color: #fff; }

        /* Hero Content */
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 64px 48px 80px;
          gap: 32px;
        }

        /* Left side */
        .hero-left { flex: 1; max-width: 480px; }

        .hero-title {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }
        .hero-title .accent { color: #facc15; }

        /* Pickup selector */
        .pickup-selector {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 10px 20px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          margin-bottom: 20px;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
          user-select: none;
        }
        .pickup-selector:hover { background: rgba(255,255,255,0.18); }
        .pickup-icon { font-size: 1rem; opacity: 0.8; }
        .chevron { font-size: 0.7rem; opacity: 0.7; margin-left: 4px; }

        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: #fff;
          border-radius: 12px;
          padding: 6px;
          min-width: 180px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          z-index: 100;
        }
        .dropdown-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #374151;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: background 0.15s;
        }
        .dropdown-item:hover { background: #f0fdf4; color: #16a34a; }
        .dropdown-item.selected { background: #dcfce7; color: #16a34a; }

        /* Input fields */
        .input-group { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }

        .input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.95);
          border-radius: 10px;
          padding: 12px 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }
        .input-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .dot-black { background: #1f2937; }
        .dot-green { background: #22c55e; border: 2px solid #16a34a; }
        .input-field {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.85rem;
          color: #374151;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
        }
        .input-field::placeholder { color: #9ca3af; }
        .clear-btn {
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 1rem;
          line-height: 1;
          padding: 0 2px;
          transition: color 0.15s;
        }
        .clear-btn:hover { color: #4b5563; }

        /* Price CTA */
        .price-btn {
          background: #facc15;
          color: #1a1a1a;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 16px rgba(250,204,21,0.4);
        }
        .price-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(250,204,21,0.5);
        }

        /* Right card */
        .hero-card {
          flex-shrink: 0;
          width: 260px;
          background: #16a34a;
          border-radius: 20px;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          animation: floatCard 3s ease-in-out infinite;
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .bin-wrap {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .bin-svg { width: 110px; height: 110px; filter: drop-shadow(0 8px 20px rgba(0,0,0,0.3)); }

        .schedule-btn {
          width: 100%;
          background: #facc15;
          color: #1a1a1a;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 12px 0;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 12px rgba(250,204,21,0.3);
        }
        .schedule-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(250,204,21,0.45);
        }

        /* Dots pagination */
        .dots { display: flex; justify-content: center; gap: 6px; padding-bottom: 28px; position: relative; z-index: 10; }
        .dot-pg { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.35); }
        .dot-pg.active-pg { background: rgba(255,255,255,0.9); }

        /* Animate in */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a1 { animation: fadeUp 0.5s 0.1s ease both; }
        .a2 { animation: fadeUp 0.5s 0.25s ease both; }
        .a3 { animation: fadeUp 0.5s 0.4s ease both; }
        .a4 { animation: fadeUp 0.5s 0.55s ease both; }
        .a5 { animation: fadeUp 0.6s 0.3s ease both; }
      `}</style>

      {/* Background */}
      <div className="hero-bg" />

      {/* Navbar */}
      <nav className="navbar">
        <span className="brand">Ecofy</span>
        <div className="nav-links">
          {navLinks.map((l) => (
            <button
              key={l}
              className={`nav-item${active === l ? " active" : ""}`}
              onClick={() => setActive(l)}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="auth-links">
          <button className="auth-btn">Signin</button>
          <button className="auth-btn">Login</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-content">
        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-title a1">
            <span style={{ color: "#fff" }}>Smart</span> Way to<br />
            Manage <span className="accent">Waste.</span>
          </h1>

          {/* Pickup dropdown */}
          <div className="a2" style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
            <div className="pickup-selector" onClick={() => setShowDropdown(!showDropdown)}>
              <span className="pickup-icon">⏱</span>
              <span>{pickupType}</span>
              <span className="chevron">▼</span>
            </div>
            {showDropdown && (
              <div className="dropdown">
                {pickupOptions.map((o) => (
                  <button
                    key={o}
                    className={`dropdown-item${pickupType === o ? " selected" : ""}`}
                    onClick={() => { setPickupType(o); setShowDropdown(false); }}
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Inputs */}
          <div className="input-group a3">
            <div className="input-row">
              <span className="input-dot dot-black" />
              <input
                className="input-field"
                placeholder="Pickup Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {location && (
                <button className="clear-btn" onClick={() => setLocation("")}>✕</button>
              )}
            </div>
            <div className="input-row">
              <span className="input-dot dot-green" />
              <input
                className="input-field"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <button className="price-btn a4">See the Prices</button>
        </div>

        {/* Right Card */}
        <div className="hero-card a5">
          <div className="bin-wrap">
            {/* SVG Recycling bin */}
            <svg className="bin-svg" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bin body */}
              <rect x="15" y="40" width="90" height="88" rx="8" fill="#15803d"/>
              <rect x="15" y="40" width="90" height="88" rx="8" fill="url(#binGrad)"/>
              {/* Lid */}
              <rect x="8" y="28" width="104" height="16" rx="6" fill="#166534"/>
              {/* Handle */}
              <rect x="44" y="20" width="32" height="12" rx="6" fill="#166534"/>
              {/* Recycle symbol */}
              <g transform="translate(28, 58) scale(0.53)">
                <path d="M60 10 L75 37 L60 37 L60 10Z" fill="white" opacity="0.95"/>
                <path d="M60 37 L75 37 Q85 37 80 52 L65 78 L55 62 L65 62 Q68 52 60 52Z" fill="white" opacity="0.95"/>
                <path d="M40 78 L25 52 Q20 37 35 37 L45 37 L35 52 Q32 62 40 62Z" fill="white" opacity="0.95"/>
                <circle cx="60" cy="60" r="10" fill="#16a34a"/>
                <path d="M56 57 L60 53 L64 57" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M64 63 L60 67 L56 63" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </g>
              {/* Wheels */}
              <circle cx="35" cy="132" r="7" fill="#166534"/>
              <circle cx="85" cy="132" r="7" fill="#166534"/>
              <circle cx="35" cy="132" r="3" fill="#14532d"/>
              <circle cx="85" cy="132" r="3" fill="#14532d"/>
              <defs>
                <linearGradient id="binGrad" x1="15" y1="40" x2="105" y2="128" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#000" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <button className="schedule-btn">Schedule Later</button>
        </div>
      </div>

      {/* Dots */}
      <div className="dots">
        <div className="dot-pg active-pg" />
        <div className="dot-pg" />
        <div className="dot-pg" />
      </div>
    </div>
  )
}
