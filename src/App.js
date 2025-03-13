/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Console } from "./Modules/Console";
import { ThemeSelect } from "./Modules/ThemeSelect";
import { LanguageSelect } from "./Modules/LanguageSelect";

import { MenuSetting } from "./Modules/MenuSetting";
import MenuButton from "./Modules/Button";
import { SettingContainer } from "./Modules/SettingContainer";

function App() {
  const [Language, setLanguage] = React.useState("javascript");
  const [theme, setTheme] = React.useState("dark");
  const [value, setValue] = React.useState("");
  const [code, setCode] = React.useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    window.codeMirror.setOption("mode", {
      name: event.target.value,
      globalVars: true,
    });
  };
  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    let r = document.querySelector(":root");
    // if theme is light make --themeColor black
    if (theme === "light") {
      r.style.setProperty("--themeColor", "white");
    } else if(theme === "dark"){
      r.style.setProperty("--themeColor", "black");
    }
  };

  const currentTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={{ height: "100vh", flexGrow: 1 }}>
        <Grid container sx={{ height: "100%" }} spacing={2}>
          <Grid item xs={3}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "0px",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Language
              </Typography>
              {LanguageSelect()}
              <Typography variant="h6" gutterBottom>
                Themes
              </Typography>
              {ThemeSelect()}

              {/* {new MenuSetting(
                "Font Size",
                "FontSize",
                19,
                (event, newValue) => {
                  let r = document.querySelector(":root");
                  window.FontSize = newValue;
                  window.codeMirror.setOption("fontSize", newValue);
                  r.style.setProperty("--fontSize", newValue + "px");
                },
                0,
                30,
                1,
                [
                  { value: 0, label: "0" },
                  { value: 30, label: "30" },
                ]
              )} */}

              {/* Settings for CodeMirror */}
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              {/* Menu That opens when you click */}

              {/* Settings Button */}
              <Button
                variant="outlined"
                onClick={() => {
                  let setting = document.getElementById("setting");
                  if (setting.style.display === "none") {
                    setting.style.display = "block";
                  } else {
                    setting.style.display = "none";
                  }
                }}
              >
                Settings
              </Button>
              {SettingContainer()}
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                position: "relative",
                paddingBottom: "0px",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                {" "}
                Code{" "}
              </Typography>
              <Box
                variant="outlined"
                sx={{
                  position: "relative",
                  height: "calc(100% - 70px)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div id="editor" style={{ width: "100%", height: "100%" }}>
                  <div id="code-mirror"></div>
                </div>
                <Box
                  sx={{
                    height: "100%",
                    position: "relative",
                    paddingBottom: "0px",
                    mt: 2,
                  }}
                > 
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {" "}
                    Console{" "}
                  </Typography>
                  <Box
                    variant="outlined"
                    sx={{
                      width: "50%",
                      height: "auto",
                      float: "right",
                      display: "flex",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      justifyContent: "end",
                    }}
                  >
                    {MenuButton("Format")}
                    {MenuButton("Save")}
                    {MenuButton("Open")}
                    {MenuButton("Run")}
                  </Box>
                  <Box
                    variant="outlined"
                    sx={{
                      position: "relative",
                      height: "calc(100% - 70px)",
                      overflow: "hidden",
                      display: "flex",
                      padding: "0px",
                    }}
                  >
                    {" "}
                    {Console()}{" "}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                }}
              ></Box>
              <Box sx={{ position: "absolute", top: "16px", right: "16px" }}>
                <Button variant="outlined" onClick={handleThemeChange}>
                  {theme === "light" ? "Dark" : "Light"} Theme
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
