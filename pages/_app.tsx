import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { getClient } from "../queryClient";
import { Provider } from "react-redux";
import store from "../redux/store";

export const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
