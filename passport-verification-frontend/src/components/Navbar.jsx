import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white position-sticky top-0 z-3">
    <div className="container py-3 position-sticky d-lg-flex top-0 z-3 justify-content-between">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img
          src="/media/images/Googlevisalogo.png"
          alt="Logo"
          style={{ width: "200px" }}
        /> 

        {/* Hamburger Button - visible only on small/medium screens */}
        <button
          className="btn d-lg-none fs-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      
</div>
      {/* Menu Links */}
      <div
        className={` gap-4 ${
          isOpen ? "d-flex flex-column" : "d-none"
        } d-lg-flex flex-lg-row justify-content-lg-end align-items-lg-center`}
      >
        <Link to="/" className="text-decoration-none text-dark px-2">
          Home
        </Link>
        <Link to="/verification" className="text-decoration-none text-dark px-2">
          Verification
        </Link>
        <Link to="/contact" className="text-decoration-none text-dark px-2">
          Contact Us
        </Link>
        <Link to="/admin" className="text-decoration-none text-dark px-2">
          Admin
        </Link>
      </div>
      </div>
    </div>

  );
}
