import localFont from "next/font/local";

import { Layout } from "components/layout";
import {
  QueryClientProvider,
  RainbowKitProvider,
  WagmiProvider,
} from "providers";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WagmiProvider>
          <QueryClientProvider>
            <RainbowKitProvider>
              <Layout>{children}</Layout>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
