import ButtonVolverHome from "../Carta/ButtonVolverHome";

function Locales() {
  return (
    <div className="min-h-screen max-w-screen bg-gray-200">
      <div>
        <section className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="">
            <ButtonVolverHome md="" />
          </div>
          <div id="#carta" className="flex flex-col">
            <div className="flex flex-col items-end gap-2">
              <h1 className="text-2xl text-right font-medium title-font text-primary sm:text-4xl">
                Descubre nuestra carta
              </h1>
              <div className="h-1 w-32 hidden lg:block bg-green-800 rounded"></div>
            </div>
          </div>
        </section>

        <section>
          <div>Locales</div>
        </section>
      </div>
    </div>
  );
}

export default Locales;
