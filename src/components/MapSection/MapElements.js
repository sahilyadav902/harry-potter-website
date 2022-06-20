import styled from "styled-components";


export const MapContainer = styled.div`
height: 860px;
position: relative;

@media screen and (max-width: 480px){
    height: 750px;
}
`;


export const MapBg = styled.div`
width: 100%;
height: 100%;
`;


export const ImgBg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


export const ImgBg2 = styled.img`
width: 100%;
height: 100%;
margin: 35px auto 0px;

@media screen and (max-width: 480px){
    margin: 50px auto;
}
`;


export const MapContent = styled.div`
position: absolute;
top: 100px;
left: 0; 
right: 0;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
max-width: 1000px;
margin: auto;

@media screen and (max-width: 480px){
    margin: 50px auto;
}
`;


export const MapHeading = styled.div`
font-family: 'Harry Potter', sans-serif;
font-size: 5rem;
letter-spacing: 9px;
color: 	#28282B;

@media screen and (max-width: 480px){
    font-size: 2.5rem;
}
@media screen and (min-width: 480px) and (max-width: 768px){
    font-size: 4.5rem;
}
`;


export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
position: relative;
bottom: 190px;

@media screen and (max-width: 480px){
    bottom: 10px;
}
@media screen and (min-width: 480px) and (max-width: 600px){
    bottom: 40px;
}
@media screen and (min-width: 600px) and (max-width: 700px){
    bottom: 70px;
}
@media screen and (min-width: 700px) and (max-width: 800px){
    bottom: 100px;
}
@media screen and (min-width: 800px) and (max-width: 900px){
    bottom: 130px;
}
@media screen and (min-width: 900px) and (max-width: 1000px){
    bottom: 170px;
}
`;