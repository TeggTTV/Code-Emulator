import React from 'react';
import { Button } from '@mui/material';

export default function MenuButton(name, onClick) {
  return (
    <Button variant="contained" color="primary" sx={{ mr: 2 }} id={name} onClick={onClick}>
      {name}
    </Button>
  );
}