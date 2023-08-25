import GlobalStyle from "../src/components/global/GlobalStyles";
import Footer from "../src/components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
