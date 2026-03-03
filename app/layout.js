import NavBar from "@/components/App/NavBar/NavBar";
import Footer from "@/components/App/Footer/Footer";
import "@/app/styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://www.metaforiq.com"),
  icons: {
    icon: [
      { url: "/logo-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],

    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
