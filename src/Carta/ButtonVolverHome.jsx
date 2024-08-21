import React from "react";
import { Link } from "react-router-dom";

function ButtonVolverHome({ md }) {
  return (
    <>
      <Link
        to="/"
        className={`text-white px-5 py-2.5 font-semibold text-sm rounded-lg  bg-[rgb(41,71,66)] inline-flex ${md}`}
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          ></path>
        </svg>
        Volver a pagina de inicio
      </Link>
    </>
  );
}

export default ButtonVolverHome;
