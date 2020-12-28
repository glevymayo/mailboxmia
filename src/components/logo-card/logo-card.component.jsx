import React from 'react';
import './logo-card.styles.scss';
import { Card, Icon, CardContent } from '@material-ui/core';

export const LogoCard = (props) => {
    return (
        <div className="logo-card-container">
            <Card style={{ height: '100%'}}>
                <CardContent>
                    <div className="logo-card-header">
                        <Icon style={{ fontSize: 60 }} color="secondary">{props.icon}</Icon>
                    </div>

                    <div className="logo-card-title">
                        <h3>{props.title}</h3>
                    </div>
                    <hr />
                    <div className="logo-card-body">
                        {props.description}
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
