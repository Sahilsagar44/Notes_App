import { useColorScheme } from "react-native";
import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorScheme, setColorScheme } = useNativeWindColorScheme();
  const systemScheme = useColorScheme(); 
  const [useSystem, setUseSystem] = useState(true);

  // Always sync with system theme if following system
  useEffect(() => {
    if (useSystem && systemScheme) {
      setColorScheme(systemScheme);
      console.log("✅ Synced with system scheme:", systemScheme);
    }
  }, [systemScheme, useSystem, setColorScheme]);

  const toggleTheme = () => {
    setUseSystem(false); // go manual mode
    const newScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newScheme);
    console.log("🎛 Manual toggle:", newScheme);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
  