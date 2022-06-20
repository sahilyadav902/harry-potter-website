import styled from "styled-components";


export const SubContainer = styled.div`
height: 500px;
background-color: #0c242c;
position: relative;

@media screen and (max-width: 920px)
{
    height: 680px;
}
`;


export const SubWrapper = styled.div`
display: flex;
flex-direction: rows;
align-items: center;
max-width: 1100px;
width: 100%;
position: relative;
top: 130px;
margin-right: auto;
margin-left: auto;
justify-content: center;

@media screen and (max-width: 920px)
{
    flex-direction: column;
    top: 90px;
    max-width: 550px;
}
`;


export const SubContent = styled.div`
text-align: left;
align-items: center;
color: #fff;
line-height: 1.5;

@media screen and (max-width: 920px)
{
    text-align: center;
    max-width: 550px;
}
`;


export const Heading = styled.div`
font-size: 2.5rem;
margin-bottom: 20px;

@media screen and (max-width: 475px)
{
    font-size: 2rem;
}
`;


export const Subtitle = styled.div`
font-size: 20px;
line-height: 1.8;
max-width: 600px;
`;


export const Name = styled.input`
font-size: 20px;
height: 30px;
width: 350px;
margin-right: 50px;

@media screen and (max-width: 920px)
{
    margin-right: 10px;

}
@media screen and (min-width: 400px) and (max-width: 475px)
{
    width: 250px;
}
@media screen and (max-width: 400px)
{
    width: 200px;
}
`;


export const ImgWrap = styled.div`
height: 100%;
padding-right: 20px;

@media screen and (max-width: 920px)
{
    padding-right: 0px;
    margin-bottom: 20px;
}
@media screen and (max-width: 480px){
    padding: 15px;
}
`;


export const Img = styled.img`
max-height: 250px;
width: 100%;

@media screen and (max-width: 480px){
    max-height: 200px;
}
`;


export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 20px;
max-height: 35px;

@media screen and (max-width: 920px)
{
    justify-content: center;
}
`;