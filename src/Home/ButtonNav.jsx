import React from "react";
import { Link } from "react-router-dom";

function ButtonNav({ children, destino, nombre, viewBox }) {
  return (
    <Link
      to={destino}
      className="flex items-center justify-center text-white h-20 w-full sm:w-96 border-2 rounded-md border-white
      bg-gradient-to-br from-green-300/200 to-primary/90 gap-4 hover:bg-gradient-to-bl transition duration-300 ease-in-out 
      hover:border-secondary hover:text-secondary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox={viewBox}
      >
        {children}
      </svg>
      <p className="uppercase text-lg">{nombre}</p>
    </Link>
  );
}

export default ButtonNav;
