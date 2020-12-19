import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase.utils';
import { useParams } from 'react-router-dom';
import { Button, TextField, FormHelperText, Breadcrumbs, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

export const EditPlan = (props) => {
    const dispatch = useDispatch()
    const history = props.history;
    const [id, setId] = useState(useParams().id);
    const isLoading = useSelector(state => state.common.isLoading)
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [promoPrice, setPromoPrice] = useState(0);
    const [dueDatePromo, setDueDate] = useState("");
    const { register, handleSubmit, errors, getValues } = useForm();

    //Get plan data from firestore
    useEffect(() => {
        dispatch({ type: "SET_LOADING", payload: true })
        db.collection("plans").doc(id).get()
            .then(document => {
                setName(document.data().name);
                setPrice(document.data().price);
                setPromoPrice(document.data().promoPrice);
                setDueDate(document.data().dueDatePromo);
                dispatch({ type: "SET_LOADING", payload: false })
            })
            .catch(error => {
                console.log('error use effect');
                dispatch({ type: "SET_LOADING", payload: false })
            })
    }, [id, setId])

    const onSubmit = data => {
        db.collection("plans").doc(id).update({
            name,
            price,
            promoPrice,
            dueDatePromo
        })
            .then(() => {

                console.log('document updated');
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    if(isLoading || name === ""){
        return(
            <div className="full-center-container">
                <CircularProgress />
            </div>
        )
    }

    return (        
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="new-plan-container">
            <div className="new-plan-row">
                <Breadcrumbs>
                    <p>admin / plans / edit</p>
                </Breadcrumbs>
            </div>
            <div className="new-plan-row">
                <TextField name="name"
                    type="text"
                    label="Name"
                    variant="outlined"
                    inputRef={register({required: true})}
                    onChange={e => setName(e.target.value)}
                    value={name}
                    fullWidth />
                    <FormHelperText error>{errors.name && "Name is required"}</FormHelperText>
            </div>
            <div className="new-plan-row">
                <TextField name="price"
                    type="number"
                    min="0.01"
                    label="Price"
                    variant="outlined"
                    value={price}
                    inputRef={register({required: true})}
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
                    value={promoPrice}
                    onChange={e => setPromoPrice(e.target.value)}
                    inputProps={{step: 0.01}}
                    fullWidth />
            </div>
            <div className="new-plan-row">
                <TextField name="promoDueDate"
                    type="date"
                    label="Promo due date"
                    variant="outlined"
                    value={dueDatePromo}
                    onChange={e => setDueDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth />
            </div>
            <div className="new-plan-row align-right">
                <Button type="submit" color="primary" variant="contained">Save</Button>
                <Button type="button" color="secondary" variant="contained" id="deleteButton" onClick={() => history.goBack()}>Cancel</Button>        </div>
        </div>
        </form>
    )
}

