import {
    Breadcrumbs, Button, FormHelperText, IconButton, ListSubheader, ListItemIcon,
    List, ListItem, ListItemText, InputAdornment, TextField, CircularProgress, Snackbar,
    FormControlLabel, Checkbox
} from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase/firebase.utils';
import { useParams } from 'react-router-dom';
import { CreatePlan } from '../../../redux/actions/plansActions';
import { useForm } from "react-hook-form";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';

export const NewPlan = (props) => {
    const isLoading = useSelector(state => state.common.isLoading)
    const [id, setId] = useState(useParams().id);
    const [open, setOpen] = useState(false)
    const [openError, setOpenError] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [promoPrice, setPromoPrice] = useState(0);
    const [dueDatePromo, setDueDate] = useState("");
    const [recommended, setRecommended] = useState(false)
    const [planTerm, setPlanTerm] = useState("");
    const [planTermsList, setPlanTermsList] = useState([]);
    const { register, handleSubmit, errors } = useForm();

    /*const isDateInFuture = date => {
        if (!date) { return false; }
        const inputDate = new Date(date);
        inputDate.setHours(0,0,0,0);
        const today = new Date();
        today.setHours(0,0,0,0);
        return !(date > today);
      }*/


    const action = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    useEffect(() => {
        if (action === "new") return;
        dispatch({ type: "SET_LOADING", payload: true })
        db.collection("plans").doc(id).get()
            .then(document => {
                setName(document.data().name);
                setPrice(document.data().price);
                setPromoPrice(document.data().promoPrice);
                setDueDate(document.data().dueDatePromo);
                document.data().terms ? setPlanTermsList(document.data().terms) : setPlanTermsList([]);
                dispatch({ type: "SET_LOADING", payload: false })
            })
            .catch(error => {
                console.log('error use effect');
                dispatch({ type: "SET_LOADING", payload: false })
            })
    }, [id, setId])


    const onSubmit = data => {
        if (action !== "new") {
            db.collection("plans").doc(id).update({
                name,
                price,
                promoPrice,
                dueDatePromo,
                recommended,
                terms: planTermsList
            })
                .then(() => {
                    setOpen(true)
                })
                .catch(error => {
                    setOpenError(true)
                    console.log('error', error);
                })
        }
        else {
            CreatePlan({
                name,
                price,
                promoPrice,
                dueDatePromo,
                recommended,
                terms: planTermsList
            }, props.history);
            setOpen(true)
        }

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };

    if (isLoading || (action === "edit" && name === "")) {
        return (
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
                        <p>admin / plans / new</p>
                    </Breadcrumbs>
                </div>
                <div className="new-plan-row">
                    <TextField name="name"
                        value={name || ''}
                        type="text"
                        label="Name"
                        variant="outlined"
                        inputRef={register({ required: true })}
                        onChange={e => setName(e.target.value)}
                        fullWidth
                    />
                    <FormHelperText error>{errors.name && "Name is required"}</FormHelperText>
                </div>
                <div className="new-plan-row">
                    <TextField name="price"
                        value={price || ''}
                        type="number"
                        min="0.01"
                        label="Price"
                        variant="outlined"
                        inputRef={register({ required: true })}
                        onChange={e => setPrice(e.target.value)}
                        inputProps={{ step: 0.01 }}
                        fullWidth />
                    <FormHelperText error>{errors.price && "Price is required"}</FormHelperText>
                </div>
                <div className="new-plan-multi-row">
                    <div className="new-plan-half-row">
                        <TextField name="promoPrice"
                            value={promoPrice || ''}
                            type="number"
                            min="0.01"
                            label="Promo price"
                            variant="outlined"
                            onChange={e => setPromoPrice(e.target.value)}
                            inputProps={{ step: 0.01 }}
                            fullWidth />
                    </div>
                    <div className="new-plan-half-row">
                        <TextField name="promoDueDate"
                            value={dueDatePromo || ''}
                            type="date"
                            label="Promo due date"
                            variant="outlined"
                            onChange={e => setDueDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth />
                    </div>
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={recommended}
                                onChange={() => setRecommended(!recommended)}
                                name="recommended"
                                color="primary"
                            />
                        }
                        label="Recommended"
                    />

                </div>
                <div className="new-plan-row">
                    <TextField
                        label="Add plan terms"
                        value={planTerm || ''}
                        name="planTerms"
                        type="text"
                        variant="outlined"
                        onChange={e => setPlanTerm(e.target.value)}
                        InputProps={
                            planTerm.trim() === '' ? {} :
                                {
                                    endAdornment: <InputAdornment position="start">
                                        <IconButton
                                            onClick={e => {
                                                setPlanTermsList([...planTermsList, planTerm]);
                                                setPlanTerm("");
                                            }}
                                            onMouseDown={e => e.preventDefault()}
                                        >
                                            <AddCircleOutlineOutlinedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                        }
                        fullWidth />
                </div>
                <div className="new-plan-row">
                    <List
                        subheader={planTermsList && planTermsList.length === 0 ? "" :
                            <ListSubheader component="div" id="nested-list-subheader">
                                PLAN TERMS
                        </ListSubheader>
                        }>
                        {
                            //Show plan terms only if is not undefined
                            planTermsList ?
                                planTermsList.map((plan, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CancelIcon color="secondary"
                                                    onClick={() => setPlanTermsList(planTermsList.filter(item => item !== plan))}
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary={plan} />
                                        </ListItem>
                                    )
                                }) : ""


                        }
                    </List>
                </div>

                <div className="new-plan-row-buttons align-right">
                    <Button type="submit" color="primary" variant="contained">Save</Button>
                    <Button type="button" onClick={() => props.history.goBack()} color="secondary" variant="contained" id="deleteButton" >Cancel</Button>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    The plan was succesfully saved!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={() => setOpenError(false)} severity="error">
                    Error has ocurred!
                </Alert>
            </Snackbar>
        </form>
    )
}

