import React from "react";

function ButtonNav({ children, link, viewBox }) {
  return (
    <>
      <a
        href={link}
        className="text-white transition border border-transparent duration-200 ease-in-out hover:text-secondary bg-primary p-2.5 text-white rounded-full
        hover:border-secondary hover:border hover:bg-transparent"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox={viewBox}
        >
          {children}
        </svg>
      </a>
    </>
  );
}

export default ButtonNav;
