import { Footer, Header } from "components/layout";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="grid grid-rows-layout w-full h-dvh gap-0">
    <Header />
    <main className="w-full relative">{children}</main>
    <Footer />
  </div>
);

export default Layout;
