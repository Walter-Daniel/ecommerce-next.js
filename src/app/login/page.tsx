'use client'

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { UserAuth } from "../context/AuthProvider";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";

type Inputs = {
  email: string;
  password: string;
}

export default function LoginPage() {

  const { googleSignIn, user } = UserAuth();
  const { register, handleSubmit, formState: {errors} } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  });
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

  console.log(errors)

  return (
    <div className="py-8 min-h-[100vh] justify-center content-center  bg-black">
      <div className="w-[100%] flex flex-col justify-center items-center ">
        <form onSubmit={handleSubmit((data) => console.log(data))} className="bg-white p-20 xs:w-3/4 md:w-1/3 mx-auto rounded-xl">
            <h2 className="uppercase text-2xl text-end">Ecommerce</h2>
            {/* Email */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="email" className="pb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Enter your email here..." 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('email')}
                  />
                  {
                    errors.email?.message && <small className="text-red-600 absolute bottom-0">{errors.email?.message}</small>
                  }
            </div>
            {/* Password */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="password" className="pb-1">Password</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="Enter your password here..." 
                  className="border-small rounded-md p-2 border-gray-400 font-medium" 
                  {...register('password')}
                  />
                  {
                    errors.password?.message && <small className="text-red-600 absolute bottom-0">{errors.password?.message}</small>
                  }
            </div>
            {/* BUTTONS */}
            <div className="pt-3 md:flex items-center gap-4">
                <Button type="submit" fullWidth color="primary">Login</Button>
                <Button onClick={handleGoogleSignIn} fullWidth color="danger" variant="bordered"  className="mt-1 md:mt-0">
                  <Image src={'/google.png'} alt="google icon" width={25} height={25}/>
                  <p>Google</p>
                </Button>
            </div>
            <div className="flex gap-2 pt-3">
              <p className="text-sm">Don't have an account?</p>
              <Link href={'/register'} className="underline text-red-600 text-sm">
                Sign Up
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}