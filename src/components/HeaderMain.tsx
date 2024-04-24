"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { CartProvider } from "../context/CartContext";
import Image from "next/image";

import Cart from "./Cart";

const HeaderMain = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="boder-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        <div className=" lg:flex text-gray-500 text-[30px] gap-4">
          <div className="relative hidden">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative cursor-pointer  ">
            <LuShoppingCart onClick={handleCart} />
            <div className="bg-red-600 hidden rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
            {cartOpen ? (
              <div>
                <CartProvider>
                  <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
                </CartProvider>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
