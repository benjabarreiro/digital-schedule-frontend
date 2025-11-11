import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="d-flex">
            <h5>
              <Link className="text-decoration-none text-light" href="/">
                Turnos Médicos
              </Link>
            </h5>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-light" href="/registrarse">
                  Registrarse
                </Link>
              </li>
              <li>
                <Link href="/nuestros-planes" className="text-light">
                  Nuestros planes
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>
              © {new Date().getFullYear()} Turnos Médicos. Todos los derechos
              reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
