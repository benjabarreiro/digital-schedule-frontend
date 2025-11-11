"use client";

import React from "react";
import {
  Badge,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useParams } from "next/navigation";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AppointmentScheduler from "@/components/AppoinmentScheduler";

const localizer = momentLocalizer(moment);

function generateAvailability(bookedSlots: { start: Date; end: Date }[]) {
  const startHour = 8;
  const endHour = 18;
  const slots: { title: string; start: Date; end: Date }[] = [];

  const day = new Date(2025, 7, 25); // example day

  for (let hour = startHour; hour < endHour; hour++) {
    for (let min of [0, 30]) {
      const start = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        hour,
        min
      );
      const end = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        hour,
        min + 30
      );

      // Check if this slot is booked
      const isBooked = bookedSlots.some(
        (b) =>
          start.getTime() === b.start.getTime() &&
          end.getTime() === b.end.getTime()
      );

      slots.push({
        title: isBooked ? "Booked" : "Available",
        start,
        end,
      });
    }
  }

  return slots;
}

export default function DoctorDetail() {
  const { id } = useParams();

  // Example doctor data
  const doctor = {
    id,
    name: "Dr. John Doe",
    image: "https://via.placeholder.com/150",
    address: "123 Main St, Buenos Aires",
    description: "Specialist in cardiology with 10 years of experience.",
    insurances: ["OSDE", "Galeno", "Swiss Medical"],
    profession: "Cardiologist",
    services: ["General Consultation", "Stress Test", "ECG"],
  };

  // Example usage
  const bookedSlots = [
    { start: new Date(2025, 7, 25, 8, 30), end: new Date(2025, 7, 25, 9, 0) },
  ];

  const events = generateAvailability(bookedSlots);

  return (
    <Container className="my-4">
      <Row>
        {/* Doctor Profile */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <div className="text-center mb-3">
                <Image
                  src={doctor.image}
                  roundedCircle
                  width={120}
                  height={120}
                />
              </div>
              <Card.Title className="text-center">{doctor.name}</Card.Title>
              <Card.Subtitle className="text-muted text-center mb-3">
                {doctor.profession}
              </Card.Subtitle>
              <Card.Text>{doctor.description}</Card.Text>

              <h6>📍 Address</h6>
              <p>{doctor.address}</p>

              <h6>🏥 Social Insurances</h6>
              <div>
                {doctor.insurances.map((insurance, i) => (
                  <Badge key={i} bg="info" className="me-2">
                    {insurance}
                  </Badge>
                ))}
              </div>

              <h6 className="mt-3">🛠 Services</h6>
              <ListGroup variant="flush">
                {doctor.services.map((service, i) => (
                  <ListGroup.Item key={i}>{service}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Availability Calendar */}
        <Col md={8}>
          <Card>
            <Card.Body>
              {/*  <Card.Title>📅 Availability</Card.Title>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView={Views.WEEK} // show week view
                views={[Views.WEEK, Views.DAY]} // allow switching week/day
                step={30} // 30 min slots
                timeslots={1} // show every step
                min={new Date(1970, 1, 1, 8, 0)} // show from 8:00am
                max={new Date(1970, 1, 1, 18, 0)} // show until 6:00pm
                style={{ height: 600 }}
                eventPropGetter={(event) => {
                  const backgroundColor =
                    event.title === "Available" ? "green" : "grey";
                  return { style: { backgroundColor } };
                }}
                onSelectEvent={(event) => {
                  if (event.title === "Available") {
                    alert(
                      `Book appointment at ${event.start.toLocaleTimeString()}`
                    );
                    // 👉 here you could open a booking modal instead
                  }
                }}
              /> */}
              <AppointmentScheduler
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
                onSelect={(date, time) =>
                  console.log("Seleccionado:", date, time)
                }
                showMonthNav
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
