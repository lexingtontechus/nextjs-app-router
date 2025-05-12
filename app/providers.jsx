"use client";
import config from "@unstoppabledomains/config";
import {
  BaseProvider,
  UnstoppableMessagingProvider,
} from "@unstoppabledomains/ui-components";

export function Providers({ children }) {
  return (
    <BaseProvider>
      <UnstoppableMessagingProvider>{children}</UnstoppableMessagingProvider>
    </BaseProvider>
  );
}
