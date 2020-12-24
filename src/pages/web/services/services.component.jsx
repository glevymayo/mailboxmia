import React from 'react';
import { LogoCard } from '../../../components/logo-card/logo-card.component';
import './services.styles.scss';

export const Services = (props) => {
    const services = [
        {service: {
            title: 'Mailbox',
            description: 'Get all your mailing in a real address, not a PO',
            icon: 'mail_outline'
        }},
        {service: {
            title: 'Package storage',
            description: 'Make all your purchases and ship to us. We store your packages until you pick them up',
            icon: 'redeem'
        }},
        {service: {
            title: 'Postage service',
            description: 'We send mails with your name, as if you were here',
            icon: 'markunread_mailbox'
        }},
        {service: {
            title: 'Pack & ship',
            description: 'We pack your stuff and ship everywhere',
            icon: 'local_shipping'
        }},
        {service: {
            title: 'Package forwarding',
            description: 'We receive your packages and forward to other persones o companies',
            icon: 'forward_to_inbox'
        }},
        {service: {
            title: 'Mail scan',
            description: 'Get your mail scanned and uploaded to your account',
            icon: 'scanner'
        }}
    ]
    return (
        <div id="services" className="services-main-container">
            <div className="services-sub-container">
            {
                services.map( (service, index) => {
                    return(
                        <LogoCard key={index} icon={service.service.icon} title={service.service.title} description={service.service.description} />
                    )
                })
            }
            </div>
        </div>
    );
};
