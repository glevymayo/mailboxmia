import React from 'react';
import background from './imgs/mailbox_usa.jpg';
import { Services } from './services/services.component';
import './web.styles.scss';
import { Welcome } from './welcome/welcome.component';

const Main = () => {
    return (
        <div className="simple-container">
           <Welcome />
           <Services></Services>
        </div>
    );
};

export default Main;