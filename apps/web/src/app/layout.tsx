import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme/provider";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LiquidOrbs from "@/components/layout/liquid_orbs";
import GlassMorphism from "@/components/layout/glass_morphism";
import GridPattern from "@/components/layout/grid-pattern";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Super Cool GPT",
  description: "Chat gpt clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} antialiased relative bg-gradient-to-br from-background via-primary/5 to-primary/10 h-screen w-screen overflow-hidden`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LiquidOrbs />
            <GlassMorphism />
            <GridPattern />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
