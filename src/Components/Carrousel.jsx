import React from 'react';
import '../assets/styles/components/Carrousel.scss';

export const Carrousel = ({children}) => {
    return (
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>  
        </section>
    )
}
