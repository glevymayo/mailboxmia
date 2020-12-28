    import React from 'react';
import {Select, MenuItem, TextField} from '@material-ui/core';
import './credit-card-form.styles.scss';

export const CreditCardForm = (props) => {
    return (
        <div className="credit-card-form-container">
            <TextField variant="outlined" label="Card holder" />
            <TextField variant="outlined" label="Card number" />
            <div className="credit-card-form-row">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={""}
          onChange={()=>console.log('')}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            <TextField variant="outlined" />
            </div>
            <TextField variant="outlined" />
        </div>
    );
};
