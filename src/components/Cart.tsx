"use client";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
interface CartProps {
  cartOpen: Boolean;
  setCartOpen: Function
}
interface CartItemsProps {
  name: string;
  image: string;
  description: string;
  quantity: number;
  price: number;
  id: number;
  colour: Array<String>;
  brand: Array<String>;
}
const Cart: React.FC<CartProps> = ({cartOpen, setCartOpen}) => {
    const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);

    
    useEffect(() => {
        const storedCartItems = localStorage.getItem("cart");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
      
        
    }, []);
    
    const handleIncreaseQuantity = (index: number): void => {
        const newCartItems: CartItemsProps[] = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
        updateLocalStorage(newCartItems);
  
    
  };
  
  const handleDecreaseQuantity = (index: number): void => {
    const newCartItems: CartItemsProps[] = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity--;
      setCartItems(newCartItems);
      updateLocalStorage(newCartItems);
    }
  };
  
  const calculateTotal = (index: number): number => {
    const product = cartItems[index];
    return product.price * product.quantity;
  };
  
  const totalPrice: number = cartItems.reduce(
    (acc: number, _: CartItemsProps, index: number) => acc + calculateTotal(index),
    0
  );
  
  const updateLocalStorage = (cartItems: CartItemsProps[]) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 sm:w-3/4 md:w-1/2 xl:w-1/3   w-full bg-transparent z-50 transition-transform duration-300 ease-in-out justify-between text-black  ${
        cartOpen ? "transform translate-x-0 " : "transform translate-x-full"
      }`}
    >
      <div className="bg-gray-100 py-4 px-6 overflow-y-auto max-h-[calc(100vh-0rem)] justify-between  ">
        <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold   ">Carrito de Compras</h2>
      <RxCross1 className="text-[20px]" onClick={()=>setCartOpen(!cartOpen)}/>
        </div>

        <div className="bg-white rounded shadow md:pl-8 ">
          <div className="m-5 flex flex-col justify-between   ">
            {cartItems.length === 0 ? (
              <div className="px-6 py-4 text-sm ">No hay productos en el carrito</div>
            ) : (
              cartItems.map((product: CartItemsProps, index:number) => (
                <div
                  key={index}
                  className="flex  border-b-2 border-gray-200 justify-between"
                >
                  <div className="flex py-5 w-20 h-32 ">
                    <img
                      className=" rounded-full"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="ml-5 ">
                      <p className="text-sm w-40 font-medium text-[#2B2D42]">
                        {product.name}
                      </p>
                      <div className="flex my-3">
                        <button onClick={()=>handleDecreaseQuantity(index)} className="w-8 text-md h-8 flex items-center justify-center bg-gray-200  rounded-full">
                          <span>-</span>
                        </button>
                        <h3 className="w-10 items-center text-sm font-bold justify-center flex border-gray-300 focus:ring-[#D90429] focus:border-[#D90429] sm:text-sm rounded-md">
                          {product.quantity}
                        </h3>
                        <button onClick={() => handleIncreaseQuantity(index)} className="w-8 text-md h-8 flex items-center text-sm font-bold justify-center bg-gray-200  rounded-full">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end  text-sm md:ml-10  ">
                      <button className="text-[#D90429]    ">
                        Eliminar
                      </button>

                      <h3 className=" font-bold  ">${calculateTotal(index)}</h3>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">

        <div className="mt-4 text-right items-end justify-end  text-xl font-bold">
          Precio Total: ${totalPrice.toFixed(3)}
        </div>
        <div className="flex justify-end mt-4">
          <button className="px-4 text-sm py-2 border-1 border-[#D90429] bg-white  font-medium rounded-md ">
            COMPRAR
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
