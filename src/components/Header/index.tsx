"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { user } from "../../lib/mock/data";
import { useState } from "react";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <header className="mb-5">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} href="/">
            Turnos Medicos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <Nav.Link as={Link} eventKey={2} href="/nuestros-planes">
                    Nuestros planes
                  </Nav.Link>
                  <NavDropdown
                    title={`Hola ${user.name}`}
                    id="collapsible-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} href={`/perfil/${user.id}`}>
                      Ir al perfil
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      onClick={() => setIsAuthenticated(false)}
                      href="/"
                    >
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} eventKey={2} href="/nuestros-planes">
                    Nuestros planes
                  </Nav.Link>
                  <Nav.Link as={Link} href="/iniciar-sesion">
                    Iniciar sesión
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
