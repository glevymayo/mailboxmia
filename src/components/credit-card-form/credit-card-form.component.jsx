import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import './credit-card-form.styles.scss';

export const CreditCardForm = (props) => {

    console.log(props);
    const register = props.register;
    const errors = props.errors;
    const months = []
    const years = [];
    const curDate = new Date();

    let i = 1;
    for (i = 1; i <= 12; i++) {
        months.push(<MenuItem value={i}>{i}</MenuItem>)
    }

    for (i = curDate.getFullYear(); i <= curDate.getFullYear() + 10; i++) {
        years.push(<MenuItem value={i}>{i}</MenuItem>)
    }

    const handleCCDate = (e) => {
        const key = e.key;
        const val = e.target.value;
        const newValue = val.toString().concat(key.toString())
        if (isNaN(key)) {
            e.preventDefault();
        }

        switch (val.length) {
            case 0:
                if (key > 1) {
                    e.preventDefault();
                }
                break;

            case 1:
                if (newValue > 12) {
                    e.preventDefault();
                }
                else {
                    e.target.value = newValue.concat('/');
                    e.preventDefault()
                }
                break;

            case 2:
                if (key !== '/') {
                    console.log('entra');
                    e.preventDefault();
                    break;
                }
                e.target.value = newValue
                break;

            case 7:
                e.preventDefault();
                break;

            default:
                console.log('value');
                break;
        }
    }


    return (
        <div className="credit-card-form-container">
            <div className="credit-card-form-row">
                <TextField variant="outlined" 
                name="cardHolder"
                label="Card holder" 
                size={props.size} 
                error={errors.cardHolder !== undefined}
                helperText={errors.cardHolder ? errors.cardHolder.message : ""}
                inputRef={register({
                    required: { value: true, message: "Field is required" }
                })}
                fullWidth 
                />
            </div>
            <div className="credit-card-form-row">
                <div  style={{flex: 2}}>
                    <TextField variant="outlined" 
                    name="cardNumber"
                    label="Card Number" 
                    size={props.size} 
                    error={errors.cardNumber !== undefined}
                    helperText={errors.cardNumber ? errors.cardNumber.message : ""}
                    inputRef={register({
                        required: { value: true, message: "Field is required" }
                    })}
                    fullWidth />
                </div>
                <div className="cc-field-padding" style={{flex: 1}}>
                    <TextField variant="outlined" 
                    name="dueDate"
                    label="Due Date" 
                    size={props.size} 
                    onKeyPress={(e) => handleCCDate(e)} 
                    error={errors.dueDate !== undefined}
                    helperText={errors.dueDate ? errors.dueDate.message : ""}
                    inputRef={register({
                        required: { value: true, message: "Field is required" }
                    })}
                    />
                </div>
                <div className="cc-field-padding" style={{flex: 1}}>
                    <TextField variant="outlined" 
                    name="ccv"
                    label="CCV" 
                    size={props.size} 
                    error={errors.ccv !== undefined}
                    helperText={errors.ccv ? errors.ccv.message : ""}
                    inputRef={register({
                        required: { value: true, message: "Field is required" }
                    })}/>
                </div>
            
            
            
            </div>
        </div>

    );
};
