import type { Metadata } from "next";

import "./globals.css";
import Providers from "./components/Providers";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "RoadMate",
  description: "Car rental made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
