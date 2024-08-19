import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-cover bg-center container">
      <div className="min-h-screen w-screen bg-gradient-to-b from-primary/50 to-emerald-600/30">
        <div className="flex pt-24 ml-40 mr-40">
          <section className="w-[36rem] flex flex-col gap-8">
            <div>
              <span className="text-white pl-4 pr-4 pt-2 pb-2 font-semibold text-sm rounded-2xl bg-[rgb(41,71,66)]">
                Bienvenidos a Copernica
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl font-bold text-gray-200 tracking-tight">
                Descubre nuestros
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fce96a] to-[#f98080]">
                  {" "}
                  Helados{" "}
                </span>
                artesanales junto a un
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#723B13] to-[#DFC3A4]">
                  {" "}
                  Café{" "}
                </span>
                de calidad
              </h1>
              <p className="text-gray-200 text-xl leading-7">
                Combinamos la calidez de un buen café con la dulzura y frescura
                de helados artesanales. Descubre cómo estos dos placeres se unen
                para ofrecerte una experiencia única e inolvidable.
              </p>
            </div>
            <div className="border-solid border border-red-200"></div>
            <div className="flex gap-7">
              <p>Visita nuestras redes</p>
              <a href="">FB</a>
              <a href="">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <p className="color-[rgb(223 195 164)]">|</p>
              <div className="flex gap-4">
                logo
                <p>Escribenos al Whatsapp</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <Link to="/Carta">Carta</Link>
              <Link to="/Locales">Locales</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
