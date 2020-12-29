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

  const handleCCDate = (e) => {
    const key = e.key;
    const val = e.target.value;
    const newValue = val.toString().concat(key.toString())
    if(isNaN(key)){
        e.preventDefault();
    }

    switch (val.length) {
          
          case 0:
              if(key > 1){
                  e.preventDefault();
              }
              break;

          case 1:
              if(newValue > 12){
                e.preventDefault();
              }
              else{
                  e.target.value = newValue.concat('/');
                  e.preventDefault()
              }
              break;

          case 2:
              console.log('0');
              break;
          default:
              console.log('value');
              break;
      }
  }
  return (
    <div className="credit-card-form-container">
      
      <TextField variant="outlined" label="Card number" size={props.size} onKeyPress={(e)=>handleCCDate(e)} />
        <Select
        variant="outlined"
        className="cc-field-padding"
          name="cc-month"
          value={""}
          onChange={() => console.log('')}
          label="Month"
          size={props.size}
          >
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
