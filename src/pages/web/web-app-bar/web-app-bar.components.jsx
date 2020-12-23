import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link, animateScroll as scroll } from "react-scroll";
import './web-app-bar.styles.scss';

export const WebAppBar = (props) => {

    return (
        <AppBar>
            <Toolbar className="web-toolbar-container">
                <div><Typography color="inherit">MailboxMia</Typography></div>
                <div className="web-toolbar-menu-container">
                    <div>
                        <Link to="welcome"
                            className="link-white"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>Main</Link>
                    </div>
                    <div>
                        <Link to="services"
                            className="link-white"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>Services</Link>
                    </div>
                    <div>
                        <Link to="pricing" className="link-white">Pricing</Link>
                    </div>
                    <div>
                        <Link to="testimonial" className="link-white">Testimonial</Link>
                    </div>
                    <div>
                        <Link to="contact" className="link-white">Contact</Link>
                    </div>
                </div>

                <div><p>Icono</p></div>

            </Toolbar>
        </AppBar>
    )
}
