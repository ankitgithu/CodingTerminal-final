import React from "react";
import Nav from "./Navbar/Nav";
import Home from "./Home/Home";
import Course from "./Courses/Course";
import ChallengesList from "./Challenges/ChallengesList";

const App = () => {
  return (
    <div>
      <Nav />
      {/* Add padding to account for the fixed Nav */}
      <div className="pt-16">
        <Home />
      </div>
      <div>
        <Course/>
      </div>
      <div>
        <ChallengesList/>
      </div>
    </div>
  );
};

export default App;
