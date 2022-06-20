import React from "react";
import {FaBars} from 'react-icons/fa';
import WizImage from '../Images/wizarding-world.png';
import { Nav, NavContainer, NavLogo, WizLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavBarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/' onClick={toggleHome}><WizLogo src={WizImage} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                <NavLinks to='hogwarts' smooth={true} duration={500} spy={true} exact='true'>Hogwarts</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='the-sorting-hat' smooth={true} duration={500} spy={true} exact='true'>The Sorting Hat</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='the-deathly-hallows' smooth={true} duration={500} spy={true} exact='true'>The Deathly Hallows</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='the-forbidden-forest' smooth={true} duration={500} spy={true} exact='true'>The Forbidden Forest</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='marauders-map' smooth={true} duration={500} spy={true} exact='true'>Marauder's Map</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='death-eaters' smooth={true} duration={500} spy={true} exact='true'>Death Eaters</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/enroll'>Enroll</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;