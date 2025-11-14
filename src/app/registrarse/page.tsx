"use client";
import AuthContext from "@/contexts/Auth";
import { healthInsurances } from "@/lib/mock/data";
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

interface IFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  healthInsurances: number[];
}

const initialState: IFormValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  healthInsurances: [],
};

export default function Register() {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>(initialState);

  const router = useRouter();

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = (e: any) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHealthInusrances = (value: string) => {
    const id = Number(value);
    let healthInsurances = formValues.healthInsurances;
    if (healthInsurances.includes(id)) {
      healthInsurances = healthInsurances.filter((hi) => hi !== id);
    } else {
      healthInsurances.push(id);
    }
    setFormValues((prev) => ({ ...prev, healthInsurances }));
  };

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    try {
      await axios.post("http://localhost:3001/users", formValues);

      setIsAuthenticated(true);
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setFormValues(initialState);
    }
  };

  console.log(formValues);
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
              onChange={handleChange}
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
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
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
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Nombre"
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSurname"
            label="Apellido"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Apellido"
              onChange={handleChange}
            />
          </FloatingLabel>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => handleHealthInusrances(e.target.value)}
          >
            <option>Seleccioná tu obra social</option>
            <option value="1">Osde</option>
            <option value="2">Swiss Medical</option>
            <option value="3">Galeno</option>
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
