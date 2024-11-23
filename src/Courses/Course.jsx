import React from "react";

const Course = () => {
  const courses = [
    {
      icon: "📚",
      title: "Data Structures & Algorithms",
      description:
        "Learn the basics of data structures and algorithms for better problem-solving skills.",
      buttonText: "Start Learning",
    },
    {
      icon: "🔍",
      title: "Web Development",
      description:
        "Understand the principles of web development and create dynamic web applications.",
      buttonText: "Start Coding",
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description:
        "Explore the concepts of AI and machine learning for the future of technology.",
      buttonText: "Enroll Now",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-800 to-black text-white py-16 px-8">
      <h1 className="text-center text-4xl font-semibold mb-12">
        Start Your Coding Journey with Coding Terminal
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-center rounded-t-lg text-5xl text-white">
              {course.icon}
            </div>

            {/* Title */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4 text-gray-600">{course.description}</p>
            </div>

            {/* Button */}
            <div className="flex justify-between items-center px-6 pb-6">
              <span className="font-medium text-gray-700">Active</span>
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200">
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
