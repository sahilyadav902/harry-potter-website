import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const EnrollContainer = styled.div`
background-color: #0c242c;
position: relative;
width: 100%;
height: 100%;
padding-bottom: 170px;

@media screen and (max-width: 480px){
  padding-bottom: 150px;
}
@media screen and (min-width: 480px) and (max-width: 710px){
  padding-bottom: 130px;
}
`;


export const EnrollWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;


export const LogoWrap = styled(LinkR)`
cursor: pointer;
height: 100px;
margin: 0 auto 20px;
background-color: #0c243c;
width: 100%;
border-bottom: 3px solid #55c2c3;
`;


export const Logo = styled.img`
height: 100%;
`;


export const EnrollContent = styled.div`
text-align: center;
align-items: center;
color: #fff;
`;


export const ImgWrap = styled.div`
height: 100%;
`;


export const Img = styled.img`
width: 100%;
height: 400px;
object-fit: cover;
margin: 20px auto;
max-width: 710px;

@media screen and (max-width: 375px){
  max-width: 350px;
}
@media screen and (min-width: 375px) and (max-width: 515px){
  max-width: 500px;
}
@media screen and (min-width: 515px) and (max-width: 710px){
  max-width: 600px;
}
`;


export const EnrollHeading = styled.div`
font-size: 2rem;
font-family: 'Playfair Display SC', serif;
margin: 10px auto;

@media screen and (max-width: 480px){
  font-size: 1.5rem
}
`;


export const Name = styled.input`
font-size: 20px;
height: 30px;
width: 350px;
margin-right: 50px;

@media screen and (max-width: 375px){
  width: 200px;
  margin-right: 8px;

}
@media screen and (min-width: 375px) and (max-width: 515px){
  width: 250px;
  margin-right: 10px;
}
`;


export const BtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
max-height: 25px;
`;