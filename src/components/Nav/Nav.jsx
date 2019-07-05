import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Nav = () => (
  <nav>
    <img src={logo} alt="logo" />
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
)

export default Nav;