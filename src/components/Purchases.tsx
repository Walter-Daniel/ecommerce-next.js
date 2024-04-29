import React from 'react'
import { BiPurchaseTag } from "react-icons/bi";

interface PurchaseProps {
    purchases: Purchase[]
}

export interface Purchase {
    amount:    number;
    cartItems: CartItem[];
}

export interface CartItem {
    genre:       string;
    category:    string;
    description: string;
    id:          number;
    quantity:    number;
    price:       number;
    title:       string;
    image:       string;
    "hot-offer": boolean;
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
    
                            {
                                purchase.cartItems.map(item => (
                                    <div className="grid grid-cols-2" key={item.id}>
                                        <div className="px-4 py-2 font-semibold">{item.title}</div>
                                        <div className="px-4 py-2">{item.quantity}</div>
                                    </div>
                                ))
                            }
                                
                        
    
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
