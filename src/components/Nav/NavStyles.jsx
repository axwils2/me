import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

const StyledLogoLink = styled(NavLink)`
  background: #fff url(${logo}) no-repeat center center;
  background-size: cover;
  width: 64px;
  height: 64px;
  display: block;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  margin-right: 8px;

  &.active {
    font-weight: bold;
  }
`;

export {
  NavContainer,
  StyledLogoLink,
  StyledNavLink
}