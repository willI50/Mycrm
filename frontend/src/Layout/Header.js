
import React from 'react';

import {Navbar , Nav , NavDropdown, NavLink , NavbarBrand,DropdownToggle,NavbarToggler,Collapse,NavItem
,UncontrolledDropdown,DropdownMenu,DropdownItem,Button


} from 'reactstrap'
import logo from '../CRM.png'
function Header(){


    return(
        <div>



<div>
  <Navbar
    color="primary"
    expand="md"
    fixed="top"
    dark
  >
    <NavbarBrand href="/">
    <strong> MyCRM</strong>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink  href="/Dashbord">
            MyTicket
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/MyCommand">
            MyCommand
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <br/><hr/>
      <Button
    color="warning"
    outline
  >
    Sign Out
  </Button>
    </Collapse>
  </Navbar>
</div>



</div>




    )




    
}
export default Header;