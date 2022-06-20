import React, {useState} from 'react';
import Sidebar from '../Sidebar/SideBar';
import Navbar from '../Navigation/NavBar';
import JacobiteSection from '../Jacobite/Jacobite';
import InfoSection from '../InfoSection/Info';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import Hallows from '../HallowsSection/Hallows';
import Forest from '../ForestSection/Forest';
import MapSection from '../MapSection/Map';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <JacobiteSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Hallows />
        <Forest />
        <MapSection />
        <InfoSection {...homeObjThree} />
        <Subscribe />
    </>
  );
};

export default Home;