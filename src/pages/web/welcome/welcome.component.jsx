import React from 'react';
import { Button } from '@material-ui/core';
import '../web.styles.scss';
import './welcome.styles.scss'

export const Welcome = (props) => {
    return (
        <div id="welcome" className="welcome-container">
            <div className="welcome-column"></div>
            <div className="welcome-column font-black">
                <div className="border">
                    <p className="title">
                        OBTEN TU DIRECCION EN ESTADOS UNIDOS
                    </p>
                    <p className="subTitle">
                        Registrate y obten tu propia direcci&oacute;n en Miami y un servicio postal personalizado.
                     </p>
                </div>
                <div><Button color="primary" variant="contained">Accede a tu dirección gratiuta</Button></div>
            </div>
        </div>
    );
};
