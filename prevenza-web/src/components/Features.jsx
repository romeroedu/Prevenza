import React from "react";

const Features = () => {
  return (
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
  );
};

export default Features;