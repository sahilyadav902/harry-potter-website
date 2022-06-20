import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 480px){
    height: 780px;
}
@media screen and (max-width: 1020px){
    padding: 100px 0;
}
`;


export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1250px;
margin-right: auto;
margin-left: auto;
justify-content: center;

@media screen and (min-width: 580px) and (max-width: 720px){
    height: 920px;
}
@media screen and (min-width: 720px) and (max-width: 1020px){
    height: 1000px;
}
`;


export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`) };

@media screen and (max-width: 1020px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;


export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;


export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;


export const TextWrapper = styled.div`
max-width: 1540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 1020px){
    padding-bottom: 30px;
}
`;


export const TopLogo = styled.img`
height: 15rem;
width: 15rem;
margin-bottom: 30px;

@media screen and (max-width: 768px){
    height: 10rem;
    width: 10rem;
}
`;


export const Heading = styled.div`
margin-bottom: 24px;
font-family: 'Harry Potter', sans-serif;
font-size: 4rem;
letter-spacing: 9px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606') };

@media screen and (max-width: 480px){
    font-size: 2.2rem;
}
`;


export const Subtitle = styled.div`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

@media screen and (min-width: 480px) and (max-width: 1020px){
    max-width: 600px;
}
`;


export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;


export const Linker = styled(LinkR)`
text-decoration: none;
`;


export const ImgWrap = styled.div`
height: 100%;

@media screen and (min-width: 580px and max-width: 1020px){
    max-height: 200px;
}
`;


export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (min-width: 580px) and (max-width: 1020px){
    max-height: 370px;
    margin-right: 0px;
}
`;