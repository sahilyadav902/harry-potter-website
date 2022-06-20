import styled from "styled-components";


export const OverlayContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: #000;
margin: 50px auto;

@media screen and (max-width: 530px){
    margin: 70px auto;
}
`;


export const SubHeading = styled.div`
font-size: 3rem;
margin: 20px auto;

@media screen and (max-width: 425px){
    font-size: 1.8rem;
}
@media screen and (min-width: 425px) and (max-width: 740px){
    font-size: 2rem;
}
@media screen and (min-width: 740px) and (max-width: 850px){
    font-size: 2.5rem;
}
`;


export const InformalHeading = styled.div`
margin: 20px auto;
font-family: 'Harry Potter', sans-serif;
font-size: 4rem;
letter-spacing: 9px;

@media screen and (max-width: 740px){
    font-size: 2.3rem;
}
@media screen and (min-width: 740px) and (max-width: 850px){
    font-size: 2.5rem;
}
@media screen and (min-width: 850px) and (max-width: 1065px){
    font-size: 3rem;
}
`;


export const GifWrap = styled.div`
height: 350px;

@media screen and (max-width: 470px){
    height: 250px;
}
@media screen and (min-width: 470px) and (max-width: 530px){
    height: 300px;
}
`;


export const GifImg = styled.img`
width: 100%;
height: 100%;
margin: 20px auto;
`;