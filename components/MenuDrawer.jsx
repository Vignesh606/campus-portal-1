"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Home, Printer, Star, ChevronDown } from "lucide-react";
import MenuDrawer from "./MenuDrawer";

function formatSession(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s < 10 ? "0" : ""}${s}s`;
}

export default function Navbar({ user }) {
  const [seconds, setSeconds] = useState(20 * 60);
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="navbar">
      <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="navbar-left">
        <button
          className="navbar-icon-btn"
          aria-label="Menu"
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <Menu size={18} />
        </button>
        <div className="navbar-brand">
          CAMPUS <small>PORTAL &middot; Demo Campus</small>
        </div>
        <button className="navbar-icon-btn" aria-label="Home">
          <Home size={16} />
        </button>
        <button className="navbar-icon-btn" aria-label="Print">
          <Printer size={16} />
        </button>
        <button className="navbar-icon-btn" aria-label="Favorites">
          <Star size={16} />
        </button>
        <div className="quick-links">
          Quick Links <ChevronDown size={14} />
        </div>
      </div>

      <div className="navbar-right">
        <div className="session-time">Session Time : {formatSession(seconds)}</div>
        <div className="profile-menu" ref={ref}>
          <button className="profile-trigger" onClick={() => setOpen((o) => !o)}>
            <span className="avatar">{user.regNo.slice(-2)}</span>
            {user.regNo} ({user.role}) <ChevronDown size={14} />
          </button>
          {open && (
            <div className="profile-dropdown">
              <div className="avatar-lg">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23dbe8ff'/><circle cx='50' cy='40' r='18' fill='%230d6efd'/><ellipse cx='50' cy='85' rx='30' ry='22' fill='%230d6efd'/></svg>"
                  alt="avatar"
                  width={84}
                  height={84}
                />
              </div>
              <button className="dropdown-btn history">Login History</button>
              <button className="dropdown-btn signout">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
