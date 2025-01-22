import React from "react";

const Maximize = () => {
  return (
    <section id="maximize" className="py-16 bg-blue-100">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-black font-bold text-4xl md:text-5xl">
          Ready to maximize <span className="text-blue-600">your earnings?</span>
        </h1>
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Let Key One Holiday Homes help you reach your full potential.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Maximize;
