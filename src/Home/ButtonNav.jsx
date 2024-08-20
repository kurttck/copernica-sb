import React from "react";
import { Link } from "react-router-dom";

function ButtonNav({ children, destino, nombre }) {
  return (
    <Link to={destino} className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        {children}
      </svg>
      {nombre}
    </Link>
  );
}

export default ButtonNav;
