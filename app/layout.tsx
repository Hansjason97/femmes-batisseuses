import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { settings } from "@/data/data";
import { ReactQueryClientProvider } from "@/providers/queryProvider";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});
const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${settings.title}`,
    default: settings.defaultTitle,
  },
  description: "",
  authors: [{ name: "Hanspen", url: "https://hanspen.vercel.app" }],
  publisher: "Hanspen",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: {
      template: `%s - ${settings.title}`,
      default: settings.defaultTitle,
    },
    description: "",
    siteName: settings.title,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 600,
        alt: settings.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${redHatDisplay.variable} ${redHatMono.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
