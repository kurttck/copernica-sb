import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function ButtonNav({ children, destino, nombre, viewBox }) {
  return (
    <Link
      to={destino}
      className="flex items-center justify-center text-white h-20 w-full  border-2 rounded-md border-white
      bg-gradient-to-br from-green-300/200 to-primary/90 gap-4 hover:bg-gradient-to-bl transition duration-300 ease-in-out 
      hover:border-secondary hover:text-secondary 
      sm:w-96"
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

//PARA ASEGURAR QUE TIPO DE DATO DEBE LLEGAR
ButtonNav.propTypes = {
  children: PropTypes.children.isRequired,
  destino: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
};

export default ButtonNav;
