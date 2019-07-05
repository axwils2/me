import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  width: calc(100% - 32px);
  background-color: #fff;
`

const StyledLogoLink = styled(NavLink)`
  background: #fff url(${logo}) no-repeat center center;
  background-size: cover;
  display: block;
  height: 64px;
  width: 64px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  padding-left: 16px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

export {
  NavContainer,
  StyledLogoLink,
  StyledNavLink
}