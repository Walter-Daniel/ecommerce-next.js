'use client'

import { useEffect, useState } from "react";

import { useForm } from 'react-hook-form'
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import { UserAuth } from "../context/AuthProvider";

export default function RegisterPage() {

  const { register } = useForm();
  const { googleSignIn, user } = UserAuth();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const checkAuth = async() => {
          await new Promise((resolve) => setTimeout(resolve, 400))
          setIsLoading(false)
      }
      checkAuth();
  }, [user])

  const handleGoogleSignIn = async() => {
    try {
      await googleSignIn();  
    } catch (error) {
      console.log(error)
    }
  }

  if(user){
    return  redirect('/')
  }

  // if(isLoading){
  //   return <p>Loading...</p>
  // }

  return (
    <div className="py-8 min-h-[100vh] justify-center content-center  bg-black">
      <div className="w-[100%] flex flex-col justify-center items-center ">
        <form action="" method="post" className="bg-white p-20 xs:w-3/4 md:w-1/3 mx-auto rounded-xl">
          <h2 className="uppercase text-2xl text-end">Ecommerce</h2>
            {/* Name */}
            <div className="flex flex-col my-5" >
                <label htmlFor="name" className="pb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Enter your name here..." 
                  className="border-small rounded-md p-2 border-gray-400" />
            </div>
            {/* Email */}
            <div className="flex flex-col my-5">
                <label htmlFor="email" className="pb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="Enter your email here..." 
                  className="border-small rounded-md p-2 border-gray-400"/>
            </div>
            {/* Password */}
            <div className="flex flex-col my-5">
                <label htmlFor="password" className="pb-1">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password"
                  placeholder="Enter your password here..." 
                  className="border-small rounded-md p-2 border-gray-400 font-medium" />
            </div>
            {/* Password Confirm */}
            <div className="flex flex-col my-5">
                <label htmlFor="confirmPassword" className="pb-1">Confirm Password</label>
                <input 
                  type="confirmPassword" 
                  name="confirmPassword" 
                  id="confirmPassword"
                  placeholder="Enter your password here..." 
                  className="border-small rounded-md p-2 border-gray-400"/>
            </div>
            {/* BUTTONS */}
            <div className="pt-3 md:flex items-center gap-4">
                <Button type="submit" fullWidth color="primary">Login</Button>
                <Button onClick={handleGoogleSignIn} fullWidth color="danger" variant="bordered"  className="mt-1 md:mt-0">
                  <Image src={'/google.png'} alt="google icon" width={25} height={25}/>
                  <p>Google</p>
                </Button>
            </div>
            <div className="flex gap-2 py-2">
              <p>Already have an account?</p>
              <Link href={'/login'} className="underline text-red-600">Login</Link>
            </div>
        </form>
      </div>
    </div>
  );
}