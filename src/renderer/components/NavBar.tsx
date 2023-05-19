import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar({ title }: { title: string }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="nav-bar">
        <Navbar.Brand>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros " id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className="no_link" to="/product">
                  Produtos
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="no_link" to="/manufacturer">
                  Fabricantes
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="no_link" to="/supplier">
                  Fornecedores
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
