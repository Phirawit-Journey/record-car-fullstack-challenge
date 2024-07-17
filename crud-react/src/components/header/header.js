import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            CAR RECORD
          </Navbar.Brand>
          <Nav className="m1-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/car" className="nav-link">
              Add Data
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
