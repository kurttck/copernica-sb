import PropTypes from "prop-types";

function LocalCard({ img, distrito, direccion, mapa, horario }) {
  return (
    <>
      <div className="w-full p-4 drop-shadow-md">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-52 rounded w-full object-cover object-center mb-6"
            src={img}
            alt="local"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="tracking-widest text-green-600 uppercase text-xs font-medium title-font">
                {distrito}
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font">
                {direccion}
              </h2>
            </div>
            <div className="flex  text-green-900">
              <div>
                <svg
                  className="w-6 h-6 me-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <ul>
                  {Object.entries(horario).map(([dia, horarioDia]) => (
                    <li key={dia}>
                      {dia}: {horarioDia}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full flex justify-center mt-2">
              <a
                target="blank_"
                href={mapa}
                className="text-white bg-primary hover:bg-primary/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
              >
                VER EL MAPA
                <svg
                  className="w-4 h-4 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

LocalCard.propTypes = {
  img: PropTypes.string.isRequired,
  distrito: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  mapa: PropTypes.string.isRequired,
  horario: PropTypes.shape({
    lun: PropTypes.string.isRequired,
    mar: PropTypes.string.isRequired,
    mie: PropTypes.string.isRequired,
    jue: PropTypes.string.isRequired,
    vie: PropTypes.string.isRequired,
    sab: PropTypes.string.isRequired,
    dom: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocalCard;
