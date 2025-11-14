import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "LA Soluções Comerciais",
  description: "Bem vindo ao desenvolvimento Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
