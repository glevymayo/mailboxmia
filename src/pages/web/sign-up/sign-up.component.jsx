import React from 'react';
import './sign-up.styles.scss';
import Button from '@material-ui/core/Button'
import { makeStyles, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    field: {
        padding: '15px 10px',
    },
}))

export const SignUp = () => {


    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="full-container">
            <form onSubmit={handleSubmit(onSubmit)} className="sign-up-container">

                <Button variant="contained" color="primary" >
                    Login with Facebook
                    </Button>
                <Typography variant="h6">
                <p style={{align: 'center', fontFamily: 'Lato'}}>o registrese con email y password</p>
                </Typography>
                <TextField variant="outlined"
                    name="email"
                    label="Email"
                    className={classes.field}
                    error={errors.email}
                    inputRef={register({
                        required: true,
                        pattern: {
                            value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                            message: "Incorrect email format"
                        }
                    })}
                    helperText={errors.email ? errors.email.message : ""}
                    fullWidth />

                <TextField variant="outlined"
                    name="name"
                    label="Name"
                    className={classes.field}
                    error={errors.name}
                    inputRef={register({ required: true })}
                    helperText={errors.name ? errors.name.message : ""}
                    fullWidth />

                <TextField variant="outlined" label="Password" type="password" className={classes.field} fullWidth />
                <TextField variant="outlined" label="Confirm password" type="password" className={classes.field} fullWidth />


                <Button variant="contained" color="primary" >
                    Regitrarse
                    </Button>

            </form>
        </div>

    );
};
