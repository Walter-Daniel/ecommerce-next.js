'use client'

import Link from "next/link";
import Image from "next/image";
import { UserAuth } from "../context/AuthProvider";
import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/validations/userSchema";
import { FormAuth } from "@/components/FormAuth";
import { Inputs } from "../types";
import { ButtonForm } from "@/components/ButtonForm";
import { FcAdvance } from "react-icons/fc";
import logo from '../../../public/logo.png'

export default function LoginPage() {

  const { googleSignIn, user, signIn } = UserAuth();
  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>({
    resolver: zodResolver(signInSchema)
  });

  const handleGoogleSignIn = async() => {
     await googleSignIn();   
  }

  if(user){
    return redirect('/profile')
  }

  const handleSignIn = async(email: string, password: string) => {
     await signIn(email, password);
  }

  const onSubmit:SubmitHandler<Inputs> = async({email, password}) => {
    await handleSignIn(email, password);
    reset();
  }

  return (
    <div className="bg-top bg-no-repeat bg-cover h-screen" style={{ backgroundImage: 'url(/auth.jpg)' }}>
          <div className="lg:pr-44 w-[100%] h-[100%] flex justify-center lg:justify-end items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mx-5 md:mx-0 p-5 md:p-10 w-[100%] md:w-2/3 lg:w-1/3 rounded-xl shadow-xl fade-in">
                <div className="flex justify-end mb-5">
                  <Image 
                    src={logo} 
                    alt="Logo" 
                    sizes='50px' 
                    style={{width: '100%', height: '50px', objectFit:'contain'}} />
                </div>
                  <FormAuth register={register} errors={errors}/>
                  {/* BUTTONS */}
                  <ButtonForm handleGoogleSignIn={handleGoogleSignIn} title="Sign in" />
                  <div className="flex gap-2 pt-3">
                    <p className="text-sm">Don't have an account?</p>
                    <Link href={'/register'} className="underline text-red-500 text-sm">
                      Sign up
                    </Link>
                  </div>
                  <div className="flex gap-2 pt-3 justify-end items-center">
                    <FcAdvance />
                    <Link href={'/'} className="text-black text-sm">
                      Go home
                    </Link>
                  </div>
              </form>
          </div>
    </div>
  );
}