import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export function CHECK() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="" />
    </FormGroup>
  );
}


