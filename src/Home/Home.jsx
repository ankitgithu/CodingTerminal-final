import React from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center py-8 px-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex justify-center items-center h-full">
          <div className="w-full lg:w-4/5"> {/* Increased the width */}
            <HomeLeft />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center h-full">
          <div className="w-full lg:w-4/5"> {/* Increased the width */}
            <HomeRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
