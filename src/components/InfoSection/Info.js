import React from 'react';
import ReactDOM from 'react-dom/client';
import { Buttonclick } from '../ButtonElements';
import { SubHeading, GifImg, GifWrap, InformalHeading, OverlayContainer } from '../OverlayElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLogo, Heading, Subtitle, BtnWrap, ImgWrap, Img, Linker } from './InfoElements';
import Fireworks from '../Images/fireworks.gif';
import KillCurse from '../Images/avada-kedavra.gif';

const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, logo, page }) => {
  
    const SelectOverlay = () =>{
        if(id==="hogwarts"){
            return;
        } else if(id==="the-sorting-hat"){
            SortingOverlay();
        }else if(id==="death-eaters"){
            CurseOverlay();
        }
    }

    return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLogo src={logo} />
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                            <Linker to={page}>
                                <Buttonclick primary={primary ? 1:0} dark={dark ? 1:0} onClick={SelectOverlay}>
                                {buttonLabel}
                                </Buttonclick>
                                </Linker>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  );
};

export default InfoSection;

const SortingOverlay = () =>{
    document.getElementById("sorting-overlay").style.display = "block";
    const getHouse = () =>{
        var houseArray = ['HUFFLEPUFF', 'RAVENCLAW', 'GRYFFINDOR', 'SLYTHERIN'];
        var num = Math.floor(Math.random()*4);
        return houseArray[num];
    }

    const newblock = ReactDOM.createRoot(document.getElementById('sorting-overlay'));
    newblock.render(
    <OverlayContainer>
        <InformalHeading>Congratulations!</InformalHeading>
        <SubHeading>You are a {getHouse()}</SubHeading>
        <GifWrap>
            <GifImg src={Fireworks} alt="Fireworks" />
        </GifWrap>
    </OverlayContainer>
      );
}

const CurseOverlay = () =>{
    document.getElementById("sorting-overlay").style.display = "block";

    const newblock = ReactDOM.createRoot(document.getElementById('sorting-overlay'));
    newblock.render(
    <OverlayContainer>
        <InformalHeading>AVADA KEDAVRA</InformalHeading>
        <SubHeading>The Killing Curse</SubHeading>
        <GifWrap>
            <GifImg src={KillCurse} alt="The Killing Curse" />
        </GifWrap>
    </OverlayContainer>
      );
}