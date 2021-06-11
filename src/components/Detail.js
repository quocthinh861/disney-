import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useSelector } from 'react-redux';

export function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const movies = useSelector(state => state.movie.movies);
    

    useEffect(()=>{
        movies.forEach(movie => {
            if(movie.id == id)
            {
                setMovie(movie);
            }
        });
    }, [id, movie])

    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <ImgTitle>
                <img src={movie.titleImg}></img>
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"></img>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"></img>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"></img>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {movie.subTitle}
            </SubTitle>
            <Description>
               {movie.description}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.8;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;

const ImgTitle = styled.div`
   display: flex;
   align-items: center;
   margin: 0 auto;
   height: 25vw;
   min-height: 170px;
   padding-bottom: 24px;
   width: 100%;

   img {
       max-width: 600px;
       min-width: 200px;
       width: 35vw;
   }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px; 
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 20px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 900px;
`;