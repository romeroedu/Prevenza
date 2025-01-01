import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-500 text-white text-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Prevenza</h2>
        <p className="text-lg mb-6">Your ultimate health and wellness companion.</p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;