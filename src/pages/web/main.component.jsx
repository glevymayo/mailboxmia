import React from 'react';
import { Contactus } from './contactus/contactus.component';
import { Services } from './services/services.component';
import { Testimonials } from './testimonials/testimonials.component';
import { WebPricing } from './web-pricing/web-pricing.component';
import { Welcome } from './welcome/welcome.component';
import './web.styles.scss';

const Main = () => {
    return (
        <div className="simple-container">
           <Welcome />
           <Services />
           <WebPricing />
           <Testimonials />
           <Contactus />
        </div>
    );
};

export default Main;