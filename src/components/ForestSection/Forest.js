import React from 'react';
import { ForestContainer, ForestBg, ImgBg, Highlight, HighlightBox, ForestContent, ForestHeading, ForestSubtitle } from './ForestElements';
import ForestImg from '../Images/forbidden-forest.jpg';

const Forest = () => {
  return (
    <ForestContainer id='the-forbidden-forest'>
        <Highlight />
        <ForestBg>
            <ImgBg src={ForestImg} alt='The Forbidden Forest' />
        </ForestBg>
        <ForestContent>
            <HighlightBox />
            <ForestHeading>The Forbidden Forest</ForestHeading>
            <ForestSubtitle>The Forbidden Forest is strictly off limits to students!</ForestSubtitle>
        </ForestContent>
    </ForestContainer>
  );
};

export default Forest;