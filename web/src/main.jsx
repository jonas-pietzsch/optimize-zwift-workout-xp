import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { App } from "./App";
import { theme } from "./theme";
import { SettingsProvider } from "./SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Optimize Zwift workouts for maximum XP
          </Typography>
        </Toolbar>
      </AppBar>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
