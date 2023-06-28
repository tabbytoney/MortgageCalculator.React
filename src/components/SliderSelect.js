import React from 'react';
import { SliderComponent } from './reused/SliderComponent';

const SliderSelect = ({ data, setData }) => {
  const bankLimit = 600000;
  return (
    <>
      {/* Add regex for commas in dollar amounts */}
      <SliderComponent
        label='Home Value'
        min={150000}
        max={bankLimit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={25000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit='$'
        amount={data.homeValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      />
      <SliderComponent
        label='Down Payment'
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={10000}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        unit='$'
        amount={data.downPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      />
      <SliderComponent
        label='Loan Amount'
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        step={25000}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit='$'
        amount={data.loanAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      />
      <SliderComponent
        label='Interest Rate'
        min={2}
        max={10}
        defaultValue={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        unit='%'
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
