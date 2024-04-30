import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { redirect } from "next/navigation";
import firebase from '@/utils/firebase';

const ProductFilter: React.FC = async ({ params }) => {
  const filter = params.productFilter;

  let productsData;

  if(filter === "women" || filter === "men") {
    productsData = await firebase.filterByGenre(filter);
  } else if(filter === "hot%20offers") {
    productsData = await firebase.filterByOffers();
  } else if(filter === "home") {
    redirect("/");
  } else {
    try {
      productsData = await firebase.filterByCategory(filter);
    } catch {
      throw new Error("Error message del producto que no se ontro")
      
      
    }
  }

  return (
    <main>
      <div className='container pt-16 mb-5'>
        <h2 className='font-medium text-2xl pb-4'>
          Products
        </h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 ls:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {productsData && productsData.map((product) => (
            <Link href={`/detail/${product.id}`} key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductFilter;
