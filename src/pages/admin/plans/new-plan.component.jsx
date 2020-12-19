import { Breadcrumbs, Button, FormHelperText, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { CreatePlan } from '../../../redux/actions/plansActions';
import { useForm } from "react-hook-form";


export const NewPlan = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [promoPrice, setPromoPrice] = useState(0);
    const [dueDatePromo, setDueDate] = useState("");
    const { register, handleSubmit, errors } = useForm();

    /*const isDateInFuture = date => {
        if (!date) { return false; }
        const inputDate = new Date(date);
        inputDate.setHours(0,0,0,0);
        const today = new Date();
        today.setHours(0,0,0,0);
        return !(date > today);
      }*/

    const onSubmit = data => {
        CreatePlan({
            name,
            price,
            promoPrice,
            dueDatePromo
        }, props.history);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="new-plan-container">
                <div className="new-plan-row">
                    <Breadcrumbs>
                        <p>admin / plans / new</p>
                    </Breadcrumbs>
                </div>
                <div className="new-plan-row">
                    <TextField name="name"
                        type="text"
                        label="Name"
                        variant="outlined"
                        inputRef={register({required: true})}
                        onChange={e => setName(e.target.value)}
                        fullWidth
                         />
                         <FormHelperText error>{errors.name && "Name is required"}</FormHelperText>
                </div>
                <div className="new-plan-row">
                    <TextField name="price"
                        type="number"
                        min="0.01"
                        label="Price"
                        variant="outlined"
                        onChange={e => setPrice(e.target.value)}
                        inputProps={{step: 0.01}}
                        fullWidth />                                                 
                        <FormHelperText error>{errors.price && "Price is required"}</FormHelperText>
                </div>
                <div className="new-plan-row">
                    <TextField name="promoPrice"
                        type="number"
                        min="0.01"
                        label="Promo price"
                        variant="outlined"
                        onChange={e => setPromoPrice(e.target.value)}
                        inputProps={{step: 0.01}}
                        fullWidth />
                </div>
                <div className="new-plan-row">
                    <TextField name="promoDueDate"
                        type="date"
                        label="Promo due date"
                        variant="outlined"
                        onChange={e => setDueDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth />
                </div>
                <div className="new-plan-row-buttons align-right">
                    <Button type="submit" color="primary" variant="contained">Save</Button>
                    <Button type="button" onClick={() => props.history.goBack()} color="secondary" variant="contained" id="deleteButton" >Cancel</Button>
                </div>
            </div>
        </form>
    )
}

