import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Button, TextField, FormHelperText } from '@material-ui/core';
import './sign-up.styles.scss';
import { PlanBox } from '../../../components/plan-box/plan-box.components';
import { db } from '../../../firebase/firebase.utils'
import { useForm } from "react-hook-form";

export const SignUp = props => {
    const [plans, setPlans] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const { register, handleSubmit, errors, getValues } = useForm();

    //'/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    useEffect(() => {
        const rows = [];
        db.collection('plans').orderBy('price').get()
            .then(querySnapshot => {
                querySnapshot.docs.map(doc => {
                    rows.push({
                        id: doc.id,
                        name: doc.data().name,
                        price: doc.data().price,
                        promoPrice: doc.data().promoPrice,
                        dueDatePromo: doc.data().dueDatePromo,
                        description: doc.data().description
                    })
                })
                setPlans(rows)
            });
    },[])

    const onSubmit = data => {
       console.log(data);
    };

    return (
        
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <Card className="card-container">
                <h2>Create your account</h2>
                <CardContent>
                    <div className="fields-row">
                        <div className="field-cell">
                            <TextField
                                size="small"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                onChange={e => {setLastName(e.target.value)}}
                                variant="outlined"
                                inputRef={register({required: true})}
                                fullWidth />
                                <FormHelperText error>{errors.lastName && "Last name is required"}</FormHelperText>
                        </div>
                        <div className="field-cell right-field">
                            <TextField
                                size="small"
                                label="First Name"
                                name="firstName"
                                type="text"
                                onChange={e => {setFirstName(e.target.value)}}
                                variant="outlined"
                                inputRef={register({required: true})}
                                fullWidth />
                                {errors.firstName && (<FormHelperText error>First name is required</FormHelperText>)}
                        </div>
                    </div>
                    <div className="field-cell">
                        <TextField
                            size="small"
                            label="Email"
                            name="email"
                            type="email"
                            onChange={e => {setEmail(e.target.value)}}
                            inputRef={register({required: true, 
                                                pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i})}
                            variant="outlined"
                            fullWidth />
                    
                            {errors.email && errors.email.type === "required" && (<FormHelperText error>Email is required</FormHelperText>)}
                            {errors.email && errors.email.type === "pattern" && (<FormHelperText error>Email format not accepted</FormHelperText>)}
                    </div>
                    <div className="fields-row">
                        <div className="field-cell">
                            <TextField
                                size="small"
                                label="Password"
                                name="password"
                                type="password"
                                onChange={e => {setPassword(e.target.value)}}
                                inputRef={register({required: true, validate: value => value === getValues("confirmPassword")})}
                                variant="outlined"
                                fullWidth />                                
                                {errors.password && errors.password.type === "validate" && (<FormHelperText error>Password must match confirmation</FormHelperText>)}
                                {errors.password && errors.password.type === "required" && (<FormHelperText error>Password is required</FormHelperText>)}

                        </div>
                        <div className="field-cell right-field">
                            <TextField
                                size="small"
                                label="Confirm password"
                                name="confirmPassword"
                                type="password"
                                onChange={e => {setConfirmPassword(e.target.value)}}
                                inputRef={register}
                                variant="outlined"
                                fullWidth />
                        </div>
                    </div>
                    <div className="fields-row">
                        <h3>Select a plan</h3>
                    </div>
                    <div className="fields-row">
                            {
                                plans.map((plan, index) => (
                                    <div key={index} className="plan-cell">
                                    <PlanBox
                                        id={plan.id}
                                        title={plan.name}
                                        content={plan.description}
                                        price={plan.price}
                                        buttonText="Select"
                                    />
                                    </div>
                                ))
                            }

                     </div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary" type="submit">Next</Button>
                </CardActions>
            </Card>
        </form>

    )
}