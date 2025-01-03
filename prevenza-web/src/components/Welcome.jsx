import React from "react";
import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdTipsAndUpdates } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="h-screen absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./healthy_people_image.jpg')`,
          zIndex: -1,
        }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center text-white bg-opacity-50 bg-gray-800 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-20">
          Empowering Your Health, <br className="hidden sm:block" /> Preventing Tomorrow's Risks
        </h1>
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-7">
          <Link
            to="/symptom-assessment"
            className="bg-sky-900 hover:bg-sky-700 text-white px-6 py-3 rounded-full text-sm sm:text-lg"
          >
            Symptom Assessment
          </Link>
          <Link
            to="/health-tips"
            className="bg-sky-900 hover:bg-sky-700 text-white px-6 py-3 rounded-full text-sm sm:text-lg"
          >
            Health Tips
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10 bg-gray-100 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Prevenza</h2>
          <p className="text-gray-700 mb-8">
            At Prevenza, we aim to empower individuals by providing accurate and
            accessible health insights. Our mission is to make health
            management simple and effective for everyone.
          </p>
          <Link
            to="/about"
            className="bg-sky-800 hover:bg-sky-700 text-white px-6 py-3 rounded-full"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-100 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded">
              <MdOutlineHealthAndSafety className="text-sky-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Symptom Checker</h3>
              <p>Quickly check symptoms and get tailored health insights.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <MdTipsAndUpdates className="text-sky-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Health Tips</h3>
              <p>Stay informed with actionable tips to improve your well-being.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <BsGraphUp className="text-sky-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
              <p>Track fitness, weight, and medical history to stay on top of your health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 bg-gray-100 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded">
              <p className="text-gray-700 italic">
                “This app helped me identify a condition I didn’t know I had.
                Thank you for this lifesaving tool!”
              </p>
              <p className="mt-4 font-semibold text-gray-900">- User A</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <p className="text-gray-700 italic">
                “Easy to use and surprisingly accurate. It gave me peace of mind
                and directed me to the right care.”
              </p>
              <p className="mt-4 font-semibold text-gray-900">- User B</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <p className="text-gray-700 italic">
                “The health tips and symptom checker are fantastic. Highly
                recommend this app!”
              </p>
              <p className="mt-4 font-semibold text-gray-900">- User C</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Links Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Ready to Take Control of Your Health?
        </h2>
        <p className="mb-8 text-gray-800">
          Download Prevenza today and start your journey to better health.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-black px-6 py-3 rounded-full hover:bg-gray-800 flex items-center text-white"
          >
            <FaApple className="mr-2" /> App Store
          </a>
          <a
            href="#"
            className="bg-black px-6 py-3 rounded-full hover:bg-gray-800 flex items-center text-white"
          >
            <FaGooglePlay className="mr-2" /> Google Play
          </a>
        </div>
      </section>
    </div>
  );
};

export default Welcome;