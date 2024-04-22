// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import NavbarSection from "@/components/NavbarSection";

const Providers: FC<PropsWithChildren> = ({children}) => {
  return (
    <NextUIProvider>
      <HeaderTop />
      <HeaderMain />
      <NavbarSection />
      {children}
    </NextUIProvider>
  )
}

export default Providers;