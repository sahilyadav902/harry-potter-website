import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubContainer, SubWrapper, ImgWrap, Img, SubContent, Heading, Subtitle, Name, BtnWrap } from './SubscribeElements';
import Owl from '../Images/owl-post.jpg';
import { Buttonclick } from '../ButtonElements';
import { OverlayContainer, InformalHeading, SubHeading, GifWrap, GifImg } from '../OverlayElements';
import OwlPost from '../Images/the-daily-prophet.gif';

const Subscribe = () => {
  return (
    <SubContainer>
      <SubWrapper>
        <ImgWrap>
            <Img src={Owl} alt='Owl Post' />
        </ImgWrap>
        <SubContent>
            <Heading>Subscribe to our Owl Post</Heading>
            <Subtitle>Subscribe to 'The Daily Prophet' to receive latest news, updates and events happening in The Wizarding World!</Subtitle>
            <BtnWrap>
            <Name id='reader-name' type='text' placeholder='Enter your Name' />
            <Buttonclick onClick={SubscribeOverlay}>Join</Buttonclick>
            </BtnWrap>
        </SubContent>
      </SubWrapper>
    </SubContainer>
  );
};

export default Subscribe;


const SubscribeOverlay = () =>{
  const namelength = document.getElementById("reader-name").value.length;
  if(namelength===0){
    return;
  }
  const NewsReader = document.getElementById("reader-name").value.toUpperCase();
  document.getElementById("reader-name").value="";

  document.getElementById("subscribe-overlay").style.display = "block";
  const newblock = ReactDOM.createRoot(document.getElementById('subscribe-overlay'));
  newblock.render(
  <OverlayContainer>
      <InformalHeading>Hey {NewsReader}!</InformalHeading>
      <SubHeading>Your Owl Post is on the way</SubHeading>
      <GifWrap>
          <GifImg src={OwlPost} alt="The Daily Prophet" />
      </GifWrap>
  </OverlayContainer>
    );
}