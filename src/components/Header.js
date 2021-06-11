import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSignOut } from '../features/user/userSlice'

function Header() {

    const username = useSelector(state => state.user.name);
    
    const dispatch = useDispatch();

    return (
        <Nav>
            <Logo src='/images/disney.svg' />
            {
                !username ? 
                    <Login to='/login'>Login</Login> :
                        <div>
                            <NavMenu>
                                <a>
                                    <img src='/images/home-icon.svg' />
                                    <span>Home</span>
                                </a>
                                <a>
                                    <img src='/images/search-icon.svg' />
                                    <span>Search</span>
                                </a>
                                <a>
                                    <img src='/images/watchlist-icon.svg' />
                                    <span>Watch list</span>
                                </a>
                                <a>
                                    <img src='/images/original-icon.svg' />
                                    <span>Originals</span>
                                </a>
                                <a>
                                    <img src='/images/movie-icon.svg' />
                                    <span>Movies</span>
                                </a>
                                <a>
                                    <img src='/images/series-icon.svg' />
                                    <span>Series</span>
                                </a>
                            </NavMenu>
                            <LogOutContainer>
                                <img src="images/avatar.jpg"/>
                                <LogOutDropDown>
                                    <TextLink onClick={ () => dispatch(setSignOut())}>Sign out</TextLink>
                                </LogOutDropDown>
                            </LogOutContainer>
                        </div>
                    
            }
        </Nav>
    )
}

export default Header


const TextLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;



    &:hover {
        color: #e50914;
    }
`;

const LogOutDropDown = styled.div`
    display: none;
    position: absolute;
    right: 0px;
    top: 100%;
    width: 100px;
    background: black;
    padding: 10px 15px;
    z-index: 1;

    
`;

const LogOutContainer = styled.div`

    position: relative;


    img {
        width: 48px;
        height: 48px;
        cursor: pointer;
    }

    &:hover {
        ${LogOutDropDown} {
            display: initial;
        }
    }
`;


const Login = styled(Link)`
    color: black;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        color: #000;
        border-color: transparent;
    }
`;

const Nav = styled.nav`
    height: 70px;
    background-color: #fff;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 40px;
`;

const Logo = styled.img`
    width: 100px;
`;

const NavMenu =styled.div`
    display: flex;
    flex: 100%;

    a {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
         margin: 0 12px;

        img {
            filter:  brightness(0) invert(0);
            height: 20px;
        }

        span {
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.42px;
        }

        &:after {
            content: "";
            height: 2px;
            background-color: #000;
            position: absolute;
            transition: 0.2s;
            left: 0;
            bottom: -6px;
            right: 0;
            opacity: 0;
            transform: scaleX(0); 
        }

        &:hover {
            &:after {
                opacity: 1;
                transform: scaleX(1.1);
            }
        }
    }
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    cursor: pointer;

`;

