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
        providerOptions={{
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
            },
          },
        }}
        loading={
          <div className="dark:text-white">
            <h3>Wallet Provider Loading...</h3>
          </div>
        }
        fallback={
          <div className="dark:text-white">
            <h3>Wallet Fallback</h3>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="dark:text-white">
              <h3>Suspense Loading...</h3>
            </div>
          }
        >
          <RequireNetwork
            chainId={1}
            fallback={
              <div className="dark:text-white">
                <h3>Network Fallback</h3>
              </div>
            }
          >
            <Component {...pageProps} />
          </RequireNetwork>
        </Suspense>
      </WalletProvider>
    </ThemeProvider>
  );
};

export default CustomApp;
