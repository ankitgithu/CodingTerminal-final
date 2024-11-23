import React from "react";

const NavOption = ({ option }) => {
  return (
    <div className="px-4 py-2 text-white cursor-pointer hover:text-blue-300 transition-colors">
      {option}
    </div>
  );
};

export default NavOption;
