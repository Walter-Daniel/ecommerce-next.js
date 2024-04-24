import React, { FC } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

interface ButtonProps {
    handleGoogleSignIn: () => Promise<void>
}

export const ButtonForm: FC<ButtonProps> = ({handleGoogleSignIn}) => {
  return (
    <div className='pt-3'>
        <Button type="submit" fullWidth className='bg-black text-white'>Sign Up</Button>
        <div className="p-1 flex items-center justify-center">
            <div className="border-t border-black flex-grow mr-3"></div>
            <p className='text-center text-small'>Or</p>
            <div className="border-t border-black flex-grow ml-3"></div>
        </div>
        <Button onClick={handleGoogleSignIn} fullWidth color="danger" variant="bordered"  className="mt-1 md:mt-0">
            <Image src={'/google.png'} alt="google icon" width={25} height={25}/>
            <p>Sign up with Google</p>
        </Button>
    </div>
  )
}
