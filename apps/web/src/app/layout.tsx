import localFont from "next/font/local";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { QueryClientProvider, WagmiProvider } from "providers";
import wagmiConfig from "../../wagmi.config";

import type { Metadata } from "next";
import type { ReactNode } from "react";

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
  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get("cookie"),
  );

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WagmiProvider initialState={initialState}>
          <QueryClientProvider>{children}</QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
