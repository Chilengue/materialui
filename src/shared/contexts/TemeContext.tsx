import { ThemeProvider } from "@emotion/react";
import {
  Children,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DarktTeme, LightTeme } from "../themes";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext({} as IThemeContextData);

interface Interface {}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, sethemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    // armazena funcao  e execua funcoes
    sethemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    ); // serve para fazer troca de valores dentor de react
  }, []);

  const theme = useMemo(() => {
    if (themeName == "light") return LightTeme;

    return DarktTeme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}{" "}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
