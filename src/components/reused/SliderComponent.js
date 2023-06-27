import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

export const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        marks
        step={step}
        aria-label='Default'
        valueLabelDisplay='auto'
        onChange={onChange}
        value={value}
      />
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption' color='text.secondary'>
          {unit} {min}
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Slider;
