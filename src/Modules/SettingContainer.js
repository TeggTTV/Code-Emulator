import React from 'react';
import { Box } from "@mui/material";
import { MenuSetting } from "./MenuSetting";


export function SettingContainer() {

  // <MenuSetting type={"Font Size"} id={"FontSize"} value={19} onChange={(event, newValue) => {
  //   let r = document.querySelector(":root");
  //   window.FontSize = newValue;
  //   window.codeMirror.setOption("fontSize", newValue);
  //   r.style.setProperty("--fontSize", newValue + "px");
  //   window.options["FontSize"] = newValue;
  //   localStorage.setItem("options", JSON.stringify(window.options));
  // }} min={0} max={30} step={1} marks={[{ value: 0, label: "0" }, { value: 30, label: "30" }]} />

  let settings = {
    "Font Size": {
      id: "fontSize", value: 19, onChange: (event, newValue) => {
        window.FontSize = newValue;
        window.codeMirror.setOption("fontSize", newValue);
        let r = document.querySelector(":root");
        r.style.setProperty("--fontSize", newValue + "px");
        window.options["Font Size"] = newValue;
        localStorage.setItem("options", JSON.stringify(window.options));
      }, min: 0, max: 30, step: 1, marks: [{ value: 0, label: "0" }, { value: 30, label: "30" }]
    },
    "Tab Size": { id: "tabSize", value: 2, onChange: (event, newValue) => { window.options["Tab Size"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("indentUnit", newValue) }, min: 0, max: 10, step: 1, marks: [{ value: 0, label: "0" }, { value: 10, label: "10" }] },
    "Line Numbers": { id: "lineNumbers", value: 1, onChange: (event, newValue) => { window.options["Line Numbers"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("lineNumbers", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Line Wrapping": { id: "lineWrapping", value: 0, onChange: (event, newValue) => { window.options["Line Wrapping"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("lineWrapping", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Close Brackets": { id: "autoCloseBrackets", value: 1, onChange: (event, newValue) => { window.options["Auto Close Brackets"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoCloseBrackets", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Close Tags": { id: "autoCloseTags", value: 0, onChange: (event, newValue) => { window.options["Auto Close Tags"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoCloseTags", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Format": { id: "autoFormat", value: 0, onChange: (event, newValue) => { window.options["Auto Format"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoFormatOnStart", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Format On Change": { id: "autoFormatOnChange", value: 0, onChange: (event, newValue) => { window.options["Auto Format On Change"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoFormatOnUncomment", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Format On Paste": { id: "autoFormatOnPaste", value: 0, onChange: (event, newValue) => { window.options["Auto Format On Paste"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoFormatOnPaste", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Format On Mode Change": { id: "autoFormatOnModeChange", value: 0, onChange: (event, newValue) => { window.options["Auto Format On Mode Change"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoFormatOnModeChange", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Rename Tags": { id: "autoRenameTags", value: 0, onChange: (event, newValue) => { window.options["Auto Rename Tags"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoRenameTags", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Auto Close Comments": { id: "autoCloseComments", value: 0, onChange: (event, newValue) => { window.options["Auto Close Comments"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("autoCloseComments", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
    "Highlight Selection Matches": { id: "highlightSelectionMatches", value: 0, onChange: (event, newValue) => { window.options["Highlight Selection Matches"] = newValue; localStorage.setItem("options", JSON.stringify(window.options)); window.codeMirror.setOption("highlightSelectionMatches", newValue) }, min: 0, max: 1, step: 1, marks: [{ value: 0, label: "Off" }, { value: 1, label: "On" }] },
  };
  if (localStorage.getItem('options') !== undefined && localStorage.getItem('options') !== null && localStorage.getItem('options') !== "{}" && localStorage.getItem('options') !== "") {
    window.options = JSON.parse(localStorage.getItem('options'));
    // load settings from local storage
    Object.keys(window.options).forEach((key) => {
      // if(key === 'Font Size') {
      //   let r = document.querySelector(":root");
      //   r.style.setProperty("--fontSize", window.options[key] + "px");
      // }
      settings[key].value = window.options[key];
      // window.codeMirror.setOption(key, window.options[key]);
    });
  }
  let stuff = (
    <Box id="setting" style={{ display: "none" }} sx={{ mt: 2, mb: 2, p: 2, overflowY: "scroll", overflowX: "hidden", maxHeight: "50vh" }}>
      {Object.keys(settings).map((key) => {
        return <MenuSetting type={key} name={key} id={settings[key].id} value={settings[key].value} onChange={settings[key].onChange} min={settings[key].min} max={settings[key].max} step={settings[key].step} marks={settings[key].marks} key={key} />
      })}
    </Box>
  );

  return stuff;
}