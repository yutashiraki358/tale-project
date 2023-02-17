import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
