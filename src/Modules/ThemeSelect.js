import React from 'react';
import { Select, MenuItem } from '@mui/material';
import names from './ThemeNames';

export function ThemeSelect() {
  const [theme, setTheme] = React.useState('monokai.css');
  const handleThemeChange = (event) => {
    // Set Theme of CodeMirror
    // const editor = document.querySelector('#editor');
    window.codeMirror.setOption('theme', event.target.value.split(".css")[0]);
    setTheme(event.target.value);
  };

  return (
    <Select value={theme} onChange={handleThemeChange} sx={{ mb: 2 }} id="theme-select">
      {
        names.map((theme) => (
          <MenuItem key={theme} value={theme}>
            {theme}
          </MenuItem>
        ))

      }
    </Select>
  )
}
