"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Mail Invalido
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control required type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Contraseña invalida
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="floatingName"
            label="Nombre"
            className="mb-3"
          >
            <Form.Control required type="text" placeholder="Nombre" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSurname"
            label="Apellido"
            className="mb-3"
          >
            <Form.Control required type="text" placeholder="Apellido" />
          </FloatingLabel>
          <Form.Select aria-label="Default select example">
            <option>Seleccioná tu obra social</option>
            <option value="osde">Osde</option>
            <option value="swiss medical">Swiss Medical</option>
            <option value="galeno">Galeno</option>
          </Form.Select>
        </Form.Group>
        <Row className="justify-content-between">
          <Col xs="auto">
            <span>
              Ya tienes una cuenta,{" "}
              <Link href="/iniciar-sesion">inicia sesión</Link>
            </span>
          </Col>
          <Col xs="auto">
            <Button type="submit">Registrate</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
