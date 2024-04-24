import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { collection, getDocs } from "firebase/firestore";
import { firestore as db } from "@/app/firebase";
import { redirect } from "next/navigation";

const ProductFilter: React.FC = async ({ params }) => {
  const filter = params.productFilter;

  const collectionRef = collection(db, "products");
  const productCollectionSnapshot = await getDocs(collectionRef);
  const productsData = productCollectionSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));

  return (
    <main>
      <div className='container pt-16 mb-5'>
        <h2 className='font-medium text-2xl pb-4'>
          Products
        </h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 ls:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {productsData.map((item) => {
            
            if (item.genre.toLowerCase() == filter || item.genre.toLowerCase() == "unisex") {
              return (
                <Link href={`/detail/${item.id}`} key={item.id}>
                  <ProductCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                </Link>
              );
            }
            else if(filter == "home"){
                redirect("/")
            }
            else if(item.category == filter) {
                return (
                    <Link href={`/detail/${item.id}`} key={item.id}>
                      <ProductCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                      />
                    </Link>
                  );
            }
            
            return null; // Si no coincide con la categoría, no se renderiza
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductFilter;
