import React from 'react';
import NavigationLinks from '@/components/NavigationLinks';
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

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