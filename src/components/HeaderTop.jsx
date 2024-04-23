'use client'

import React, {useState, UseEffect, useEffect } from 'react';
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Button, Select, SelectItem} from "@nextui-org/react";
import Link from 'next/link';
import { UserAuth } from '@/app/context/AuthProvider';

const HeaderTop = () => {
    const [isSpecialOffer, setIsSpecialOffer] = useState(false);

    const { user, loading, logout } = UserAuth();

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsSpecialOffer(prevState => !prevState); // Cambia el estado anterior
        }, 3000);

        // Limpia el timeout cuando el componente se desmonta para evitar fugas de memoria
        return () => clearTimeout(timeout);
    }, [isSpecialOffer]);

    const handleLogout = () => {
      logout();
    }

  return (
    <div className='border-b boder-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between item-center'>
          <div className='hidden lg:flex gap-1'>
            <div className='header_top__icon_wrapper'>
            <BsFacebook />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsTwitter />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsInstagram />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsLinkedin />
            </div>
          </div>
          <div className='text-gray-500 text-[16px]'>
            {/* <strong>FREE SHIPPING </strong>
             available on orders over $55 this week! */}
             <strong>
        {isSpecialOffer
          ? "Special Offer: Get 10% off on all orders today!"
          : "FREE SHIPPING available on orders over $55 this week!"
        }
      </strong>
          </div>
          <div className='flex gap-4'>
            {/* <select name="currency" id="currency" className='text-gray-500 text-xs w-24 border border-gray-300 rounded-md py-1 px-3 cursor-pointer'>
              <option value="USD $">USD $</option>
              <option value="EUR $">EUR €</option>
              <option value="PesoArg ARS">Peso ARS</option>
            </select>

            <select name="language" id="language" className='text-gray-500 text-xs w-24 border border-gray-300 rounded-md py-2 px-3 cursor-pointer'>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select> */}
            {
              loading ? null : (!user) ? (
                <>
                  <Link href="/login">
                    Log In
                  </Link>
                  <Link href="/register" >
                    Sign Up
                  </Link>
                </>
              ): (
                <Button onClick={handleLogout} >
                    Logout
                </Button>
              )
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderTop