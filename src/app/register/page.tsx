'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import { UserAuth } from "../context/AuthProvider";
import { userSchema } from "@/validations/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
}

export default function RegisterPage() {
  const router = useRouter();

  const { emailAndPasswordSignIn } = UserAuth();
  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  });

  const onSubmit:SubmitHandler<Inputs> = data => {
    const { email, password, displayName } = data;
    emailAndPasswordSignIn(email, password, displayName)
    reset()
    router.push("/");
  }

  return (
    <div className="py-8 min-h-[100vh] justify-center content-center  bg-black">
      <div className="w-[100%] flex flex-col justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-20 xs:w-1/2 md:w-3/4 lg:w-1/3 mx-auto rounded-xl">
          <h2 className="uppercase text-2xl text-end">Ecommerce</h2>
            {/* Name */}
            <div className="flex flex-col pb-5 relative" >
                <label htmlFor="displayName" className="pb-1">Name</label>
                <input 
                  type="text" 
                  id="displayName"
                  placeholder="Enter your displayName here..." 
                  className="border-small rounded-md p-2 border-gray-400" 
                  {...register('displayName')}
                  />
                  {
                    errors.displayName?.message && <small className="text-red-600 absolute bottom-0">{errors.displayName?.message}</small>
                  }
            </div>
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
                  className="border-small rounded-md p-2 border-gray-400" 
                  {...register('password')}  
                  />
                  {
                    errors.password?.message && <small className="text-red-600 absolute bottom-0">{errors.password?.message}</small>
                  }
            </div>
            {/* Password Confirm */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="confirmPassword" className="pb-1">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword"
                  placeholder="Enter your password here..." 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('confirmPassword')}
                  />
                  {
                    errors.confirmPassword?.message && <small className="text-red-600 absolute bottom-0">{errors.confirmPassword?.message}</small>
                  }
            </div>
            {/* BUTTONS */}
            <div>
                <Button type="submit" fullWidth color="primary">Sign Up</Button>
                {/* <Button onClick={createUser} fullWidth color="danger" variant="bordered"  className="mt-1 md:mt-0">
                  <Image src={'/google.png'} alt="google icon" width={25} height={25}/>
                  <p>Google</p>
                </Button> */}
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