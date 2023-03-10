import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ContentContainer from "@/features/ContentContainer/components";
import Footer from "@/features/Footer/components";

const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body": {
        color: "white",
        margin: 0,
        height: "100%",
        webkitfontsmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        fontFamily: "sans-serif",
        background: "linear-gradient(160deg, #488582 60%, #292929 60.1%);",
      },
    }),
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
