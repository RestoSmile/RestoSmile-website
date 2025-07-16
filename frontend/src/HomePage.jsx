import React from "react";
import reactSvg from "./assets/react.svg";
import wmremove from "./assets/wmremove-transformed 1.png";

export default function HomePage() {
  return (
    <div className="bg-[#a0e6e2] font-sans text-gray-800 w-full min-h-screen">
      

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-4 md:px-12 w-full">
        <img src={wmremove} alt="Hero" className="w-full md:w-1/2" />
        <div className="md:ml-12 mt-6 md:mt-0 w-full flex flex-col items-center">
          <h1 className="text-4xl text-[52px] font-['Poppins'] font-bold text-[#2D5C71] mb-2">RestoSmile</h1>
          <p className="italic text-[52px] mb-2 font-['Poppins'] bg-gradient-to-r from-[#466D8F] to-[#1B8DF2] bg-clip-text text-transparent text-center">
            "Tayari Zindagi Bhar Smile Ki"
          </p>
          <p className="text-md text-[24px] mb-4 font-['Poppins'] bg-gradient-to-r from-[#466D8F] to-[#1B8DF2] bg-clip-text text-transparent text-center">
            Stop Sensitivity Before It Starts
          </p>
          <button className="bg-gradient-to-r text-[24px] font-['Poppins'] from-[#7CBFFA] to-[#1B8DF2] text-white py-2 px-4 rounded hover:from-[#6BAFE9] hover:to-[#1A7CE1] w-40">
            Join Us
          </button>
        </div>
      </section>

      {/* Features */}
      <div className="px-4 md:px-12 w-full">
        <section
          className="py-8 flex flex-row bg-white rounded-xl shadow mb-6"
          style={{ background: "linear-gradient(180deg, #DDE5E8 0%, #F2F2F2 33%, #FFFFFF 66%, #CEE6F2 100%)" }}
        >
            <h2 className="text-6xl  px-5 font-semibold text-[#4B98DB] mb-2 leading-tight">
              RestoSmile<br />
              <span className="block text-4xl font-semibold">Anti-Sensitivity Toothpaste</span>
            </h2>
            <div>
                <h3 className="text-[#4B98DB] text-3xl font-semibold mb-2">
                    Stops Pain Before It Starts
                </h3>
                <p className="text-gray-600 text-2xl leading-relaxed">
                Helps Stop Tooth Sensitivity Before It Starts. It Forms A Protective
                Shield Over Exposed Areas, Relieves Existing Discomfort, And
                Strengthens Enamel Against Future Triggers — So Cold Drinks, Sweets,
                And Hot Foods Never Catch You Off Guard.
                </p>

            </div>
        </section>
      </div>

      {/* Hygiene Tips */}
      <div className="w-full flex flex-col items-center my-12">
        <div className="mb-6">
          <span className="bg-white text-blue-600 text-2xl font-bold px-8 py-2 rounded-lg shadow">
            Oral Hygiene
          </span>
        </div>
        <div className="w-full flex items-center bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-[100px] py-8 px-4 md:px-16">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#e0f7fa] rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <img src={reactSvg} alt="Floss" className="w-20 h-20" />
              </div>
              <span className="text-white font-bold text-lg text-center">USE DENTAL FLOSS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e0f7fa] rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <img src={reactSvg} alt="No Smoking" className="w-20 h-20" />
              </div>
              <span className="text-white font-bold text-lg text-center">NO SMOKING</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e0f7fa] rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <img src={reactSvg} alt="Healthy Diet" className="w-20 h-20" />
              </div>
              <span className="text-white font-bold text-lg text-center">HEALTHY DIET</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e0f7fa] rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <img src={reactSvg} alt="Checkup" className="w-20 h-20" />
              </div>
              <span className="text-white font-bold text-lg text-center">REGULAR CHECKUP'S</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-8">
            <img src={wmremove} alt="Doctor" className="h-64 w-64 object-cover rounded-lg border-2 border-blue-200" />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="bg-[#d1f4f2] py-10 w-full">
        <h3 className="text-center text-blue-600 text-sm">TESTIMONIAL</h3>
        <h2 className="text-center text-xl font-bold mb-4">
          See what customers are saying
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {/* Sample testimonial card */}
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img src={reactSvg} alt="Testimonial" className="mx-auto mb-2 rounded-md w-16 h-16" />
            <p className="font-semibold">Jay and Jaya</p>
            <p className="text-xs text-gray-500">Ranchi</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img src={reactSvg} alt="Testimonial" className="mx-auto mb-2 rounded-md w-16 h-16" />
            <p className="font-semibold">Abhimanyu</p>
            <p className="text-xs text-gray-500">Delhi</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img src={reactSvg} alt="Testimonial" className="mx-auto mb-2 rounded-md w-16 h-16" />
            <p className="font-semibold">Ravi</p>
            <p className="text-xs text-gray-500">Mumbai</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img src={reactSvg} alt="Testimonial" className="mx-auto mb-2 rounded-md w-16 h-16" />
            <p className="font-semibold">Sulekha</p>
            <p className="text-xs text-gray-500">Kolkata</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="text-blue-600 underline">Show more</button>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="bg-blue-600 text-white py-10 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2">
            Discover Confidence in Every Smile
          </h2>
          <p className="text-sm">
            At RestoSmile, we believe in the power of a confident smile and the
            joy of self-care. You deserve a refreshing, invigorating experience
            with every brush. Our expertly crafted toothpaste blends natural
            ingredients with advanced dental science, ensuring each moment of
            care leaves your smile radiant and healthy.
          </p>
        </div>
        <img src={reactSvg} alt="Product" className="w-32 md:w-48 mt-6 md:mt-0" />
      </section>

      {/* Footer */}
      <footer className="bg-[#007cd4] text-white text-sm py-8 w-full">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div>
            <p className="font-bold mb-1">Contact</p>
            <p>India</p>
            <p>arbro@arbropharma.com</p>
            <p>+91 8929395183</p>
          </div>
          <div>
            <p className="font-bold mb-1">Products</p>
            <p>About</p>
            <p>Contact</p>
            <p>Our Story</p>
          </div>
          <div>
            <p className="font-bold mb-1">Legal</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Terms & Services</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="italic text-xs">
            ARBRO PHARMACEUTICALS PRIVATE LIMITED | Address: Arbro Pharmaceuticals Pvt Ltd 6/14, Kirti Nagar Industrial Area, New Delhi - 110015 INDIA
          </p>
        </div>
      </footer>
    </div>
  );
}
