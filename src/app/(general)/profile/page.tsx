'use client'

import { collection, doc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Purchases } from "@/components/Purchases";
import { UserAuth } from "../../context/AuthProvider";
import { Profile } from "@/components/Profile";
import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";

interface PurchaseProps {
    products: { [productName: string]: number };
    amount: number;
}

export default function ProfilePage() {
    const { user, loading } = UserAuth();
    const [purchases, setPurchases] = useState<PurchaseProps[] | []>([]);
    const unsubscribeRef = useRef<ReturnType<typeof onSnapshot> | null>(null);
  
    if (!loading && !user) {
      redirect('/login')
    }
  
    useEffect(() => {
      const fetchPurchases = async () => {
        const collectionRef = await collection(db, `shop/cart-shop/${user?.uid}`);
        try {
          const querySnapshot = await getDocs(collectionRef);
          const fetchedPurchases: PurchaseProps[] = querySnapshot.docs.map((doc) => doc.data() as PurchaseProps);
          setPurchases(fetchedPurchases);
        } catch (error) {
          console.error('Error fetching purchases:', error);
          setPurchases([]);
        }
      };
  
      fetchPurchases();
  
      // Create the unsubscribe function within useEffect
      unsubscribeRef.current = onSnapshot(collection(db, `shop/cart-shop/${user?.uid}`), (querySnapshot) => {
        const fetchedPurchases: PurchaseProps[] = querySnapshot.docs.map((doc) => doc.data() as PurchaseProps);
        setPurchases(fetchedPurchases);
        console.log("Current purchases: ", fetchedPurchases);
      });
  
      // Clean up the unsubscribe function on component unmount
      return () => unsubscribeRef.current?.(); // Call unsubscribe if it exists
    }, [user]);
    
  return (
    <div className="bg-gray-50 min-h-[100vh]">
        <div className="w-full bg-main-color">
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <Profile />
                    {
                        purchases.length > 0 ? <Purchases purchases={purchases}/> : (
                            <div className="bg-white text-black w-full flex justify-center items-center"> 
                                <h2 className="text-2xl">Haven't made a purchase yet.</h2>
                            </div>
                        )
                    }  
                </div>
            </div>
        </div>
    </div>
  )
}