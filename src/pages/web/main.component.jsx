import React from 'react';
import { Services } from './services/services.component';
import { WebPricing } from './web-pricing/web-pricing.component';
import './web.styles.scss';
import { Welcome } from './welcome/welcome.component';

const Main = () => {
    return (
        <div className="simple-container">
           <Welcome />
           <Services />
           <WebPricing />
        </div>
    );
};

export default Main;