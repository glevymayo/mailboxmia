import React from 'react';
import './admin-layout.styles.scss';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { AdminMenu } from '../menus/admin-menu.component';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))
export const AdminLayout = (props) => {
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
        <div className="main-container">
            <div className="menu-container">
                <AdminMenu />
            </div>
            <div className="content-container">
                {props.children}
            </div>
        </div>
    </div>
)}