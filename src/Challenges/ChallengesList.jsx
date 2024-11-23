import React from "react";

const ChallengesList = () => {
  const challenges = [
    { day: "Day 1", title: "Question" },
    { day: "Day 2", title: "Question" },
    { day: "Day 3", title: "Question" },
    { day: "Day 4", title: "Question" },
    { day: "Day 5", title: "Question" },
    { day: "Day 6", title: "Question" },
  
  
  
  ];

  return (
    <div className="p-6 space-y-4">
      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="flex items-center justify-between border rounded-lg p-4"
        >
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
          >
            {challenge.day}
          </a>
          <a
            href="#"
            className="text-black hover:underline font-medium"
          >
            {challenge.title}
          </a>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:opacity-90">
              Code Solution
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:opacity-90 flex items-center">
              <span>Video Tutorial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.276 3.276 0 00-1.757-1.806C20.41 4 12 4 12 4s-8.41 0-9.741.38A3.276 3.276 0 00.502 6.186C0 8 0 12 0 12s0 4 .502 5.814a3.276 3.276 0 001.757 1.806C3.59 20 12 20 12 20s8.41 0 9.741-.38a3.276 3.276 0 001.757-1.806C24 16 24 12 24 12s0-4-.502-5.814zM9.75 15.25v-6.5L15.25 12l-5.5 3.25z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengesList;
