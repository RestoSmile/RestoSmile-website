import React from "react";
import toothIcon from "../assets/tooth.png";
import "./styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-bg text-white pt-10 pb-6 px-4 w-full">
            {/* Tooth Icon */}
            <div className="flex justify-center mb-4">
                <img src={toothIcon} alt="Tooth Icon" className="h-10 w-10" />
            </div>
            {/* Divider */}
            <div className="border-t border-blue-100 mb-8 w-[90%] mx-auto" />
            {/* Columns */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between w-full max-w-5xl mx-auto mb-8 gap-8 md:gap-0">
                {/* Contact */}
                <div>
                    <p className="font-bold mb-1">CONTACT</p>
                    <p className="font-semibold">India</p>
                    <p>restosmileanpharma@gmail.com</p>
                    <p>+91 9999999999</p>
                </div>
                {/* Products */}
                <div>
                    <p className="font-bold mb-1">PRODUCTS</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Our Story</p>
                </div>
                {/* Legal */}
                <div>
                    <p className="font-bold mb-1">LEGAL</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Terms & Services</p>
                </div>
            </div>
            {/* Address */}
            <div className="text-left md:text-center text-xs md:text-sm w-full max-w-5xl mx-auto mt-6 text-blue-100">
                <p className="italic font-semibold mb-1">AN PHARMACEUTICALS PRIVATE LIMITED</p>
                <p><span className="font-bold">Address:</span> AN Pharmaceuticals Pvt Ltd 6/14, Kirti Nagar Industrial Area, New Delhi - 110015 India</p>
            </div>
        </footer>
    );
}
