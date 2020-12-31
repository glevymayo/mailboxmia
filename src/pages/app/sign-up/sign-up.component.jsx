import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Button, TextField, FormHelperText, Typography } from '@material-ui/core';
import './sign-up.styles.scss';
import { db } from '../../../firebase/firebase.utils'
import { useForm } from "react-hook-form";
import FacebookIcon from '@material-ui/icons/Facebook';
import { CreditCardForm } from '../../../components/credit-card-form/credit-card-form.component';
import {useLocation} from 'react-router-dom';

export const SignUp = props => {

const location = useLocation();
    
    const {plan} = location.data ? location.data : null;
    const { register, handleSubmit, errors, getValues } = useForm();

    useEffect(() => {
       console.log('useeffect');
    }, [])

    const onSubmit = data => {
        /* Debo dar de alta el usuario en auth y en la db */

        /* debo dar de alta la tarjeta en stripe */

        /* debo cobrar el servicio primer mes */
    };

    console.log('errors: ', errors);
    return (

        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <Card className="card-container">
                <h2 style={{ align: 'center', fontFamily: 'Lato' }}>Create your account with E-mail and Password</h2>
                <CardContent>
                    <div className="fields-row">
                        <div className="field-cell">
                            <TextField
                                size="small"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                variant="outlined"
                                inputRef={register({
                                    required: { value: true, message: "Field is required" }
                                })}
                                error={errors.lastName !== undefined}
                                helperText={errors.lastName ? errors.lastName.message : ""}
                                fullWidth />
                        </div>
                        <div className="field-cell right-field">
                            <TextField
                                size="small"
                                label="First Name"
                                name="firstName"
                                type="text"
                                variant="outlined"
                                inputRef={register({
                                    required: { value: true, message: "Field is required" }
                                })}
                                error={errors.firstName !== undefined}
                                helperText={errors.firstName ? errors.firstName.message : ""}
                                fullWidth />
                        </div>
                    </div>
                    <div className="field-cell">
                        <TextField
                            size="small"
                            label="Email"
                            name="email"
                            type="email"
                            inputRef={register({
                                required: { value: true, message: 'Email is required' },
                                pattern: { value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i, message: 'Email format not accepted' }
                            })}
                            variant="outlined"
                            error={errors.email !== undefined}
                            helperText={errors.email ? errors.email.message : ""}
                            fullWidth />
                    </div>
                    <div className="fields-row">
                        <div className="field-cell">

                            <TextField
                                size="small"
                                label="Password"
                                name="password"
                                type="password"
                                inputRef={register({
                                    required: { value: true, message: 'Field is required' },
                                    validate: value => value === getValues("confirmPassword") || 'Password must match confirmatio'
                                })}
                                error={errors.password !== undefined}
                                helperText={errors.password ? errors.password.message : ""}
                                variant="outlined"
                                fullWidth />

                        </div>
                        <div className="field-cell right-field">
                            <TextField
                                size="small"
                                label="Confirm password"
                                name="confirmPassword"
                                type="password"
                                inputRef={register}
                                variant="outlined"
                                fullWidth />
                        </div>
                    </div>
                   {plan.price > 0 ? <CreditCardForm size="small" register={register} errors={errors}/> : ''}
                </CardContent>
                <CardActions>
                    <div className="field-cell">
                        <Button variant="contained" color="primary" type="submit">Registrarse con email</Button>
                       {/*} <div className="align-center"><Typography variant="body1">or</Typography></div>
                        <Button variant="contained" color="primary" fullWidth>
                            <FacebookIcon/> Loguearse con facebook
                            </Button>*/}
                    </div>
                </CardActions>
            </Card>
        </form>

    )
}