import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
