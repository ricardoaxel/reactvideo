import React, { useState, useEffect } from 'react'
import { Header } from '../Components/Header'
import '../assets/styles/App.scss'
import { Search } from '../Components/Search'
import { Categories } from '../Components/Categories'
import { Carrousel } from '../Components/Carrousel'
import { CarrouselItem } from '../Components/CarrouselItem'
import { Footer } from '../Components/Footer'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState';

export const Home = () => {
    const initialState = useInitialState(API);
    return(
        <>
            <Search/>
            {initialState.mylist.length > 0 &&
            <Categories title="Mi Lista">
                <Carrousel>
                    {initialState.trends.map(item =>
                    <CarrouselItem key={item.id} {...item} />        
                    )} 
                </Carrousel>
            </Categories>
            
            }
            
            
            <Categories title="Tendencias">
                <Carrousel>
                    {initialState.trends.map(item =>
                    <CarrouselItem key={item.id} {...item} />        
                    )} 
                </Carrousel>
            </Categories>

            <Categories title="Originales">
                <Carrousel>
                    {initialState.originals.map(item =>
                    <CarrouselItem key={item.id} {...item} />        
                    )} 
                </Carrousel>
            </Categories>
        </>
    );
}

export default Home;