"use client";
import { healthInsurances } from "@/lib/mock/data";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal, Tab, Tabs } from "react-bootstrap";

export default function EditUserInfoModal({
  show,
  handleClose,
  primaryBtnAction,
}) {
  const [validated, setValidated] = useState(false);
  const [selectedHealthInsurances, setSelectedHealhInsurances] = useState<
    string[]
  >([]);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleHealthInsurancesChange = (value: string) => {
    setSelectedHealhInsurances((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar información</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Tabs
            defaultActiveKey="information"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="information" title="Información">
              <Form.Group>
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control required type="email" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">
                    Email Invalido
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPhone"
                  label="Teléfono"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Teléfono" />
                  <Form.Control.Feedback type="invalid">
                    Teléfono Invalido
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <strong>Obras sociales</strong>
                </Form.Label>
                {healthInsurances.map((healthInsurance) => (
                  <Form.Check
                    key={healthInsurance.value}
                    type="checkbox"
                    id={`health-insurance-${healthInsurance.value}`}
                    label={healthInsurance.label}
                    checked={selectedHealthInsurances.includes(
                      healthInsurance.value
                    )}
                    onChange={() =>
                      handleHealthInsurancesChange(healthInsurance.value)
                    }
                  />
                ))}
              </Form.Group>
            </Tab>
            <Tab eventKey="address" title="Direccion">
              <Form.Group>
                <FloatingLabel
                  controlId="floatingStreetName"
                  label="Calle"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Calle" />
                  <Form.Control.Feedback type="invalid">
                    Debes completar este campo
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingStreetNumber"
                  label="Numero"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Numero" />
                  <Form.Control.Feedback type="invalid">
                    Debes completar este campo
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingAppartmentNumber"
                  label="Piso y numero de dpto"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Piso y numero de dpto"
                  />
                  <Form.Control.Feedback type="invalid">
                    Debes completar este campo
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingCity"
                  label="Ciudad"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Ciudad" />
                  <Form.Control.Feedback type="invalid">
                    Debes completar este campo
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingZipCode"
                  label="Codigo postal"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Codigo postal"
                  />
                  <Form.Control.Feedback type="invalid">
                    Debes completar este campo
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingProvince"
                  label="Provincia"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Provincia" />
                  <Form.Control.Feedback type="invalid">
                    Debes completar este campo
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Tab>
          </Tabs>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>

        <Button onClick={primaryBtnAction} variant="primary">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
