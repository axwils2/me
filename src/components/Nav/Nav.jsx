import React from 'react';

import {
  NavContainer,
  StyledLogoLink,
  StyledNavLink
} from './NavStyles';

const Nav = () => (
  <NavContainer>
    <StyledLogoLink to="/" />
    <div>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </div>
  </NavContainer>
)

export default Nav;