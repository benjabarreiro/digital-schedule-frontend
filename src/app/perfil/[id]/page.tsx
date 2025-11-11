"use client";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AppointmentModal } from "@/components/AppointmentModal";
import ActionModal from "@/components/Modal";
import Doctor from "@/components/Profile/Doctor";
import Patient from "@/components/Profile/Patient";
import { user } from "@/lib/mock/data";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function UserProfile() {
  const [showModal, setShowModal] = useState(false);
  const [showApoinmentModal, setShowAppointmentModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    primaryBtnTxt: "",
    primaryBtnAction: () => {},
    fromDate: null,
    toDate: null,
  });
  //const [showPatientInfoModal, setShowPatientInfoModal] = useState(false);

  const isDoctor = false;
  return (
    <>
      <Container>
        {isDoctor ? (
          <Doctor
            user={user}
            setShowModal={setShowModal}
            setModalContent={setModalContent}
          />
        ) : (
          <Patient
            user={user}
            setShowAppointmentModal={setShowAppointmentModal}
            setShowModal={setShowModal}
            setModalContent={setModalContent}
          />
        )}
      </Container>
      {isDoctor ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ActionModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            {...modalContent}
          />
        </LocalizationProvider>
      ) : (
        <ActionModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          {...modalContent}
        />
      )}
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
