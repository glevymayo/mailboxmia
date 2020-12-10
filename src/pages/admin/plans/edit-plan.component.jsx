import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase.utils';
import { useParams } from 'react-router-dom';
import { Button, TextField, Breadcrumbs, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

export const EditPlan = (props) => {
    const dispatch = useDispatch()
    const history = props.history;
    const [id, setId] = useState(useParams().id);
    const isLoading = useSelector(state => state.common.isLoading)
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [promoPrice, setPromoPrice] = useState(0);
    const [dueDatePromo, setDueDate] = useState("");

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

    const handleSave = () => {
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
                    onChange={e => setName(e.target.value)}
                    value={name}
                    fullWidth />
            </div>
            <div className="new-plan-row">
                <TextField name="price"
                    type="number"
                    min="0.00"
                    step="0.01"
                    label="Price"
                    variant="outlined"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    fullWidth />
            </div>
            <div className="new-plan-row">
                <TextField name="promoPrice"
                    type="number"
                    min="0.00"
                    step="0.01"
                    label="Promo price"
                    variant="outlined"
                    value={promoPrice}
                    onChange={e => setPromoPrice(e.target.value)}
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
                <Button type="button" onClick={handleSave} color="primary" variant="contained">Save</Button>
                <Button type="button" color="secondary" variant="contained" id="deleteButton" onClick={() => history.goBack()}>Cancel</Button>        </div>
        </div>
    )
}

