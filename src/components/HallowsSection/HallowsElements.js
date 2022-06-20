import styled from "styled-components";


export const HallowsContainer = styled.div`
height: 860px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background: #010606;

@media screen and (max-width: 480px){
   height: 1500px;
}
@media screen and (min-width: 480px) and (max-width: 658px){
   height: 1500px;
}
@media screen and (min-width: 658px) and (max-width: 768px){
   height: 1450px;
}
@media screen and (min-width: 768px) and (max-width: 1000px){
   height: 1100px;
}
`;


export const HallowsWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;


export const HallowsCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height: 290px;
max-height: 340px;
max-width: 200px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;


export const HallowsIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;


export const HallowsH1 = styled.h1`
font-family: 'Harry Potter', sans-serif;
font-size: 5rem;
letter-spacing: 9px;
color: #fff;
margin-top: -10px;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2.2rem;
    margin-bottom: 30px;
}
@media screen and (min-width: 480px) and (max-width: 768px){
    font-size: 3.5rem;
    margin-bottom: 30px;
}
@media screen and (min-width: 768px) and (max-width: 1000px){
    font-size: 4rem;
    margin-bottom: 50px;
}
`;


export const HallowsH2 = styled.h2`
font-family: 'Merriweather', serif;
font-size: 1rem;
margin-bottom: 10px;
`;


export const HallowsP = styled.p`
font-size: 1rem;
`;