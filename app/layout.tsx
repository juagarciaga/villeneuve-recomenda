import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villeneuve Recomenda",
  description: "Services recommended by residents on Residential Villeneuve neighborhoods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
