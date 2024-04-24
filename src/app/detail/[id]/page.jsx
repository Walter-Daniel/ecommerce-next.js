"use client";
import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from "next/navigation";
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore as db } from "@/app/firebase";

const ProductDetail = () => {
  const productId = useParams();

  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    const fetchProductData = async () => {
      if (productId?.id) {
        const productData = await getProductData(productId.id);

        if (productData) {
          setProduct(productData);
        }
      }
    };
    fetchProductData();
  }, [productId]);

  const getProductData = async (productId) => {
    if (productId) {
      const productDocRef = doc(db, "products", productId);
      const productDocSnap = await getDoc(productDocRef);

      if (productDocSnap.exists()) {
        return productDocSnap.data();
      } else {
        console.log("No se encontró el producto");
        return null;
      }
    }
    return null;
  };

  const addToCart = () => {
    const cartString = localStorage.getItem("cart");
    const cart = cartString ? JSON.parse(cartString) : [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));


    alert("Producto agregado al carrito!");
  };

  

  return (
    <div className="flex justify-center items-center">
      <div className="rounded-md  shadow-lg border-3 border-gray-200 p-4 md:my-12 md:w-4/5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
            <p className="text-[#D90429] justify-start md:hidden">
              {product?.category}
            </p>
            <h3 className="text-2xl font-medium mb-2 md:hidden">
              {product?.name}
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-96 h-96 "
              
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col space-y-6 justify-center">
            <p className="text-[#D90429] justify-start hidden md:block uppercase">
              {product?.category}
            </p>
            <h3 className="text-2xl font-medium mb-2  hidden md:block">
              {product.title}
            </h3>
            <p className="font-bold text-xl flex flex-col">
              ${product.price}
              <span className="text-[#D90429] text-sm">
                Pagá en 6 cuotas sin interes de $
                {(product.price / 6).toFixed(3)}
              </span>
            </p>
            <p className="border-b border-gray-400">
              Color :{" "}
              <span className="uppercase font-bold">BLANCO / NEGRO</span>
            </p>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <button
              onClick={addToCart}
              className="rounded-xl  h-12 self-center border-[#D90429] border-2 w-full"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
