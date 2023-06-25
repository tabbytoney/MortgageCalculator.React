import React from 'react';
import Slider from '@mui/material/Slider';

export const SliderComponent = () => {
  return (
    <Slider defaultValue={50} aria-label='Default' valueLabelDisplay='auto' />
  );
};

export default Slider;
