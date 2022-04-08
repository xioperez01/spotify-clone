import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1DB954",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    background: {
      paper: "#121212",
      default: "#121212",
    }
  },
});

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </DataLayer>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

