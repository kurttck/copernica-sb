import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Pagina Principal</h1>
      <Link to="/Carta">
        <button>Carta</button>
      </Link>
      <Link to="/Locales">
        <button>Locales</button>
      </Link>
    </div>
  );
}

export default Home;
