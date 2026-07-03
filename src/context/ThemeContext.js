import { createContext, useContext } from "react";

export const ThemeNameContext = createContext(null);

export function useThemeSwitcher() {
  return useContext(ThemeNameContext);
}
