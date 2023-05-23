import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details";
import GlobalStyles from './styles/global'
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
