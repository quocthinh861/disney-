import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogIn } from '../features/user/userSlice'
function Login() {
    const dispatch = useDispatch();
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <Signup to='/' onClick={() => dispatch(setLogIn({name: "Thinh", email: "example@gmail.com"}))}>GET ALL THERE</Signup>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    &:before {
        position: absolute;
        background-image: url("/images/login-background.jpg");
        background-position:  top left;
        background-size: cover;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const CTALogoTwo = styled.img`
    width: 90%;
`;

const Signup = styled(Link)`
    width: 100%;
    text-decoration: none;
    background-color: #0063e5;
    font-weight: bold;
    color: #f9f9f9;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 17px 0;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    color: #f9f9f9;
    letter-spacing: 1.5;
    text-align: center;
`;