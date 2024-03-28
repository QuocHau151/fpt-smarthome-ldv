import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "@/providers";
const work_sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FPT SmartHome",
  description: "Giải pháp thông minh cho ngôi nhà của bạn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html>
        <head>
          <link
            rel="canonical"
            href="https://fpt-smarthome.com"
            key="canonical"
          />
          <GoogleAnalytics gaId="G-HNW9QB88RT" />
          <meta
            name="google-site-verification"
            content="eRaqSYmN7VU9r8a7ZnOVyWdduxBwIsI3kvn4QdDNHs4"
          />
        </head>
        <body className={work_sans.className}>
          <Toaster />
          <main>
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
