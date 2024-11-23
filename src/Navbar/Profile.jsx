import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer">
      {/* Profile Picture */}
      <img
        src="https://via.placeholder.com/40" // Replace with your profile image URL
        alt="Profile"
        className="w-10 h-10 rounded-full border border-white"
      />
      {/* Profile Name */}
      <span className="text-white font-medium">John Doe</span>
    </div>
  );
};

export default Profile;
