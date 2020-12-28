import { TextField, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import './contactus.styles.scss';
import {useForm} from 'react-hook-form';


const useStyles =  makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '20px'
      },
    }
))

export const Contactus = props => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div id="contactus" className="contactus-container">
            <div className={classes.offset}></div>
            <div className="contact-form-row">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form-row">
                <TextField name="name" 
                label="Name" 
                variant="outlined" 
                inputRef={register({required: true})}
                fullWidth />
            </div>
            <div className="contact-form-row">
                <TextField name="email" 
                label="Email" 
                variant="outlined" 
                inputRef={register({required: true})}
                fullWidth />
            </div>
            <div className="contact-form-row">
                <TextField name="comment" 
                label="Comments" 
                variant="outlined" 
                multiline={true}
                rows={3}
                inputRef={register({required: true})}
                fullWidth />
            </div>
            <div className="contact-form-row align-right">
                <Button type="submit" variant="contained" color="primary">Enviar</Button>
            </div>
            <div className={classes.footer}>
                <div className="align-left interline">
                    1602 NE 205th Terrace<br />
                    North Miami Beach, Florida<br />
                    33179-2110
                </div>
                <div className="align-right"></div>
            </div>
        </div>
        </form>
    )
}