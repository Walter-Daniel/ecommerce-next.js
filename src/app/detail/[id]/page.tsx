'use client'
import "@/app/globals.css";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function ProductDetail() {
  const addToCart = () => {
    const cartString = localStorage.getItem("cart");
    const cart = cartString ? JSON.parse(cartString) : [];
   
    cart.push(product);
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito!");
  };
  const product = {
    id: "1",
    name: "Zapatillas Under Armour Project Rock 5 ",
    description:
      "Los project rock 5s son de las zapatillas para entrenar más innovadores que hemos fabricado. Te proporcionan potencia, energía, sujeción y comodidad increíble.",
    price: 199.999,
    colour: ["blanco ", "negro "],
    image:
      "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/hdqt06ulkao2z7fh38sj21ofja55/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5",
    brand: ["hombre ", "zapatilla "],
    quantity:1
  };

  return (
    <div className="flex justify-center items-center">

    <div className="rounded-md  shadow-lg border-3 border-gray-200 p-4 md:my-12 md:w-4/5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
          <p className="text-[#D90429] justify-start md:hidden">
            {product.brand.join(" - ")}
          </p>
          <h3 className="text-2xl font-medium mb-2 md:hidden">
            {product.name}
          </h3>
          <div className="flex justify-center mb-4">
            <Image
              src={product.image}
              alt={product.name}
              className="object-contain "
              width={500}
              height={500}
              />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-6 justify-center">
          <p className="text-[#D90429] justify-start hidden md:block">
            {product.brand.join(" - ")}
          </p>
          <h3 className="text-2xl font-medium mb-2  hidden md:block">
            {product.name}
            <span className="uppercase">blanco / naranja</span>
          </h3>
          <p className="font-bold text-xl flex flex-col">
            ${product.price}
            <span className="text-[#D90429] text-sm">
              Pagá en 6 cuotas sin interes de ${(product.price / 6).toFixed(3)}
            </span>
          </p>
          <p className="border-b border-gray-400">
            Color :{" "}
            <span className="uppercase font-bold">
              {product.colour.join(" / ")}
            </span>
          </p>
          <p className="text-gray-500 mb-2">{product.description}</p>
          <button onClick={addToCart}  className="rounded-xl  h-12 self-center border-[#D90429] border-2 w-full">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
              </div>
  );
};

