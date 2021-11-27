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
      <Nav.Link href="#home">Домой</Nav.Link>
      <Nav.Link href="#author">Об авторе</Nav.Link>
      <NavDropdown title="Авторизация"  id="collasible-nav-dropdown"  >
        <Form.Control size="sm" type="text" placeholder="Логин"  />
        <Form.Control size="sm" type="password" placeholder="Пароль" />
        <Button >Логин</Button>
        <Button >Регистрация</Button>
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
