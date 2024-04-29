import React, { useState } from 'react'
import ProductCard from "@/components/ProductCard"
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase"
import addMultipleProducts from "@/utils/firebase"
import Link from 'next/link';


const ProductList = async () => {

    await new Promise(resolve => setTimeout(resolve, 3000))


    const collectionRef = collection(db, "products" )
    
    const productCollectionSnapshot = await getDocs(collectionRef)

    const productsData = productCollectionSnapshot.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id
        }
    ))
    

  return (
    <div>
        <div className='container pt-16 mb-5'>
            <h2 className='font-medium text-2xl pb-4'>
                Products
            </h2>

            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 ls:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {
                    productsData.map((item) => {
                      return(
                        <Link href={`/detail/${item.id}`}>
                            <ProductCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            />
                        </Link>
                          
                      )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProductList