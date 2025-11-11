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

export default function Login() {
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
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control required type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Contraseña invalida
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Row className="justify-content-between mt-3">
          <Col xs="auto">
            <span>
              No tienes una cuenta, <Link href="/registrarse">registrate</Link>
            </span>
          </Col>
          <Col xs="auto">
            <Button type="submit">Iniciar Sesión</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
