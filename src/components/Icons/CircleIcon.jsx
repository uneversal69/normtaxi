import React from "react";

const CircleIcon = ({ color }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      <circle cx="6" cy="6" r="6" fill="currentColor" />
    </svg>
  );
};

export default CircleIcon;
