import React from "react";
import { Link } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import ButtonRedes from "./ButtonRedes";
import "./Home.css";

function Home() {
  return (
    <div className="min-h-screen max-w-full bg-cover bg-center container">
      <div className="min-h-screen w-screen bg-gradient-to-b from-primary/50 to-emerald-600/30">
        <div className="mx-auto max-w-7xl pt-16 flex flex-col items-center gap-8 sm:pt-24 lg:flex-row lg:justify-around">
          <section className="w-full pl-5 pr-5 flex flex-col gap-8 sm:text-center sm:max-w-2xl lg:text-left">
            <div>
              <span className="text-white pl-4 pr-4 pt-2 pb-2 font-semibold text-sm rounded-2xl bg-[rgb(41,71,66)]">
                Bienvenidos a Copernica
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-gray-200 tracking-tight sm:text-5xl md:text-6xl">
                Descubre nuestros
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fce96a] to-[#f98080]">
                  {" "}
                  Helados{" "}
                </span>
                artesanales <br /> junto a un
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#723B13] to-[#DFC3A4]">
                  {" "}
                  Café{" "}
                </span>
                de calidad
              </h1>
              <p className="text-white text-base leading-7 sm:text-xl lg:text-lg xl:text-xl">
                Combinamos la calidez de un buen café con la dulzura y frescura
                de helados artesanales. Descubre cómo estos dos placeres se unen
                para ofrecerte una experiencia única e inolvidable.
              </p>
            </div>
            <div className="border-t-2 border-secondary"></div>
            <div className="flex gap-1.5 items-center md:gap-3">
              <p className="text-gray-200 hidden sm:block">
                Visita nuestras redes
              </p>
              <ButtonRedes
                link="https://www.facebook.com/copernica.pe"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </ButtonRedes>
              <ButtonRedes
                link="https://www.instagram.com/copernica.pe/?hl=es"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </ButtonRedes>
              <div className="h-4 border-l-2 border-secondary"></div>
              <div className="flex gap-4  border-2 rounded-full pt-3 pb-3 pl-5 pr-5 text-white bg-[#075e54] cursor-pointer hover:bg-[#25D366]">
                <a href="" className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <p className="text-sm">Escríbenos al Whatsapp</p>
                </a>
              </div>
            </div>
          </section>
          <section className="flex w-full sm:w-auto justify-center items-center pl-5 pr-5">
            <div className="flex flex-col sm:items-center gap-6 w-full">
              <ButtonNav
                nombre="NUESTRA CARTA"
                destino="/Carta"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                  clipRule="evenodd"
                ></path>
              </ButtonNav>
              <ButtonNav
                nombre="VER LOCALES"
                destino="/Locales"
                viewBox="0 0 690 400"
              >
                <path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z"></path>
              </ButtonNav>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
