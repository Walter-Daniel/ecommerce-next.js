'use client'

import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const NavbarSection = () => {

  const navList = ['HOME', 'CATEGORIES', 'MEN', 'WOMEN', 'HOT OFFERS' ]

  return (
    <Navbar shouldHideOnScroll className='justify-center' >
    
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navList.map((navItem, index )=> (
          <NavbarItem key={index}>
            <Link color="foreground" href="#" className='navbar__link relative'>
              {navItem}
            </Link>
          </NavbarItem>
        ) )}
      </NavbarContent>
      
    </Navbar>

    
  )
}

export default NavbarSection;