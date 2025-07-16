import React from "react";
import reactSvg from "./assets/react.svg";
import wmremove from "./assets/wmremove-transformed 1.png";
import upRightArrow from "./assets/up-right-arrow.png";
import toothpaste from "./assets/toothpaste.png";

const testimonials = [
  { name: "Jay and Jaya", city: "Ranchi" },
  { name: "Abhimanyu", city: "Delhi" },
  { name: "Ravi", city: "Mumbai" },
  { name: "Sulekha", city: "Kolkata" },
];

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
          <span className="bg-gradient-to-r text-[24px] font-['Poppins'] from-[#7CBFFA] to-[#1B8DF2] text-white py-2 px-4 rounded w-40">
            Oral Hygiene
          </span>
        </div>
        <div className="w-full flex items-center bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-l-[200px] py-8 px-5 md: ">
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

      <section className="py-12 px-4 md:px-16 bg-[#C3F0E6] w-full">
        <h3 className="text-center text-blue-600 text-[30px] font-bold tracking-wider">
          TESTIMONIAL
        </h3>
        <h2 className="text-center text-3xl font-bold mt-2">
          See what customers are saying
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
          <button className="text-blue-600 font-semibold text-[24px] hover:underline">
            Show more
          </button>
          <img src={upRightArrow} className="w-5 md:w-6 mt-6 md:mt-0" />
        </div>
      </section>



      {/* Confidence Section */}
      {/* <div className="w-full flex flex-col items-center my-12">
        <div className="mb-6">
          <span className="bg-gradient-to-r text-[24px] font-['Poppins'] from-[#7CBFFA] to-[#1B8DF2] text-white py-2 px-4 rounded w-40">
            Oral Hygiene
          </span>
        </div>
        <div className="w-full flex items-center bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-l-[200px] py-8 px-5 md: ">
          <div>
            <h2 className="text-white text-center text-[30px] font-semibold font-['Poppins']">Discover Confidence in Every Smile</h2>
            <p className="text-white text-[24px] font-['Poppins']">
              At RestoSmile, we believe in the power of a confident smile and the
              joy of self-care. You deserve a refreshing, invigorating experience
              with every brush. Our expertly crafted toothpaste blends natural
              ingredients with advanced dental science, ensuring each moment of
              care leaves your smile radiant and healthy.
            </p>
          </div>
          <div className="flex-shrink-0 ml-8">
            <img src={toothpaste} alt="Doctor" className=" h-64 w-64 object-cover rounded-lg" />
          </div>
        </div>
      </div> */}
      <div className="w-full bg-[#C3F0E6] flex flex-col items-center my-12 px-4">
      {/* Tagline */}
      <div className="mb-6">
        <span className="bg-gradient-to-r from-[#7CBFFA] to-[#1B8DF2] text-white text-[18px] md:text-[24px] font-['Poppins'] py-2 px-6 rounded">
          Oral Hygiene
        </span>
      </div>

      {/* Container: Blue block + floating image */}
      <div className="relative w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Blue Text Box */}
        <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-l-[200px] px-6 md:px-12 py-10 text-white max-w-3xl z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-['Poppins']">
            Discover Confidence in Every Smile
          </h2>
          <p className="text-base md:text-lg font-['Poppins'] leading-relaxed">
            At RestoSmile, we believe in the power of a confident smile and the joy of self-care.
            You deserve a refreshing, invigorating experience with every brush. Our expertly crafted
            toothpaste blends natural ingredients with advanced dental science, ensuring each moment
            of care leaves your smile radiant and healthy. It’s not just oral care; it’s an act of
            self-love. Embrace the confidence of a brighter smile and let your inner spark shine through.
          </p>
        </div>

        {/* Floating Toothpaste Image */}
        <div className="absolute right-0 bottom-0 md:static md:translate-y-0 -translate-y-10">
          <img
            src={toothpaste}
            alt="RestoSmile Toothpaste"
            className="w-[180px] md:w-[240px] lg:w-[280px] rotate-[15deg]"
          />
        </div>
      </div>
    </div>

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
