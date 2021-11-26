import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container,NavDropdown } from 'react-bootstrap';
import NavItem from '@restart/ui/esm/NavItem';
function Bar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Бложик рукожопика</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown" >
        <Form.Control size="sm" type="text" placeholder="Login" />
        <Form.Control size="sm" type="text" placeholder="Password" />
        <Button >Login</Button>
        <Button >Register</Button>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
  </Container>
</Navbar>

  );
}

export default Bar;
