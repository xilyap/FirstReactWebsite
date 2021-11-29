import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container,NavDropdown } from 'react-bootstrap';
import NavItem from '@restart/ui/esm/NavItem';



function Bar(props) {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState(''); 

  function handleButton(event){
    props.OnClickEvent(login,password)
  }
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Бложик рукожопика</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Домой</Nav.Link>
      <Nav.Link href="#author">Об авторе</Nav.Link>
      <NavDropdown title="Авторизация"  id="collasible-nav-dropdown"  >
        <Form.Control size="sm" type="text" placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)}/>
        <Form.Control size="sm" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button onClick={handleButton} variant="dark">Логин</Button>
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
