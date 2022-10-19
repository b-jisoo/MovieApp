import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";

export const App = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
};

export default App;
