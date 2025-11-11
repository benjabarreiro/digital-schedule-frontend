"use client";
import { healthInsurances } from "@/lib/mock/data";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal, Tab, Tabs } from "react-bootstrap";

export default function CustomizeSchdule({
  show,
  handleClose,
  primaryBtnAction,
}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedHealthInsurances, setSelectedHealhInsurances] = useState<
    string[]
  >([]);
  const [customWorkingHours, setCustomWorkingHours] = useState(false);

  const days = [
    { label: "Lunes", value: "1" },
    { label: "Martes", value: "2" },
    { label: "Miércoles", value: "3" },
    { label: "Jueves", value: "4" },
    { label: "Viernes", value: "5" },
    { label: "Sábado", value: "6" },
    { label: "Domingo", value: "0" },
  ];

  const handleDaysChange = (value: string) => {
    setSelectedDays((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
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
        <Modal.Title>Editar agenda</Modal.Title>
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
                  controlId="floatingInput"
                  label="Nombre de la agenda"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Agenda" />
                  <Form.Control.Feedback type="invalid">
                    Nombre de Agenda Invalido
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingName"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control required type="email" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">
                    Email Invalido
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSurname"
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
            <Tab eventKey={"appointments"} title="Horarios y días">
              <Form.Group>
                <Form.Label>
                  <strong>Días de atención</strong>
                </Form.Label>
                {days.map((day) => (
                  <Form.Check
                    key={day.value}
                    type="checkbox"
                    id={`day-${day.value}`}
                    label={day.label}
                    checked={selectedDays.includes(day.value)}
                    onChange={() => handleDaysChange(day.value)}
                  />
                ))}
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label={
                    "¿Desea que el horario de atención sea distinto en cada día?"
                  }
                  onChange={() => setCustomWorkingHours((prev) => !prev)}
                />

                {!customWorkingHours ? (
                  <>
                    <Form.Select aria-label="Default select example">
                      <option>Seleccioná la duración de los turnos</option>
                      <option value="15">15 minutos</option>
                      <option value="20">20 minutos</option>
                      <option value="30">30 minutos</option>
                      <option value="40">40 minutos</option>
                      <option value="45">45 minutos</option>
                      <option value="60">1 hora</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                      <option>
                        Seleccioná el horario de inicio de atención
                      </option>
                      <option value="07:00">7am</option>
                      <option value="08:00">8am</option>
                      <option value="09:00">9am</option>
                      <option value="10:00">10am</option>
                      <option value="11:00">11am</option>
                      <option value="12:00">12pm</option>
                      <option value="13:00">1pm</option>
                      <option value="14:00">2pm</option>
                      <option value="15:00">3pm</option>
                      <option value="16:00">4pm</option>
                      <option value="17:00">5pm</option>
                      <option value="18:00">6pm</option>
                      <option value="19:00">7pm</option>
                      <option value="20:00">8pm</option>
                      <option value="21:00">9pm</option>
                      <option value="22:00">10pm</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                      <option>Seleccioná el horario de fin de atención</option>
                      <option value="07:00">7am</option>
                      <option value="08:00">8am</option>
                      <option value="09:00">9am</option>
                      <option value="10:00">10am</option>
                      <option value="11:00">11am</option>
                      <option value="12:00">12pm</option>
                      <option value="13:00">1pm</option>
                      <option value="14:00">2pm</option>
                      <option value="15:00">3pm</option>
                      <option value="16:00">4pm</option>
                      <option value="17:00">5pm</option>
                      <option value="18:00">6pm</option>
                      <option value="19:00">7pm</option>
                      <option value="20:00">8pm</option>
                      <option value="21:00">9pm</option>
                      <option value="22:00">10pm</option>
                    </Form.Select>
                  </>
                ) : (
                  <>
                    {selectedDays.map((day) => (
                      <div key={day}>
                        {day}
                        <Form.Select aria-label="Default select example">
                          <option>Seleccioná la duración de los turnos</option>
                          <option value="15">15 minutos</option>
                          <option value="20">20 minutos</option>
                          <option value="30">30 minutos</option>
                          <option value="40">40 minutos</option>
                          <option value="45">45 minutos</option>
                          <option value="60">1 hora</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example">
                          <option>
                            Seleccioná el horario de inicio de atención
                          </option>
                          <option value="07:00">7am</option>
                          <option value="08:00">8am</option>
                          <option value="09:00">9am</option>
                          <option value="10:00">10am</option>
                          <option value="11:00">11am</option>
                          <option value="12:00">12pm</option>
                          <option value="13:00">1pm</option>
                          <option value="14:00">2pm</option>
                          <option value="15:00">3pm</option>
                          <option value="16:00">4pm</option>
                          <option value="17:00">5pm</option>
                          <option value="18:00">6pm</option>
                          <option value="19:00">7pm</option>
                          <option value="20:00">8pm</option>
                          <option value="21:00">9pm</option>
                          <option value="22:00">10pm</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example">
                          <option>
                            Seleccioná el horario de fin de atención
                          </option>
                          <option value="07:00">7am</option>
                          <option value="08:00">8am</option>
                          <option value="09:00">9am</option>
                          <option value="10:00">10am</option>
                          <option value="11:00">11am</option>
                          <option value="12:00">12pm</option>
                          <option value="13:00">1pm</option>
                          <option value="14:00">2pm</option>
                          <option value="15:00">3pm</option>
                          <option value="16:00">4pm</option>
                          <option value="17:00">5pm</option>
                          <option value="18:00">6pm</option>
                          <option value="19:00">7pm</option>
                          <option value="20:00">8pm</option>
                          <option value="21:00">9pm</option>
                          <option value="22:00">10pm</option>
                        </Form.Select>
                      </div>
                    ))}
                  </>
                )}
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
