"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar({   selectedItem}) {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleNavClick = (path) => {
    router.push(path);
    setShowMobileNav(false); // close mobile nav on selection
  };
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/pages/about-us",
    },
    {
      name: "Our Services",
      path: "/pages/our-services",
    },
    {
      name: "Why Mie Ride",
      path: "/pages/why-mie-ride",
    },
    {
      name: "Testimonials",
      path: "/pages/testimonials",
    },
    {
      name: "Blogs",
      path: "/pages/blogs",
    },
    {
      name: "Advertise With Us",
      path: "/pages/advertise-with-us",
    },
    {
      name: "Partner With Us",
      path: "/pages/partner-with-us",
    },
    {
      name: "Contact Us",
      path: "/pages/contact",
    },
  ];
  return (
    <div className="navMain">
      <div className="d-flex align-items-center justify-content-between px-3 py-2">
        <div className="brandLogo">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="navContant d-md-flex justify-content-between w-100 d-none">
          {navItems?.map((v, i) => (
            <div className="navItem"  key={i}
            onClick={() => handleNavClick(v.path)}
            style={{ cursor: "pointer" }}>
              <p className="mb-0" style={{color: selectedItem == v?.name ? "#CFFF13":"white"}}>{v?.name}</p>
            </div>
          ))}
        </div>
        <div className="bar d-md-none d-block">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
            onClick={() => setShowMobileNav(true)}
            style={{ width: "24px", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobileNav ${showMobileNav ? "show" : ""}`}>
        <div className="mobileNavHeader d-flex justify-content-between align-items-center p-3">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" className="logo" />
          </div>
          <div onClick={() => setShowMobileNav(false)} style={{ cursor: "pointer" }}>
            ❌
          </div>
        </div>
        <div className="mobileNavItems px-3">
          {navItems?.map((v, i) => (
            <div className="mobileNavItem py-2 border-bottom"  key={i}
            onClick={() => handleNavClick(v.path)}
            style={{ cursor: "pointer" }}>
              <p className="mb-0" style={{color: selectedItem == v?.name ? "#CFFF13":"white"}}>{v?.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {showMobileNav && (
        <div
          className="overlay"
          onClick={() => setShowMobileNav(false)}
        />
      )}
    </div>
  );
}

export default Navbar;
