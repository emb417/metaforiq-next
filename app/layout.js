import TopBar from "@/components/nav/TopBar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.metaforiq.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <TopBar />
        {children}
      </body>
    </html>
  );
};
