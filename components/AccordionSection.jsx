"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { menuDrawer } from "../data/mockData";

export default function MenuDrawer({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  function toggle(id) {
    setExpanded((cur) => (cur === id ? null : id));
  }

  return (
    <>
      {open && <div className="drawer-overlay" onClick={onClose} />}
      <aside className={`menu-drawer${open ? " open" : ""}`}>
        <div className="menu-drawer-header">Campus Portal Menu</div>

        <button className="menu-item flat" onClick={onClose}>
          <Icons.Phone size={16} />
          Contact Us
        </button>

        {menuDrawer
          .filter((item) => item.id !== "contact")
          .map((item) => {
            const Icon = Icons[item.icon] || Icons.Circle;
            const isOpen = expanded === item.id;
            return (
              <div key={item.id} className="menu-group">
                <button className="menu-item" onClick={() => toggle(item.id)}>
                  <Icon size={16} />
                  <span>{item.label}</span>
                  <Icons.ChevronDown
                    size={16}
                    className={`menu-chev${isOpen ? " open" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="menu-submenu">
                    {item.children.map((child) => (
                      <a key={child} href="#" className="menu-subitem" onClick={onClose}>
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
      </aside>
    </>
  );
}
