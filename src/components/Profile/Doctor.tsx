import React, { useState } from "react";
import { Button, Row, Tab, Tabs } from "react-bootstrap";
import CardsList from "../CardsList";
import { historicPatients, patients } from "@/lib/mock/data";
import Link from "next/link";
import CustomizeSchdule from "../Modal/CustomizeSchdule";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Doctor({ user, setShowModal, setModalContent }) {
  const [showCustomizeScheduleModal, setShowCustomizeScheduleModal] =
    useState(false);
  return (
    <>
      <h1 className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>
          Perfil de Dr. {user.name} {user.surname}
        </span>
        <span>
          <Link href={`/manejar-suscripcion/${user.id}`}>
            <Button>Manejar Suscripción</Button>
          </Link>
        </span>
      </h1>

      <Row>
        <h3>
          Turnos de agenda numero 1{" "}
          <Button onClick={() => setShowCustomizeScheduleModal(true)}>
            Personalizar
          </Button>
          <Button
            onClick={() => {
              setShowModal(true);
              setModalContent({
                title: "Fuera de oficina",
                description:
                  "Configurá los día en que no vas a estar atendiendo ya sea por vacaciones, licencia u otro motivo.",
                primaryBtnTxt: "Confirmar",
                primaryBtnAction: () => setShowModal(false),
                fromDate: <DatePicker disablePast />,
                toDate: <DatePicker disablePast />,
              });
            }}
          >
            Fuera de oficina
          </Button>
          <Button
            onClick={() => {
              setShowModal(true);
              setModalContent({
                title: "Suspender agenda",
                description:
                  "Está acción va a suspender tu agenda y no se podrán tomar nuevos turnos. Cancelará todos los proximos turnos, pero no borrará la informacion de la agenda y el historial de turnos. Puedes volver a habilitarla cuando quieras",
                primaryBtnTxt: "Confirmar",
                primaryBtnAction: () => setShowModal(false),
                fromDate: <DatePicker disablePast />,
                toDate: <DatePicker disablePast />,
              });
            }}
          >
            Suspender
          </Button>
          <Button
            onClick={() => {
              setShowModal(true);
              setModalContent({
                title: "Eliminar agenda",
                description:
                  "Está acción va a eliminar tu agenda y no se podrán tomar nuevos turnos. Cancelará todos los proximos turnos, borrará la informacion de la agenda y el historial de turnos. No se puede revertir",
                primaryBtnTxt: "Confirmar",
                primaryBtnAction: () => setShowModal(false),
              });
            }}
          >
            Eliminar
          </Button>
        </h3>
        <Tabs
          defaultActiveKey="upcoming"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="upcoming" title="Proximos">
            <CardsList
              data={patients}
              dangerBtnAction={() => {
                setShowModal(true);
                setModalContent({
                  title: "Cancelar turno",
                  description: `Vas a cancelar el turno con el paciente`,
                  primaryBtnTxt: "Aceptar",
                  primaryBtnAction: () => setShowModal(false),
                });
              }}
            />
          </Tab>
          <Tab eventKey="historic" title="Históricos">
            <CardsList data={historicPatients} />
          </Tab>
        </Tabs>
      </Row>
      <Row>
        <h3>
          Turnos de agenda numero 2{" "}
          <Button onClick={() => setShowCustomizeScheduleModal(true)}>
            Personalizar
          </Button>
          <Button
            onClick={() => {
              setShowModal(true);
              setModalContent({
                title: "Suspender agenda",
                description:
                  "Está acción va a suspender tu agenda y no se podrán tomar nuevos turnos. Cancelará todos los proximos turnos, pero no borrará la informacion de la agenda y el historial de turnos. Puedes volver a habilitarla cuando quieras",
                primaryBtnTxt: "Confirmar",
                primaryBtnAction: () => setShowModal(false),
              });
            }}
          >
            Suspender
          </Button>
          <Button
            onClick={() => {
              setShowModal(true);
              setModalContent({
                title: "Eliminar agenda",
                description:
                  "Está acción va a eliminar tu agenda y no se podrán tomar nuevos turnos. Cancelará todos los proximos turnos, borrará la informacion de la agenda y el historial de turnos. No se puede revertir",
                primaryBtnTxt: "Confirmar",
                primaryBtnAction: () => setShowModal(false),
              });
            }}
          >
            Eliminar
          </Button>
        </h3>
        <Tabs
          defaultActiveKey="upcoming"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="upcoming" title="Proximos">
            <CardsList
              data={patients}
              dangerBtnAction={() => {
                setShowModal(true);
                setModalContent({
                  title: "Cancelar turno",
                  description: `Vas a cancelar el turno con el paciente`,
                  primaryBtnTxt: "Aceptar",
                  primaryBtnAction: () => setShowModal(false),
                });
              }}
            />
          </Tab>
          <Tab eventKey="historic" title="Históricos">
            <CardsList data={historicPatients} />
          </Tab>
        </Tabs>
      </Row>
      <CustomizeSchdule
        show={showCustomizeScheduleModal}
        handleClose={() => setShowCustomizeScheduleModal(false)}
        primaryBtnAction={() => {
          setShowCustomizeScheduleModal(false);
        }}
      />
      {/* <ActionModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        {...modalContent}
      /> */}
    </>
  );
}
