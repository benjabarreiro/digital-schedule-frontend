import React from "react";
import { Badge, Button, Container } from "react-bootstrap";

export default function ManageSuscription() {
  return (
    <Container>
      <h1 className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>Tu suscripcion</span>{" "}
        <span>
          Estado: <Badge bg="success">Activa</Badge>
        </span>
      </h1>
      <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <Button variant="danger">Cancelar</Button>
        <Button>Modificar</Button>
      </div>
    </Container>
  );
}
