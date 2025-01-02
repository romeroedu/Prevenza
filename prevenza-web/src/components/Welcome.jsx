import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col">
      {/* Main Content Section */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 pt-32 py-10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Prevenza</h1>
            <p className="text-lg text-gray-700 mb-8">
            Empowering Your Health, Preventing Tomorrow's Risks 
            </p>
            <Link to="/signup" className="bg-sky-900 text-white px-6 py-2 rounded-full">Get Started</Link>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="py-10 bg-red-400">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-96 h-96 mx-auto mb-4 flex items-center justify-center rounded-full">
                <img src={"./images/welcome_1.webp"} alt="Assist Employees" className="w-full h-full object-contain"/>
              </div>
              <h2 className="text-2xl font-bold mb-2">Assist Employees</h2>
              <p className="text-gray-700">Provide a convenient commute option for employees without vehicles.</p>
            </div>
            <div className="text-center">
              <div className="w-96 h-96 mx-auto mb-4 flex items-center justify-center rounded-full">
                <img src={"./images/welcome_2.webp"} alt="Enhance Collaboration" className="w-full h-full object-contain"/>
              </div>
              <h2 className="text-2xl font-bold mb-2">Enhance Collaboration</h2>
              <p className="text-gray-700">Strengthen relationships and collaboration among colleagues.</p>
            </div>
            <div className="text-center">
              <div className="w-96 h-96 mx-auto mb-4 flex items-center justify-center rounded-full">
                <img src={"./images/welcome_3.webp"} alt="Reduce Emissions" className="w-full h-full object-contain"/>
              </div>
              <h2 className="text-2xl font-bold mb-2">Reduce Emissions</h2>
              <p className="text-gray-700">Contribute to a greener planet by reducing gas emissions.</p>
            </div>
          </div>
        </section> */}


        <section id="features" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-6">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white shadow-md rounded">
                    <h4 className="text-xl font-semibold mb-2">Daily Health Tips</h4>
                    <p>Receive personalized tips to stay healthy every day.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded">
                    <h4 className="text-xl font-semibold mb-2">Symptom Checker</h4>
                    <p>Check symptoms and get tailored recommendations.</p>
                </div>
                <div className="p-6 bg-white shadow-md rounded">
                    <h4 className="text-xl font-semibold mb-2">Health Tracking</h4>
                    <p>Track your fitness, weight, and medical history.</p>
                </div>
                </div>
            </div>
        </section>

        {/* About Us Section */}
        <section className="bg-gray-200 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-8">Learn more about our mission and values.</p>
            <Link to="/about" className="bg-sky-900 text-white px-6 py-2 rounded-full">Read More</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Welcome;