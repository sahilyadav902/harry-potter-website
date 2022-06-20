import React from 'react';
import ReactDOM from 'react-dom/client';
import { EnrollContainer, EnrollWrapper, LogoWrap, Logo, EnrollContent, EnrollHeading, ImgWrap, Img, BtnWrap, Name } from './EnrollElements';
import {Buttonclick} from '../ButtonElements';
import { OverlayContainer, InformalHeading, SubHeading, GifWrap, GifImg } from '../OverlayElements';
import WizLogo from '../Images/wizarding-world.png';
import HogPic from '../Images/enroll-hogwarts.jpg';
import ConfusedHarry from '../Images/confused-harry.gif';

const Enroll = () => {
  return (
    <EnrollContainer>
        <EnrollWrapper>
            <LogoWrap to='/'>
                <Logo src={WizLogo} alt='The Wizarding World'/>
            </LogoWrap>
            <EnrollContent>
              <EnrollHeading>Join Hogwarts today & become a Wizard!</EnrollHeading>
              <ImgWrap>
                <Img src={HogPic} alt='Enroll at Hogwarts' />
              </ImgWrap>
              <BtnWrap>
                <Name id='enroll-name' type='text' placeholder='Enter your Name'/>
                <Buttonclick onClick={EnrollOverlay}>Apply</Buttonclick>
              </BtnWrap>
            </EnrollContent>
        </EnrollWrapper>
    </EnrollContainer>
  );
};

export default Enroll;

const EnrollOverlay = () =>{
    const namelength = document.getElementById("enroll-name").value.length;
    if(namelength===0){
      return;
    }
    const NewWizard = document.getElementById("enroll-name").value.toUpperCase();
    document.getElementById("enroll-name").value="";
    document.getElementById("enroll-overlay").style.display = "block";
    
    const newblock = ReactDOM.createRoot(document.getElementById('enroll-overlay'));
    newblock.render(
    <OverlayContainer>
        <InformalHeading>Welcome to Hogwarts!</InformalHeading>
        <SubHeading>You're a wizard {NewWizard}</SubHeading>
        <GifWrap>
            <GifImg src={ConfusedHarry} alt="Welcome to Hogwarts" />
        </GifWrap>
    </OverlayContainer>
      );
  }