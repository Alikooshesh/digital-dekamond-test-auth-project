"use client";
import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function Providers({ children }: PropsWithChildren) {
  const [client] = useState(() => new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60_000, retry: 1, refetchOnWindowFocus: false },
      mutations: { retry: 0 },
    },
  }));
  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary state={null}>{children}</HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
