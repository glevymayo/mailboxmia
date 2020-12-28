import React from 'react';
import { makeStyles } from '@material-ui/core';
import './web-layout.styles.scss';
import { WebAppBar } from '../web/web-app-bar/web-app-bar.components';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))

export const WebLayout = (props) => {
    const classes = useStyles();

    return (
        <div className="web-layout-container">
            <div className="web-layout-top-nav-container">
                <WebAppBar />
                <div className={classes.offset}></div>
            </div>
            <div className="web-layout-content">
                {props.children}
            </div>
        </div>
    );
};

