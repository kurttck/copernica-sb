import React from "react";

function ProductCard({ img, description, name }) {
  return (
    <>
      <div className="w-full shadow-md border-2 border-primary rounded-lg">
        <div className="relative group rounded-t-md">
          <div className="absolute z-10 h-full w-full opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 text-light">
            <p>{description}</p>
          </div>
          <div className="overflow-hidden rounded-t-md">
            <img
              className="object-cover rounded-t-md object-center group-hover:scale-125 group-hover:brightness-50 duration-300 ease-in-out"
              src={img}
              alt={name}
            />
          </div>
        </div>
        <div className="h-16 bg-primary flex items-center justify-center text-secondary">
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
