import React from 'react';
//Styles imports
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NaviBar = () => {
  const path = window.location.pathname;
  return(
  <Navbar inverse staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-icon-png-5.png" alt="" className="logo"/>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem active={path === "/"}><NavLink to="/" className="nav-link" activeClassName="active">Accueil</NavLink></NavItem>
      <NavItem active={path === "/tasks"}><NavLink to="/tasks" className="nav-link">Tâches</NavLink></NavItem>
      <NavItem><NavLink to="/contacts" className="nav-link">Annuaire</NavLink></NavItem>
      <NavItem><NavLink to="/calendar" className="nav-link">Calendrier</NavLink></NavItem>
    </Nav>
  </Navbar>

)};

export default NaviBar;
