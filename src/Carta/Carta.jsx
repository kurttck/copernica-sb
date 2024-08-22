import ButtonVolverHome from "./ButtonVolverHome";
import ProductCard from "./ProductCard";
import { products } from "../assets/data";

function Carta() {
  return (
    <>
      <div className="min-h-screen max-w-screen bg-light bg-opacity-100 flex justify-center md:p-5 lg:pt-10">
        <div className="p-5 flex flex-col gap-3 lg:gap-2 max-w-[768px] lg:max-w-[1024px] xl:max-w-full justify-center">
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
          <section className="flex flex-col lg:flex-row gap-4">
            <nav className="w-full p-4 border border-green-800 flex flex-col gap-5 lg:w-1/5 lg:border-0 lg:border-r-2 lg:py-14">
              <div>
                <h2 className="text-xl font-normal mb-1">Categorías</h2>
                <div className="h-1 w-24 bg-green-800 rounded"></div>
              </div>
              <ul className="list-none flex flex-col gap-3">
                <li className="text-md hover:text-secondary duration-150 ease-in-out">
                  Desayunos
                </li>
                <li>Bebidas</li>
                <li>Helados</li>
                <li>Café</li>
                <li>Sandwiches</li>
                <li>Postres</li>
              </ul>
            </nav>

            <div
              id="productos"
              className="flex flex-col gap-6 w-full md:p-2 lg:p-4 lg:w-4/5"
            >
              <div className="bg-primary border-l-8 border-green-950 ps-4 py-2 w-full">
                <h2 className="text-2xl font-medium title-font text-secondary sm:text-4xl">
                  Desayunos
                </h2>
              </div>
              <div
                id="products"
                className="w-full grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    img={product.img}
                    description={product.description}
                    name={product.name}
                  />
                ))}
              </div>
            </div>
          </section>
          <div>
            <ButtonVolverHome md="md:hidden" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carta;
