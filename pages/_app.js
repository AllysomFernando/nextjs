import Heads from "../src/components/Head";
import GlobalStyle from "../src/components/global/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Heads />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
