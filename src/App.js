import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes, defaultThemeName } from "./theme";
import { GlobalStyles } from "./global";
import { ThemeNameContext } from "./context/ThemeContext";

const STORAGE_KEY = "portfolio-theme";

function getInitialThemeName() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return themes.some((t) => t.name === stored) ? stored : defaultThemeName;
}

function App() {
  const [themeName, setThemeNameState] = useState(getInitialThemeName);

  function setThemeName(name) {
    setThemeNameState(name);
    window.localStorage.setItem(STORAGE_KEY, name);
  }

  const theme = themes.find((t) => t.name === themeName).value;

  return (
    <ThemeNameContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={theme} />
          </div>
        </>
      </ThemeProvider>
    </ThemeNameContext.Provider>
  );
}

export default App;
