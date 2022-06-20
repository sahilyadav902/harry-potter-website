import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const Nav = styled.nav`
background: #0c243c;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;


export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
`;


export const NavLogo = styled(LinkR)`
cursor: pointer;
margin-left: 24px;
`;


export const WizLogo = styled.img`
height: 100%;
width: 100%;
`;


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 1020px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 1020px)
{
    display: none;
}
`;


export const NavItem = styled.li`
height:80px;
`;


export const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 5px solid #ff8000;
    
}
`;


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 1020px){
    display: none;
}
`;


export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #55c2c3;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
}
`;