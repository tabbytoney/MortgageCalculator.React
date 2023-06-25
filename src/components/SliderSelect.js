import React from 'react';
import { SliderComponent } from './reused/SliderComponent';

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
      />
      {/* <SliderComponent min={100} max={200} defaultValue={150} />
      <SliderComponent min={0} max={10} defaultValue={3} /> */}
    </>
  );
};

export default SliderSelect;
