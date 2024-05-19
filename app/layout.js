import React from 'react';
import NavigationLinks from '@/components/NavigationLinks';
import { GoogleTagManager } from '@next/third-parties/google'
import localFont from 'next/font/local'
import './globals.css'
 
const aurebeshFont = localFont({
  src: './AurebeshAF-Canon.otf',
  display: 'swap',
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body className='bg-black margin-0 padding-0 overflow-hidden display-block'>
        <NavigationLinks />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;