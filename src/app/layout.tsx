import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { defaultSeo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://서보영.kr"),
  title: {
    default: defaultSeo.title,
    template: "%s",
  },
  description: defaultSeo.description,
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [siteConfig.images.profileSmile],
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0052B8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
