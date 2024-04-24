// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import NavbarSection from "@/components/NavbarSection";
import Footer from "@/components/Footer";

const Providers: FC<PropsWithChildren> = ({children}) => {
  return (
    <NextUIProvider>
      <HeaderTop />
      <HeaderMain />
      <NavbarSection />
      {children}
      <Footer />
    </NextUIProvider>
  )
}

export default Providers;