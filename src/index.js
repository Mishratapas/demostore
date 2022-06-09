import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {UIProvider} from "./context/UI";
import {ThemeProvider} from "@mui/system";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UIProvider>
);
