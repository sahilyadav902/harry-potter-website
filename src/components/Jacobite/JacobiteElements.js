import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';


export const JacobiteContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 800px;
position: relative;
z-index: 1;

@media screen and (max-width: 768px){
    height: 750px;
}
@media screen and (max-width: 480px){
    height: 700px;
}
`;


export const JacobiteBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;


export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`;


export const Highlight = styled.div`
height: 100%;
width: 100%;
position: absolute;
text-align: center;
opacity: 0.2;
background: #B2FEFA;
background: -webkit-linear-gradient(to right, #0ED2F7, #B2FEFA);
background: linear-gradient(to right, #0ED2F7, #B2FEFA);
`;


export const HighlightBox = styled.div`
height: 110%;
width: 100%;
border-radius: 30px;
position: absolute;
text-align: center;
opacity: 0.4;
margin-top: -20px;
background: #D3CCE3;
background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);
background: linear-gradient(to right, #E9E4F0, #D3CCE3);
`;


export const JacobiteContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
`;


export const JacobiteImg = styled.img`
height: 60%;
width: 60%;
margin: 0 auto 2rem;
z-index: 4;

@media screen and (max-width: 768px){
    width: 65%;
    height: 65%;
}
@media screen and (max-width: 480px){
    width: 70%;
    height: 70%;
}
`;


export const JacobiteP = styled.p`
font-family: 'Playfair Display SC', serif;
margin-top: 24px;
color: #0c243c;
font-size: 4.5rem;
text-align: center;
z-index: 4;
padding: 0 5px;

@media screen and (max-width: 768px){
    font-size: 3rem;
}
@media screen and (max-width: 480px){
    font-size: 2.5rem;
}
`;


export const JacobiteBtnWrapper = styled.div`
display: flex;
font-size: 1rem;
font-weight: bold;
flex-direction: column;
align-items: center;
z-index: 4;
`;


export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;


export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;