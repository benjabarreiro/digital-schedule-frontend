import React, { useState } from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import CardsList from "../CardsList";
import { appointments, historicAppointments } from "@/lib/mock/data";
import EditUserInfoModal from "../Modal/EditUserInfo";

export default function Patient({
  user,
  setShowAppointmentModal,
  setShowModal,
  setModalContent,
}) {
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  return (
    <>
      <h1>
        Perfil de {user.name} {user.surname}
      </h1>
      <Row>
        <h3>
          Datos Personales{" "}
          <Button onClick={() => setShowEditInfoModal(true)}>Editar</Button>
        </h3>
        <Col xs="auto">
          <h5>Nombre:</h5>
          <span>{user.name}</span>
        </Col>
        <Col xs="auto">
          <h5>Apellido:</h5>
          <span>{user.surname}</span>
        </Col>
        <Col xs="auto">
          <h5>Email:</h5>
          <span>{user.email}</span>
        </Col>
        <Col xs="auto">
          <h5>Obra social:</h5>
          <span>{user.healthInsurance}</span>
        </Col>
      </Row>
      <Row>
        <h3>Turnos</h3>
        <Tabs
          defaultActiveKey="upcoming"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="upcoming" title="Proximos">
            <CardsList
              data={appointments}
              primaryBtnAction={() => {
                setShowAppointmentModal(true);
              }}
              dangerBtnAction={() => {
                setShowModal(true);
                setModalContent({
                  title: "Cancelar turno",
                  description: `Vas a cancelar el turno con el doctor`,
                  primaryBtnTxt: "Aceptar",
                  primaryBtnAction: () => setShowModal(false),
                });
              }}
            />
          </Tab>
          <Tab eventKey="historic" title="Históricos">
            <CardsList
              data={historicAppointments}
              primaryBtnAction={() => {
                setShowAppointmentModal(true);
              }}
            />
          </Tab>
        </Tabs>
      </Row>
      <EditUserInfoModal
        show={showEditInfoModal}
        handleClose={() => setShowEditInfoModal(false)}
        primaryBtnAction={() => {
          setShowEditInfoModal(false);
        }}
      />
    </>
  );
}
