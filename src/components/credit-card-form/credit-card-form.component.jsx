import React from 'react';
import { Select, MenuItem, TextField } from '@material-ui/core';
import './credit-card-form.styles.scss';

export const CreditCardForm = (props) => {
  let i = 1;

  
    const months = []
    for(i = 1; i <= 12; i++){
      months.push(<MenuItem value={i}>{i}</MenuItem>)
  }

  const years = [];
  const curDate = new Date();
    for(i = curDate.getFullYear(); i <= curDate.getFullYear() + 10; i++){
      years.push(<MenuItem value={i}>{i}</MenuItem>)
  }

  return (
    <div className="credit-card-form-container">
      
      <TextField variant="outlined" label="Card number" size={props.size}/>
        <Select
        variant="outlined"
        className="cc-field-padding"
          name="cc-month"
          value={""}
          onChange={() => console.log('')}
          label="Month"
          size={props.size}>
          {months}        
        </Select>
        /
        <Select
        variant="outlined"
         className="cc-field-padding"
          name="cc-year"
          value={""}
          onChange={() => console.log('')}
          label="Year"
          size={props.size}>
          {years}        
        </Select>
        <TextField variant="outlined" label="CCV" size={props.size}  className="cc-field-padding" />
      
    </div>
  );
};
