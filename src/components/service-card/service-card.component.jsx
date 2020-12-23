import React from 'react';
import './service-card.styles.scss';
import {Icon} from '@material-ui/core';

export const ServiceCard = (props) => {
    return (  
        <div className="service-card-container">
            <div className="service-card-title">
                <Icon>{props.icon}</Icon>
                </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.description}
            </div>
        </div>
    )
}
 