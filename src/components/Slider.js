import React from 'react'
import Slider from "react-slick"
import styled from 'styled-components'

function HomeSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <Caurosel {...settings}>
            <Wrapper>
                <img src='/images/slider-badging.jpg'/>
            </Wrapper>
            <Wrapper>
                <img src='/images/slider-badag.jpg'/>
            </Wrapper>
            <Wrapper>
                <img src='/images/slider-scale.jpg'/>
            </Wrapper>
            <Wrapper>
                <img src='/images/slider-scales.jpg'/>
            </Wrapper>
        </Caurosel>
    )
}

export default HomeSlider

const Caurosel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }
`;

const Wrapper = styled.div`
    img {
        border-radius: 4px;
        width: 100%;
        height: 100%;
    }
    
`;