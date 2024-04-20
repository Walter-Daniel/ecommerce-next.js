'use client'

import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Select, SelectItem} from "@nextui-org/react";

const HeaderTop = () => {
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
          <div className='text-gray-500 text-[12px]'>
            <strong>FREE SHIPPING </strong>
             available on orders over $55 this week!
          </div>
          <div className='flex gap-4'>
            <select name="currency" id="currency" className='text-gray-500 text-xs w-24 border border-gray-300 rounded-md py-1 px-3 cursor-pointer'>
              <option value="USD $">USD $</option>
              <option value="EUR $">EUR €</option>
              <option value="PesoArg ARS">Peso ARS</option>
            </select>

            <select name="language" id="language" className='text-gray-500 text-xs w-24 border border-gray-300 rounded-md py-2 px-3 cursor-pointer'>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderTop