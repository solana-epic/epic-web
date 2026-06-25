import type { Metadata } from "next";
import { Geist, Geist_Mono, Quantico } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  weight: ["400", "700"],
  variable: "--font-quantico",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EPIC | Security-First Upgrade Intelligence for Solana",
  description: "Detect upgrade risks, security vulnerabilities, and account layout changes before deployment. The deployment readiness gateway for Solana protocol teams.",
  metadataBase: new URL("https://epic.sh"),
  openGraph: {
    title: "EPIC | Solana Program Upgrade Intelligence",
    description: "Detect upgrade risks, security vulnerabilities, and account layout changes before deployment. Secure your protocol deployments.",
    url: "https://epic.sh",
    siteName: "EPIC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPIC | Solana Program Upgrade Intelligence",
    description: "Detect upgrade risks, security vulnerabilities, and account layout changes before deployment.",
  }
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quantico.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
