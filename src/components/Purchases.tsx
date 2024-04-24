import React from 'react'
import { BiPurchaseTag } from "react-icons/bi";

interface Purchase {
    products: { [productName: string]: number };
    amount: number;
}

interface PurchaseProps {
    purchases: Purchase[]
}

export const Purchases: React.FC<PurchaseProps> = ({purchases}) => {
  return (
    <div className='flex flex-col w-full items-center'>
    {
        purchases.map((purchase, index) => (

            <div className="w-full md:w-10/12 m-2" key={index}>
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-red-500">
                            <BiPurchaseTag size={20}/>
                        </span>
                        <span className="tracking-wide">Purchase</span>
                    </div>
                   
                        <div key={index} className="text-gray-700 border-[1px] my-2">
    
                            {Object.entries(purchase.products).map(([productName, quantity]) => (
                                <div className="grid grid-cols-2" key={productName}>
                                    <div className="px-4 py-2 font-semibold">{productName}</div>
                                    <div className="px-4 py-2">{quantity}</div>
                                </div>
                            ))}
    
                            <div className="flex justify-end">
                                    <div className="px-4 py-2 font-semibold">Amount</div>
                                    <div className="px-4 py-2">{purchase.amount}</div>
                            </div>
    
                        </div>
                            
                </div>
            </div>

        ))
    }
    </div>
   
  )

}
