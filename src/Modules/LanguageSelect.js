import React from 'react';
import { Select, MenuItem } from '@mui/material';
import languageNames from './LanguageNames';

export function LanguageSelect() {
  const [theme, setLang] = React.useState('javascript');
  const handleLangChange = (event) => {
    // Set Theme of CodeMirror
    // const editor = document.querySelector('#editor');
    window.codeMirror.setOption('mode', event.target.value);
    setLang(event.target.value);
    window.language = event.target.value;
  };

  return (
    <Select value={theme} onChange={handleLangChange} sx={{ mb: 2 }} id="Language-select">
      {
        languageNames.map((theme) => (
          <MenuItem key={theme} value={theme}>
            {theme}
          </MenuItem>
        ))

      }
    </Select>
  )
}
