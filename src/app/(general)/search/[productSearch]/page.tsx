import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { redirect } from "next/navigation";
import firebase from '@/utils/firebase';

const ProductSearch: React.FC = async ({ params }) => {
  const filter = params.productSearch;

  let productsData = await firebase.searchProduct(filter)
  
  const filteredData = productsData.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase()) ||
    product.description.toLowerCase().includes(filter.toLowerCase())
  );
  

  return (
    <main>
      <div className='container pt-16 mb-5'>
        <h2 className='font-medium text-2xl pb-4'>
          Products
        </h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 ls:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {filteredData && filteredData.map((product) => (
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

export default ProductSearch;
