import React from 'react';
import { MapContainer, MapBg, ImgBg, MapContent, MapHeading, BtnWrap, ImgBg2 } from './MapElements';
import Map1 from '../Images/marauders-map-bg.jpg';
import Map2 from '../Images/marauders-map-img.gif';
import { Buttonclick } from '../ButtonElements';

const MapSection = () => {
  return (
    <MapContainer id='marauders-map'>
        <MapBg>
            <ImgBg src={Map1} alt="Marauder's Map" />  
        </MapBg>
        <MapContent id='hide-it'>
            <MapHeading>Marauder's Map</MapHeading>
            <ImgBg2 src={Map2} alt="Marauder's Map" />
            <BtnWrap>
              <Buttonclick onClick={FadeMap}>Mischief Managed</Buttonclick>
            </BtnWrap>
        </MapContent>
    </MapContainer>
    
  );
};

export default MapSection;

const FadeMap = () =>{
  document.getElementById("hide-it").style.transitionDelay = '0.2s';
  document.getElementById("hide-it").style.visibility = 'hidden';
}