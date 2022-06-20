import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SideBarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='hogwarts' onClick={toggle}>Hogwarts</SidebarLink>
            <SidebarLink to='the-sorting-hat' onClick={toggle}>The Sorting Hat</SidebarLink>
            <SidebarLink to='the-deathly-hallows' onClick={toggle}>The Deathly Hallows</SidebarLink>
            <SidebarLink to='the-forbidden-forest' onClick={toggle}>The Forbidden Forest</SidebarLink>
            <SidebarLink to='marauders-map' onClick={toggle}>Marauder's Map</SidebarLink>
            <SidebarLink to='death-eaters' onClick={toggle}>Death Eaters</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
            <SidebarRoute to='/enroll'>Enroll</SidebarRoute>
          </SidebarBtnWrap>
    </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;