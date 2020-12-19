import { Card, CardContent, Button } from '@material-ui/core';
import React from 'react';
import './plan-box.styles.scss';

export const PlanBox = props => {

    const {title, price, content, action, buttonText} = props
    return (
        //HACER EL BOX DE PRECIOS PERO CON DIVEN LUGAR DE CARDS A VER SI SE PUEDE OCUPAR BIEN EL ANCHO
        <Card className="plan-container">
            <CardContent className="card-content">
                <div className="plan-title"><h3>{title}</h3></div>
                <div><h2>${price}</h2></div>
                <div dangerouslySetInnerHTML={{__html: content}} />
                <div><Button color="primary" onClick={action} variant="contained" fullWidth>{buttonText}</Button></div>
            </CardContent>
        </Card>
    )
}