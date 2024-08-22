import ButtonVolverHome from "../Carta/ButtonVolverHome";
import LocalCard from "./LocalCard";
import { locales } from "../assets/data";

function Locales() {
  return (
    <div className="min-h-screen max-w-screen p-4 bg-light bg-opacity-100 flex justify-center md:p-5 lg:pt-10">
      <div className="p-5 flex flex-col gap-4 lg:gap-10 max-w-[768px] lg:max-w-[1024px] xl:max-w-full justify-center">
        <section className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="">
            <ButtonVolverHome md="" />
          </div>
          <div id="#carta" className="flex flex-col">
            <div className="flex flex-col items-end gap-2">
              <h1 className="text-2xl text-right font-medium title-font text-primary sm:text-4xl">
                Ubica nuestro locales
              </h1>
              <div className="h-1 w-32 bg-green-800 rounded"></div>
            </div>
          </div>
        </section>

        <section className="w-full grid grid-cols1 md:grid-cols-2 lg:grid-cols-3">
          {locales.map((local) => (
            <LocalCard
              key={local.id}
              img={local.img}
              distrito={local.distrito}
              direccion={local.direccion}
              mapa={local.mapa}
              horario={local.horario}
            />
          ))}
        </section>
        <div className="">
          <ButtonVolverHome md="md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Locales;
