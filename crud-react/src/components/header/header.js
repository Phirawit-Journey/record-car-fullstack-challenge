import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="d-inline-block align-top"
              alt="Car Record Logo"
              src={logo}
              width="30"
              height="30"
            />{" "}
            CAR RECORD
          </Navbar.Brand>
          <Nav className="ms-auto">
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
