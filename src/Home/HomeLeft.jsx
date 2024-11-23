import React from "react";

const HomeLeft = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Welcome to Coding Terminal
      </h1>
      <p className="text-sm md:text-lg text-gray-700 mb-6">
       Boost your coding project with Coding Terminal and enjoy your new features  that will be available to you soon
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          Start Practice
        </button>
        <button className="bg-white text-blue-900 border border-blue-900 py-2 px-4 rounded hover:bg-blue-900 hover:text-white transition duration-300">
         About us
        </button>
      </div>
    </div>
  );
};

export default HomeLeft;
