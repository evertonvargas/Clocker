import { createContext, useState, useContext, ReactNode } from "react";

import Dark from "../styles/themes/Dark";
import Light from "../styles/themes/Light";
import { ThemeProvider } from "styled-components";

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

export function DarkModeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(Dark);

  const changeTheme = () => {
    setTheme(theme.title === "light" ? Dark : Light);
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
