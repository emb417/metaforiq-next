import React from "react";
import NavBar from "@/components/NavBar";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body className="bg-black">
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
