'use client'

import { Button } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <div className="container mx-auto py-8 min-h-[100vh] justify-center content-center  bg-black text-white">
      <div className="w-[100%] flex flex-col justify-center items-center ">
        <form action="" method="post">
            {/* Name */}
            <div className="flex flex-col my-5" >
                <label htmlFor="name" className="pb-1">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            {/* Email */}
            <div className="flex flex-col my-5">
                <label htmlFor="email" className="pb-1">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            {/* Password */}
            <div className="flex flex-col my-5">
                <label htmlFor="password" className="pb-1">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            {/* Password Confirm */}
            <div className="flex flex-col my-5">
                <label htmlFor="confirmPassword" className="pb-1">Confirm Password</label>
                <input type="confirmPassword" name="confirmPassword" id="confirmPassword" />
            </div>
            <div className="pt-4">
                <Button type="submit">Login</Button>
            </div>
        </form>
      </div>
    </div>
  );
}