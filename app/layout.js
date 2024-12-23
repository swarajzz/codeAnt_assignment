import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeAnt AI",
  description: "AI to Fix Code Quality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} text-sm font-normal antialiased`}>
        {children}
      </body>
    </html>
  );
}
