import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { DarkModeProvider} from "../hook/useTheme";
import { GlogalStyle } from "../styles/global";
import Dark from "../styles/themes/Dark";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <DarkModeProvider>
          <Component {...pageProps} />
          <GlogalStyle />
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
