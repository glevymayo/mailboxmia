import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import './web-layout.styles.scss';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))

export const WebLayout = (props) => {
    const classes = useStyles();

    return (
        <div className="container">
            <div className="top-nav-container">
                <AppBar>
                    <Toolbar>
                        <Typography color="inherit">MailboxMia</Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.offset}></div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

