'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

import { UserAuth } from "@/app/context/AuthProvider";
import SkeletonProductDetail from "@/components/Skeleton";
import { toast } from "react-toastify";

interface Product {
  category: string;
  name: string;
  image: string;
  title: string;
  price: number;
  description: string;
  id: string;
}

const ProductDetail = () => {
  const { user } = UserAuth();
  const { id } = useParams<{ id?: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>({});

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (id) {
          const productData = await getProductData(id);

          if (productData) {
            setProduct(productData);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductData();
  }, [id]);

  const getProductData = async (productId: string) => {
    if (productId) {
      const productDocRef = doc(db, "products", productId);
      const productDocSnap = await getDoc(productDocRef);

      if (productDocSnap.exists()) {
        return productDocSnap.data() as Product;
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
    const isProductInCart = cart.some(
      (item: Product) => item.id === product.id
    );
    if (isProductInCart) {
      toast.error("This products is already added!");
    } else {
      if (!user) {
        toast.error("You need to log in first");
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
     
 
        toast.success('Add to Cart successful!');
      }
    }
  };

  if (isLoading) {
    return <SkeletonProductDetail />;
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] mb-24">
      <div className="rounded-md shadow-lg border-3 border-gray-200 md:mb-12 md:w-4/5">
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
                Pay in 6 installments without interest of $
                {(product.price / 6).toFixed(3)}
              </span>
            </p>
            <p className="border-b border-gray-400">
              Colour :{" "}
              <span className="uppercase font-bold">White / Black</span>
            </p>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <button
              onClick={addToCart}
              className="rounded-xl uppercase  h-12 self-center border-[#D90429] border-2 w-full"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
