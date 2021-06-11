import React, { useEffect } from 'react'
import styled from 'styled-components'
import Movies from './Movies'
import HomeSlider from './Slider'
import Viewer from './Viewer'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
import data from '../disneyPlusMoviesData.json'

function Home() {

    const dispatch = useDispatch();
    
    useEffect(() => {

       
            
            let tempMovies = data.map((doc, index) => {
                return {id: index, ...doc}
            })

            dispatch(setMovies(tempMovies));
        
    }, []);

    return (
        <Container>
            <HomeSlider />
            <Viewer />
            <Movies />
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px); 
    padding: 0 calc(3.5vw + 5px);
    position: relative;

    &:before {
        background: url("/images/home-background.png") center center;
        background-size: cover;
        no-reapet: fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;