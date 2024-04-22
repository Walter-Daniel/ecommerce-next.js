'use client'

import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const NavbarSection = () => {

  const navList = ['HOME', 'CATEGORIES', 'MEN', 'WOMEN', 'HOT OFFERS' ]

  return (
    <Navbar shouldHideOnScroll >
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navList.map((navItem, index )=> (
          <NavbarItem key={index}>
            <Link color="foreground" href="#" className='navbar__link relative'>
              {navItem}
            </Link>
          </NavbarItem>
        ) )}
      </NavbarContent>
      {/* <NavbarContent justify="end">
      <Link color="foreground" href="#" className='header_top__icon_wrapper'>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}

export default NavbarSection;