"use client";

import { FaChevronDown } from "react-icons/fa";

export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 animate-float-down z-20">
      <div className="animate-bounce">
        <FaChevronDown className="text-white text-2xl opacity-80" />
      </div>
    </div>
  );
};