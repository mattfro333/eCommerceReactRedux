"use strict"
import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import Cart from './pages/cart.js';

class Menu extends React.Component{
 render(){
   return(
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React-Bootstrap</a>
        </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
     <NavItem eventKey={1} href="/">About</NavItem>
     <NavItem eventKey={2} href="/">Contact Us</NavItem>
  </Nav>
 <Nav pullRight>
 <NavItem eventKey={3} href="/">Admin</NavItem>
 <NavItem eventKey={4} href="/">Your Cart
 { (this.props.cartItemsNumber > 0)?(<Badge
 className="badge">{this.props.cartItemsNumber
 }</Badge>):('')}
 </NavItem>
 </Nav>
 </Navbar.Collapse>
 </Navbar>
 );
 }
}
export default Menu
