import React from 'react'
import { Testimonial } from '../../../components/testimonial/testimonial.component';
import './testimonials.styles.scss';

const testimonios = [
    {name: 'Carlos A.',
    title: 'Muy seguro',
    text: 'Tengo mis inversiones en Estados Unidos y utilizo el servicio para poder recibir mi correspondencia de manera segura. Tengo la documentación mas importante online en el momento que lo necesito',
    image: 'https://material-ui.com/static/images/avatar/1.jpg'
    },
    {name: 'William L.',
    title: 'Envíos a tiempo',
    text: 'Vivo en Uruguay pero vendo online en USA. Los envios a mis clientes llegan a tiempo y he podido hacer crecer mi negocio en los ultimos años.',
    image: 'https://material-ui.com/static/images/avatar/2.jpg'
    },
    {name: 'Pity',
    title: 'Mayor comodidad',
    text: 'Antes de viajar hago todas las compras y las envio a mi dirección. Asi, aprovecho mis vacaciones para ir a la playa y no dentro de un shopping. Los paquetes quedan guardados de forma segura y en perfecto estado',
    image: 'https://material-ui.com/static/images/avatar/3.jpg'
    }
]
export const Testimonials = (props) => {

    return (
        <div className="testimonials-container">
        {
            testimonios.map((data, index) => (<Testimonial data={data} key={index}/>) ) 
        }
        </div>
    )
}