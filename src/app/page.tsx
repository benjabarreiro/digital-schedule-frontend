"use client";
import CardsList from "@/components/CardsList";
import { Container } from "react-bootstrap";
import { data } from "../lib/mock/data";
import { AppointmentModal } from "@/components/AppointmentModal";
import { useState } from "react";

export default function Home() {
  const [showApoinmentModal, setShowAppointmentModal] = useState(false);
  return (
    <>
      <Container fluid>
        <CardsList
          data={data}
          primaryBtnAction={() => setShowAppointmentModal(true)}
        />
      </Container>
      <AppointmentModal
        doctorId="abc123"
        blockedWeekdays={[0, 6]} // 0 = Sunday
        availability={{
          // Ejemplo simple: horarios por día de la semana
          1: ["09:00", "10:00", "11:00"], // lunes
          2: ["09:00", "10:00", "11:00"],
          3: ["09:00", "10:00", "11:00", "15:00"],
          4: ["09:00", "10:00", "11:00", "15:00"],
          5: ["09:00", "10:00"],
        }}
        onSelect={(date, time) => console.log("Seleccionado:", date, time)}
        showMonthNav
        open={showApoinmentModal}
        onClose={() => setShowAppointmentModal(false)}
      />
    </>
  );
}
