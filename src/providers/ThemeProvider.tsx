import {
  useState,
  useEffect,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Colors = {
  primary: string;
  background: string;
  container: string;
  text: string;
  textMuted: string;
};

const lightColors: Colors = {
  primary: "#525298",
  background: "#F3F3F7",
  container: "#FFFFFF",
  text: "#1F2937",
  textMuted: "#6B7280",
};

const darkColors: Colors = {
  primary: "#525298",
  background: "#1F1D2D",
  container: "#252836",
  text: "#F3F4F6",
  textMuted: "#9CA3AF",
};

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: Colors;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const getTheme = async () => {
      const value = await AsyncStorage.getItem("theme");
      if (value) setTheme(value as ThemeType);
    };

    getTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
  };

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
