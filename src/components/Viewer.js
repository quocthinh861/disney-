import React from 'react'
import styled from 'styled-components'

function Viewer() {
    return (
        <Container>
            <Wrapper>
                <img src="/images/viewers-disney.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/viewers-marvel.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/viewers-national.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/viewers-pixar.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/viewers-starwars.png" />
            </Wrapper>

        </Container>
    )
}

export default Viewer

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
`;

const Wrapper = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms ease-in-out;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;