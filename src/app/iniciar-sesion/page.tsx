"use client";
import AuthContext from "@/contexts/Auth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const initialState = { email: "", password: "" };

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState(initialState);

  const router = useRouter();

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = (e: any) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    try {
      await axios.post("http://localhost:3001/users/authenticate", formValues);
      setIsAuthenticated(true);
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setFormValues(initialState);
    }
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
              name="email"
              placeholder="name@example.com"
              value={formValues.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Mail Invalido
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
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
