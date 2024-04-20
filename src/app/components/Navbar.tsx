'use client'
import React from 'react'
import Link from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from '@nextui-org/react';
import { UserAuth } from '../context/AuthProvider';


export const NavbarComponent = () => {
    const { user } = UserAuth();
    console.log(user)
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit uppercase">Ecommerce</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/profile" aria-current="page">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
