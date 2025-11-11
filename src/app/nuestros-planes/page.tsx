"use client";
import CardsList from "@/components/CardsList";
import { plans } from "@/lib/mock/data";
import React from "react";
import { Container } from "react-bootstrap";

export default function SubscriptionPlans() {
  return (
    <Container>
      <h1>Nuestros Planes</h1>
      <h4>Elige el plan que más se ajuste a tu necesidad</h4>
      <CardsList data={plans} openAppointmentModal={() => null} />
    </Container>
  );
}
