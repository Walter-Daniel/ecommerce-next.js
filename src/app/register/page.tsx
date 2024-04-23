'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { UserAuth } from "../context/AuthProvider";
import { userSchema } from "@/validations/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAuth } from '@/components/FormAuth';
import { Inputs } from '../types';
import { ButtonForm } from '@/components/ButtonForm';


export default function RegisterPage() {

  const { signUp, googleSignIn, user, loading } = UserAuth();
  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  });

  const createUser = async(email:string, password:string, displayName:string) => {
    await signUp(email, password, displayName);
  }

  const handleGoogleSignIn = async() => {
    await googleSignIn();     
  }

  if(user){
    redirect('/profile')
  }

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    const { email, password, displayName } = data;
    createUser(email, password, displayName)
    reset()
  }

  if(loading){
    return <p>...loading</p>
  }

  return (
    <div className="bg-top bg-no-repeat bg-cover h-screen" style={{ backgroundImage: 'url(/auth.jpg)' }}>
      <div className="lg:pr-44 w-[100%] h-[100%] flex justify-center lg:justify-end items-center p-40">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in">
          <div className="flex justify-end mb-5">
            <Image src='/logo.png' alt="Logo" width={200} height={200} style={{ width: 'auto', height:'auto' }}/>
          </div>
            {/* Name */}
            <div className="flex flex-col pb-5 relative" >
                <label htmlFor="displayName" className="pb-1">Name</label>
                <input 
                  type="text" 
                  id="displayName"
                  placeholder="Enter your name here..." 
                  className="border-small rounded-md p-2 border-gray-400" 
                  {...register('displayName')}
                  />
                  {
                    errors.displayName?.message && <small className="text-red-500 absolute bottom-0">{errors.displayName?.message}</small>
                  }
            </div>
            <FormAuth register={register} errors={errors}/>
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
                    errors.confirmPassword?.message && <small className="text-red-500 absolute bottom-0">{errors.confirmPassword?.message}</small>
                  }
            </div>
            {/* BUTTONS */}
            <ButtonForm handleGoogleSignIn={handleGoogleSignIn} />
            <div className="flex gap-2 pt-3">
              <p className='text-small'>Already have an account?</p>
              <Link href={'/login'} className="underline text-red-500 text-small">Login</Link>
            </div>
        </form>
      </div>
    </div>
  );
}