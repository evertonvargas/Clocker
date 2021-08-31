import { createContext, useState, useContext, ReactNode } from "react";

import Dark from "../styles/themes/Dark";
import Light from "../styles/themes/Light";
import { ThemeProvider } from "styled-components";
import { parseCookies, setCookie } from "nookies";

interface ThemeProviderProps {
  children: ReactNode;
}

interface Theme {
  title: string;
  colors: {
    background: string;
    white: string;
    gray: string;
    bgmodal: string;
    pink: string;
    green: string;
    dark: string;
    border: string;
  };
}

interface ThemeColor {
  theme: Theme;
  changeTheme: () => void;
}

const DarkModeContext = createContext<ThemeColor>({} as ThemeColor);

export function DarkModeProvider({children,}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => {
    const cookies = parseCookies();
  
    return cookies.USER_THEME === "Light" ? Light : Dark;

    });

  const changeTheme = () => {
    if(theme.title === "light"){
      setCookie(null, 'USER_THEME', 'Dark', {
        maxAge: 86400 * 7,
        path: "/",
      })
      setTheme(Dark)
    }else{
      setCookie(null, 'USER_THEME', 'Light', {
        maxAge: 86400 * 7,
        path: "/",
      })
      setTheme(Light)  
    } 
  };

  return (
    <ThemeProvider theme={theme}>
      <DarkModeContext.Provider value={{ theme,changeTheme }}>
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export function useTheme(): ThemeColor {
  return useContext(DarkModeContext);
}
