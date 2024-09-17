import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-black text-white fixed-top" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            XYZ hotel
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/login" className="nav-link">
                login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
