import Image from "next/image";
import React from 'react';

import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const ProductCard = ({ img, title, desc, price }) => {

   

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div>
            <Image
            src={img}
            width={200}
            height={200}
            alt={title}
            className="w-full h-auto"
            />
        </div>

        <div className="space-y-2 py-2 ">
            <h2 className="text-accent font-medium uppercase">{title}</h2>
            <p className="text-gray-500 max-w-[150px]">{desc}</p>

            <div className="font-bold flex gap-4">
                ${price}
                <del className="text-gray-500 font-normal">
                    ${parseInt(price) + 50}.00
                </del>
            </div>
        </div>

    </div>
  )
}

export default ProductCard