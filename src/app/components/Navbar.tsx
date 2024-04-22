'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from '@nextui-org/react';
import { UserAuth } from '../context/AuthProvider';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase';


export const NavbarComponent = () => {

    const { user, logout, loading } = UserAuth();
    // const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    
    // useEffect(() => {
    //     const checkAuth = async() => {
    //         await new Promise((resolve) => setTimeout(resolve, 800))
    //         setIsLoading(false)
    //     }
    //     checkAuth();
    // }, [user])

    const handleLogout = async() => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }

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
        {
            loading ? null : !user ? (
                <NavbarItem>
                    <Button as={Link} color="primary" href="/login" variant="flat">
                        Sign In
                    </Button>
                </NavbarItem>
            ) : (
                <NavbarItem className='flex items-center gap-2'>
                    <p>Hi, {user.displayName}!</p>
                    <Button onClick={handleLogout} color="primary" variant="flat">
                        Logout
                    </Button>
                </NavbarItem>
            )
        }
      </NavbarContent>
    </Navbar>
  )
}
