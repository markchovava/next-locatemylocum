import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/_components/footers/Footer";



export const metadata: Metadata = {
  title: "Locate My Locum",
  description: "Locate My Locum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
