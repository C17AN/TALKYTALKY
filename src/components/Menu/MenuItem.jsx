import React from "react";

const MenuItem = ({ title, selectedLanguage, onClick }) => {
  return (
    <li
      className={`p-4 ${selectedLanguage ? "bg-blue-500" : null}`}
      onClick={onClick}
    >
      {title}
    </li>
  );
};

export default MenuItem;
