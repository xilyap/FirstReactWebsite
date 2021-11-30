import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container,NavDropdown } from 'react-bootstrap';
import NavItem from '@restart/ui/esm/NavItem';



function NavBarLogged(props) {
	function handleButton(event){
		props.OnClickEvent()
	}
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Мой Бложик</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title={props.username}  id="collasible-nav-dropdown"  >
	  <Button onClick={handleButton} variant="dark">Выйти</Button>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </Container>
</Navbar>

  );
}


export default NavBarLogged;
