import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwiftSpree",
  description: "E-commerce webapp",
  icons: {
    icon: "/SwiftSpreeLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          quicksand.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
