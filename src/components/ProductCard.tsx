import Image from "next/image";
import React from 'react';

import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import { Product } from '@/app/types';

const ProductCard: React.FC<Product> = ({ image, title, description, price }) => {

   

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div>
            <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            className="w-full h-auto"
            />
        </div>

        <div className="space-y-2 py-2 ">
            <h2 className="text-accent font-medium uppercase">{title}</h2>
            <p className="text-gray-500 max-w-[150px]">{description}</p>

            <div className="font-bold flex gap-4">
                ${price}
                <del className="text-gray-500 font-normal">
                    {price}
                </del>
            </div>
        </div>

    </div>
  )
}

export default ProductCard