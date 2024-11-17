import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import ThemeProvider from "@/providers/theme-provider";
import PageTransitionWrapper from "@/components/wrappers/page-transition-wrapper";
import LoaderWrapper from "@/components/wrappers/loader-wrapper";
import LenisWrapper from "@/components/wrappers/lenis-wrapper";
import { Toaster } from "@/components/ui/sonner";
import ScrollWrapper from "@/components/wrappers/scroll-wrapper";
import EmojiWrapper from "@/components/wrappers/emoji-wrapper";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--figtree",
});

export const metadata: Metadata = {
  title: "Rithvik Pallamreddy",
  description: "A portfolio website for Rithvik Pallamreddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.className} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <Toaster className="font-sans bg-background-blur" />
          <EmojiWrapper>
            <LoaderWrapper>
              <PageTransitionWrapper>
                <LenisWrapper>
                  <ScrollWrapper>{children}</ScrollWrapper>
                </LenisWrapper>
              </PageTransitionWrapper>
            </LoaderWrapper>
          </EmojiWrapper>
          <Nav />
        </ThemeProvider>
      </body>
    </html>
  );
}
