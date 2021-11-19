import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { isDarkAtom } from "./atoms";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
