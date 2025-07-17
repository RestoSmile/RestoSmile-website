import React from 'react';
import '../styles/ContactUs.css';

const socialLinks = [
    {
        name: 'Instagram',
        url: 'https://instagram.com/',
        svg: (
            <svg className="contact-social-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
        ),
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/',
        svg: (
            <svg className="contact-social-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        ),
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/',
        svg: (
            <svg className="contact-social-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-4.18 1.64-6.29 2.18A4.48 4.48 0 0 0 3 7.72v1A10.66 10.66 0 0 1 1 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
        ),
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/',
        svg: (
            <svg className="contact-social-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" /><line x1="16" y1="8" x2="16" y2="16" /><line x1="8" y1="8" x2="8" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
        ),
    },
];

export default function ContactUs() {
    return (
        <div className="contactus-root">
            <div className="contactus-container">
                {/* Left: Contact Info & Socials */}
                <div className="contactus-info">
                    <div>
                        <h2 className="contactus-title">Contact Us</h2>
                        <p className="contactus-subtitle">We'd love to hear from you! Fill out the form or reach us directly.</p>
                        <div className="contactus-details">
                            <div className="contactus-detail-row">
                                <svg className="contactus-detail-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5" /><path d="M3 10.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5" /><polyline points="3 6 12 13 21 6" /></svg>
                                <span>restosmileanpharma@gmail.com</span>
                            </div>
                            <div className="contactus-detail-row">
                                <svg className="contactus-detail-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.09" /><path d="M16 2v4" /><path d="M8 2v4" /><rect x="2" y="8" width="20" height="8" rx="2" /></svg>
                                <span>+91 9999999999</span>
                            </div>
                            <div className="contactus-detail-row contactus-detail-address">
                                <svg className="contactus-detail-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5" /><path d="M3 10.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5" /><polyline points="3 6 12 13 21 6" /></svg>
                                <span>AN Pharmaceuticals Pvt Ltd 6/14, Kirti Nagar Industrial Area, New Delhi - 110015 India</span>
                            </div>
                        </div>
                        <div className="contactus-socials">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contactus-social-link"
                                    aria-label={link.name}
                                >
                                    {link.svg}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="contactus-map-desktop">
                        <iframe
                            title="Delhi Map"
                            src="https://www.google.com/maps?q=Delhi,India&z=11&output=embed"
                            width="100%"
                            height="220"
                            className="contactus-map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                {/* Right: Contact Form & Map (on mobile) */}
                <div className="contactus-form-container">
                    <form className="contactus-form">
                        <div className="contactus-form-group">
                            <label htmlFor="name" className="contactus-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="contactus-input"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="contactus-form-group">
                            <label htmlFor="email" className="contactus-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="contactus-input"
                                placeholder="you@email.com"
                            />
                        </div>
                        <div className="contactus-form-group">
                            <label htmlFor="phone" className="contactus-label">Phone No</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                required
                                className="contactus-input"
                                placeholder="+91 1234567890"
                            />
                        </div>
                        <div className="contactus-form-group">
                            <label htmlFor="message" className="contactus-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="contactus-textarea"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="contactus-submit-btn"
                        >
                            Send Message
                        </button>
                    </form>
                    {/* Map for mobile */}
                    <div className="contactus-map-mobile">
                        <iframe
                            title="Delhi Map"
                            src="https://www.google.com/maps?q=Delhi,India&z=11&output=embed"
                            width="100%"
                            height="220"
                            className="contactus-map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}