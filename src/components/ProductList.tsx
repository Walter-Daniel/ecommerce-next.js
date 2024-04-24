import React, { useState } from 'react'
import ProductCard from "@/components/ProductCard"
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase"
import addMultipleProducts from "@/utils/firebase"
import Link from 'next/link';


// const productsData = [
//   {
//       img:"/jacket-1.jpg",
//       title:"Jacket",
//       desc:"MEN Yarn Fleece Full-Zip Jacket",
//       rating: 4,
//       price:"45.00",
//   },
//   {
//       img:"/skirt-1.jpg",
//       title:"Skirt",
//       desc:"Black Floral Wrap Midi Skirt",
//       rating: 5,
//       price:"55.00",
//   },
//   {
//       img:"/party-wear-1.jpg",
//       title:"Party Wear",
//       desc:"Women's Party Wear Shoes",
//       rating: 3,
//       price:"25.00",
//   },
//   {
//       img:"/shirt-1.jpg",
//       title:"Shirt",
//       desc:"Pure Garment Dyed Cotton Shirt",
//       rating: 4,
//       price:"45.00",
//   },
//   {
//       img:"/sports-1.jpg",
//       title:"Sports",
//       desc:"Trekking & Running Shoes - Black",
//       rating: 3,
//       price:"58.00",
//   },
//   {
//       img:"/watch-1.jpg",
//       title:"Watches",
//       desc:"Smart Watches Vital Plus",
//       rating: 4,
//       price:"100.00",
//   },
//   {
//       img:"/watch-2.jpg",
//       title:"Watches",
//       desc:"Pocket Watch Leather Pouch",
//       rating: 4,
//       price:"120.00",
//   }
// ]

const ProductList = async () => {

    const collectionRef = collection(db, "products" )
    
    const productCollectionSnapshot = await getDocs(collectionRef)

    const productsData = productCollectionSnapshot.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id
        }
    ))
    
    console.log(productsData);
    



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