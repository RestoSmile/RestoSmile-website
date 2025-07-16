import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Top Gradient Bar */}
            <div className="navbar-top-bar"></div>
            <nav className="navbar-main">
                <div className="navbar-container">
                    {/* Left: Logo/Brand */}
                    <div className="navbar-logo">
                        <span>RestoSmile</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-links">
                        <a href="#" className="navbar-link">Home</a>
                        <a href="#" className="navbar-link">Our Product</a>
                        <div className="navbar-search">
                            <input
                                type="text"
                                placeholder="What Are You Looking For ?..."
                                className="navbar-search-input"
                            />
                            <button className="navbar-search-btn">
                                <svg className="navbar-search-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            </button>
                        </div>
                        <a href="#" className="navbar-link navbar-icon-link">
                            <svg className="navbar-cart-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" /><circle cx="7" cy="21" r="2" /><circle cx="17" cy="21" r="2" /></svg>
                        </a>
                        <a href="#" className="navbar-link">Oral Health</a>
                        <a href="#" className="navbar-link">Contact Us</a>
                    </div>

                    {/* Login Icon at the far right */}
                    <a href="#" className="navbar-login-link">
                        Login
                        <svg className="navbar-login-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
                        </svg>
                    </a>

                    {/* Mobile menu button */}
                    <div className="navbar-mobile-menu-btn">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="navbar-mobile-btn"
                        >
                            <svg className="navbar-mobile-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="navbar-mobile-menu">
                        <a href="#" className="navbar-link mobile-link">Home</a>
                        <a href="#" className="navbar-link mobile-link">Our Product</a>
                        <a href="#" className="navbar-link mobile-link">Oral Health</a>
                        <a href="#" className="navbar-link mobile-link">Contact Us</a>
                        <a href="#" className="navbar-link navbar-icon-link mobile-link">
                            <svg className="navbar-cart-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" /><circle cx="7" cy="21" r="2" /><circle cx="17" cy="21" r="2" /></svg>
                            Cart
                        </a>
                    </div>
                )}
            </nav>
            {/* Simple horizontal line below navbar */}
            <div className="navbar-bottom-bar"></div>
        </>
    );
}
