import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-dark" variant='dark' >
      <Container>
        <Navbar.Brand href="#home">
          <Image src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="Netflix logo" style={{ width: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Tv</Nav.Link>
            <NavDropdown title="Generi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action Movie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drama Movie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Commedy Movie</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Piriririri</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            
            <Nav.Link href="#search"><AiOutlineSearch /></Nav.Link>
            <Nav.Link href="#notifications"><IoIosNotificationsOutline /></Nav.Link>
            <Nav.Link href="#profile"><FaUserCircle /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;