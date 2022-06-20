import React from 'react';
import Icon1 from '../Images/resurrection-stone.png';
import Icon2 from '../Images/cloak-of-invisibility.jpeg';
import Icon3 from '../Images/elder-wand.png';
import { HallowsContainer, HallowsH1, HallowsWrapper, HallowsCard, HallowsIcon, HallowsH2, HallowsP } from './HallowsElements';

const Hallows = () => {
  return (
    <HallowsContainer id="the-deathly-hallows">
        <HallowsH1>The Deathly Hallows</HallowsH1>
        <HallowsWrapper>
            <HallowsCard>
                <HallowsIcon src={Icon1} />
                <HallowsH2>Resurrection Stone</HallowsH2>
                <HallowsP>A stone that has the power to recall loved ones from death</HallowsP>
            </HallowsCard>
            <HallowsCard>
                <HallowsIcon src={Icon2} />
                <HallowsH2>Cloak of Invisibility</HallowsH2>
                <HallowsP>A magical artifact that renders the wearer invisible</HallowsP>
            </HallowsCard>
            <HallowsCard>
                <HallowsIcon src={Icon3} />
                <HallowsH2>Elder Wand</HallowsH2>
                <HallowsP>The most powerful wand to ever exist in the world</HallowsP>
            </HallowsCard>
        </HallowsWrapper>
    </HallowsContainer>
  );
};

export default Hallows;