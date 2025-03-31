import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container fluid className="justify-content-md-center">
        <Navbar.Brand>URL Analyzer</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;