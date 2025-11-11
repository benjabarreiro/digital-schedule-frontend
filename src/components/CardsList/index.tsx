import React from "react";
import CardBootstrap from "../Card";
import { Col, Row } from "react-bootstrap";

export default function CardsList({
  data,
  primaryBtnAction = () => {},
  dangerBtnAction = () => {},
}) {
  return (
    <Row className="mx-2">
      {data.map((card, idx: number) => (
        <Col
          key={idx}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          className="mb-4 d-flex justify-content-center"
        >
          <CardBootstrap
            key={idx}
            {...card}
            primaryBtnAction={primaryBtnAction}
            dangerBtnAction={dangerBtnAction}
          />
        </Col>
      ))}
    </Row>
  );
}
