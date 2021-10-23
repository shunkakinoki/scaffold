import WalletConnectProvider from "@walletconnect/web3-provider";
import { RequireNetwork, WalletProvider } from "ethereal-react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Suspense } from "react";

import "tailwindcss/tailwind.css";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <WalletProvider
        cacheProvider
        network="localhost"
        providerOptions={{
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
            },
          },
        }}
        loading={null}
        fallback={<></>}
      >
        <Suspense fallback="Loading...">
          <RequireNetwork chainId={1} fallback={<></>}>
            <Component {...pageProps} />
          </RequireNetwork>
        </Suspense>
      </WalletProvider>
    </ThemeProvider>
  );
};

export default CustomApp;
