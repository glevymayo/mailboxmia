import React, {useState} from 'react';
import {TextField, InputAdornment, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { useForm } from "react-hook-form";

export const PasswordField = (props) => {
    const { register, errors } = useForm();
    const [showPassword, setShowPassword] = useState("password")

    return (
        <TextField {...props}
                type={showPassword}
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="start">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={e => showPassword === 'password' ? setShowPassword("text") : setShowPassword("password")}
                            onMouseDown={e => e.preventDefault()}
                        >
                            {showPassword === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }}
                 />

    );
};