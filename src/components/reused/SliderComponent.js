import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

export const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
}) => {
  return (
    <>
      <Typography variant='subtitle2'>Home Value</Typography>
      <Typography variant='h5'>$3000</Typography>
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
      <Typography>test</Typography>
    </>
  );
};

export default Slider;
