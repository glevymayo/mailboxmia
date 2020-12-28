import React from 'react';
import {TextField} from '@material-ui/core';
import { useForm } from "react-hook-form";

export const EmailField = (props) => {
    const { register, errors } = useForm();

    return (
        <TextField
            {...props}
            type="email"
            inputRef={register({
                required: true,
                pattern: {
                    value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                    message: "Email format not valid"
                }
            })}
            error={errors.email}
            helperText={errors.email ? errors.email.message : ""}
            variant="outlined" />
    );
};

/* {errors.password && errors.password.type === "validate" && (<FormHelperText error>Password must match confirmation</FormHelperText>)}
 {errors.password && errors.password.type === "required" && (<FormHelperText error>Password is required</FormHelperText>)}
 */
