import React, { useState } from 'react';
import { IconButton, TextField, InputAdornment, Button, FormHelperText } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom'
import './sign-in.styles.scss';

export const SignIn = () => {
    const theme = useTheme();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(" ")
    const [showPassword, setShowPassword] = useState("password")
    const history = useHistory();

    const handleSubmit = () => {
        //envio al action y devuelve error si no se puede loguear. ver el useeffect x el error
    }
    return (
        <div className="container">
            <div className="form-row">
                <h1>LOGO</h1>
             </div>
             <div className="form-row">
             <TextField
                        required
                        label="Email"
                        name="email"
                        type="email"
                        onChange={e => { setEmail(e.target.value) }}
                        variant="outlined"
                        fullWidth />
             </div>
             <div className="form-row">
             <TextField
                        required
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
             <div className="form-row">
                 <FormHelperText error>
                 
                 </FormHelperText>
             </div>
             <div className="form-row">
             <Button variant="contained"
                        type="button"
                        color="primary"
                        onClick = {e => handleSubmit()}
                        fullWidth>Login
                </Button>
             </div>
             <div className="links-container">
                    <div className="link-row align-left"><Button color="primary"><Link to="./signup" className="link">Forgot password?</Link></Button></div>
                    <div className="link-row align-right"><Button color="primary"><Link to="./xxxx" className="link">Not an account? Sign up</Link></Button></div>
             </div>
        </div>
    )
}
