import { AppProps } from "next/app";
import { DarkModeProvider} from "../hook/useTheme";
import { GlogalStyle } from "../styles/global";


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
