import React from "react";
import ReactDOM from "react-dom/client";
import {UIProvider} from "./context/UI";

import {ThemeProvider} from "@mui/system";
import theme from "./styles/theme";
import {BrowserRouter} from "react-router-dom";
import {store} from "./2ndProject/services/store";
import {Provider} from "react-redux";
import {UserAuthContextProvider} from "./2ndProject/context/auth/UserAuthContext";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./App";
import "./2ndProject/styles/index.scss";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserAuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);
