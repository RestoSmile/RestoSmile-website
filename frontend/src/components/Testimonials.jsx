import React from 'react'
import wmremove from "../assets/wmremove-transformed 1.png";
import upRightArrow from "../assets/up-right-arrow.png";

const testimonials = [
    { name: "Jay and Jaya", city: "Ranchi" },
    { name: "Abhimanyu", city: "Delhi" },
    { name: "Ravi", city: "Mumbai" },
    { name: "Sulekha", city: "Kolkata" },
];

export default function Testimonials() {
    return (
        <div>
            <section className="py-12 px-4 md:px-16 w-full mt-5">
                <h3 className="text-center text-blue-600 text-[30px] font-bold tracking-wider">
                    TESTIMONIALS
                </h3>
                <h2 className="text-center text-3xl font-bold mt-2">
                    See what our customers are saying
                </h2>
                <p className="text-center text-gray-700 mt-2 mb-8">
                    Discover how video testimonial has transformed Oral Health
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {testimonials.map((person, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl shadow-md"
                        >
                            <img
                                src={wmremove}
                                alt={person.name}
                                className="w-full h-auto object-cover"
                            />
                            {/* Fading black overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white z-10">
                                <p className="font-semibold text-base">{person.name}</p>
                                <p className="text-sm">{person.city}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center text-center mt-6">
                    <button className="text-blue-600 font-semibold text-[24px] hover:cursor-pointer hover:underline">
                        Show more
                    </button>
                    <img src={upRightArrow} className="w-5 md:w-6 mt-6 md:mt-0" />
                </div>
            </section>
        </div>
    )
}