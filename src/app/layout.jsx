import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patrick Filima - Research Software Engineer & Computational Neuroscientist",
  description: "Personal portfolio of Patrick Filima, Research Software Engineer and Computational Neuroscientist building scientific computing platforms across neuroinformatics, FAIR data, and healthcare.",
  keywords: "Patrick Filima, Research Software Engineer, Computational Neuroscience, Neuroinformatics, Brainlife.io, UT Austin, Oxford, React, Next.js, Python, BIDS, FAIR data, Scientific Computing",
  authors: [{ name: "Patrick Filima" }],
  creator: "Patrick Filima",
  publisher: "Patrick Filima",
  metadataBase: new URL('https://patrickfilima.com'),
  icons: {
    icon: '/patrick.jpeg',
    shortcut: '/patrick.jpeg',
    apple: '/patrick.jpeg',
  },
  openGraph: {
    title: "Patrick Filima - Research Software Engineer & Computational Neuroscientist",
    description: "Personal portfolio of Patrick Filima, showcasing scientific software platforms, brain morphometry research, Brainlife.io observability tools, and African Brain Data Network infrastructure.",
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
    title: "Patrick Filima - Research Software Engineer & Computational Neuroscientist",
    description: "Personal portfolio of Patrick Filima, showcasing scientific software platforms, brain morphometry research, and neuroinformatics infrastructure.",
    images: ["/patrick.jpeg"],
    creator: "@patrickfilima",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}