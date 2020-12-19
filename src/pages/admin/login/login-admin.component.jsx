import React, { useEffect, useState } from "react";
import { loginUserWithEmailAndPassword } from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from 'react-redux';
import './login-admin.styles.scss';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { FormHelperText, IconButton, TextField, Button, InputAdornment } from '@material-ui/core';
import { useHistory } from "react-router-dom";


export const LoginAdmin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("password")
    const error = useSelector(state => state.common.error)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        return () => {
            dispatch({
                type: "REMOVE_ERROR"
            })
        }
    }, [])

    const handleLogin = () => {
        loginUserWithEmailAndPassword(email, password, dispatch, history)
    }

    return <div className="container">
        <div className="form-row-container">
            <h2>LOGO</h2>
        </div>
        <div className="form-row-container">
            <TextField required
                label="Email"
                name="Email"
                variant="outlined"
                onChange={e => setEmail(e.target.value)}
                fullWidth />
        </div>
        <div className="form-row-container">
            <TextField required
                label="Password"
                name="password"
                type={showPassword}
                variant="outlined"
                onChange={e => setPassword(e.target.value)}
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
                fullWidth />
        </div>
        <div className="form-row-container text-start">
            <FormHelperText error={true}>{error}</FormHelperText>
        </div>
        <div className="form-row-container">
            <Button variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth>Login</Button>
        </div>

    </div>
}

