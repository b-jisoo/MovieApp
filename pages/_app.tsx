import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { getClient } from "../queryClient";

export const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
