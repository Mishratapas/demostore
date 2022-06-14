import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {UIProvider} from "./context/UI";

import {ThemeProvider} from "@mui/system";
import theme from "./styles/theme";
import {BrowserRouter} from "react-router-dom";
import {store} from "./services/store";
import {Provider} from "react-redux";
import {UserAuthContextProvider} from "./context/auth/UserAuthContext";
import "@fontsource/montez";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserAuthContextProvider>
        <UIProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </UIProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);
