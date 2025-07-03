import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
