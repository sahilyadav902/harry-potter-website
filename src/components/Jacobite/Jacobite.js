import React,{useState} from 'react';
import JacobiteVideo from '../Videos/hogwarts-express.mp4';
import HarryPotterImage from '../Images/harry-potter.png';
import { JacobiteContainer, JacobiteBg, Highlight, HighlightBox, VideoBg, JacobiteContent, JacobiteImg, JacobiteP, JacobiteBtnWrapper, ArrowForward, ArrowRight } from './JacobiteElements';
import { Buttonscroll } from '../ButtonElements';

const JacobiteSection = () => {
  const [hover, setHover]=useState(false);

  const onHover = () => {
    setHover(!hover);
  }
  return (
    
    <JacobiteContainer>
      <JacobiteBg>
        <VideoBg autoPlay loop muted src={JacobiteVideo} type='video/mp4' />
      </JacobiteBg>
      <Highlight />
      <JacobiteContent>
      <HighlightBox />
        <JacobiteImg src={HarryPotterImage} />
        <JacobiteP>
          A DIVE INTO THE MAGICAL WORLD OF WIZARDS
        </JacobiteP>
        <JacobiteBtnWrapper>
          <Buttonscroll to='hogwarts' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"
          smooth={true} duration={500} spy={true} exact='true'>
            Begin {hover ? <ArrowForward /> : <ArrowRight />}
          </Buttonscroll>
        </JacobiteBtnWrapper>
      </JacobiteContent>
    </JacobiteContainer>
  );
};

export default JacobiteSection;