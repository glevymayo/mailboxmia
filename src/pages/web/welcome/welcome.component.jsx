import React from 'react';
import {Button} from '@material-ui/core';
import '../web.styles.scss';
import './welcome.styles.scss'

export const Welcome = (props) => {
    return (
        <div id="welcome" className="welcome-container">
            <div className="welcome-column"></div>
            <div className="welcome-column font-black">
                <div><h1>YOUR DREAMS CAME TRUE</h1></div>
                <div><h3>Have your personal address in USA</h3></div>
                <div><Button color="primary" variant="contained">Get a free address</Button></div>
            </div>
        </div>
    );
};
