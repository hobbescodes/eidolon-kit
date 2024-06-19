"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: Props) => (
  <ReactQueryClientProvider client={queryClient}>
    {children}
    {/* NB: by default, RQ dev tools are only included in `NODE_ENV=development` environments */}
    <ReactQueryDevtools />
  </ReactQueryClientProvider>
);

export default QueryClientProvider;
