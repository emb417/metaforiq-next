import TopBar from "@/components/nav/TopBar";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.metaforiq.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body className="bg-black">
        <TopBar />
        {children}
      </body>
    </html>
  );
};
