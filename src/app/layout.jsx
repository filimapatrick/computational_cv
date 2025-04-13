import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patrick Filima - Neuroscientist & Developer Portfolio",
  description: "Personal portfolio of Patrick Filima, showcasing expertise in neuroscience, research, and software development.",
  keywords: "neuroscience, research, software development, portfolio, Patrick Filima",
  authors: [{ name: "Patrick Filima" }],
  creator: "Patrick Filima",
  publisher: "Patrick Filima",
  metadataBase: new URL('https://patrickfilima.com'),
  openGraph: {
    title: "Patrick Filima - Neuroscientist & Developer Portfolio",
    description: "Personal portfolio of Patrick Filima, showcasing expertise in neuroscience, research, and software development.",
    url: "https://patrickfilima.com",
    siteName: "Patrick Filima Portfolio",
    images: [
      {
        url: "/patrick.jpeg",
        width: 800,
        height: 600,
        alt: "Patrick Filima",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Filima - Neuroscientist & Developer Portfolio",
    description: "Personal portfolio of Patrick Filima, showcasing expertise in neuroscience, research, and software development.",
    images: ["/patrick.jpeg"],
    creator: "@patrickfilima",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "cmaMRzGN5CKNYEpoAv3kOMVTj6Dz-dN80DZQ2JkSgf8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 