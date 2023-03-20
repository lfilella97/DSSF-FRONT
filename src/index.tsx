import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "../../node_modules/@fontsource/roboto/400.css";
import "../../node_modules/@fontsource/roboto/700.css";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import router from "./router/router";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
