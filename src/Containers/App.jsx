import React, { useState, useEffect } from 'react'
import { Header } from '../Components/Header'
import '../assets/styles/App.scss'
import { Search } from '../Components/Search'
import { Categories } from '../Components/Categories'
import { Carrousel } from '../Components/Carrousel'
import { CarrouselItem } from '../Components/CarrouselItem'
import { Footer } from '../Components/Footer'


export const App = () => {

    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);
    console.log(videos);

    return(
        <div className="App">
            <Header/>
            <Search/>
            {videos.mylist.length > 0 &&
            <Categories title="MyLista">
                <Carrousel>
                    {videos.trends.map(item =>
                    <CarrouselItem key={item.id} {...item} />        
                    )} 
                </Carrousel>
            </Categories>
            
            }
            
            
            <Categories title="Tendencias">
                <Carrousel>
                    {videos.trends.map(item =>
                    <CarrouselItem key={item.id} {...item} />        
                    )} 
                </Carrousel>
            </Categories>

            <Categories title="Originales">
                <Carrousel>
                    {videos.originals.map(item =>
                    <CarrouselItem key={item.id} {...item} />        
                    )} 
                </Carrousel>
            </Categories>


            <Footer/>
            
        </div>
    );
}