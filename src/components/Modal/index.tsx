"use client";
import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ActionModal({
  show,
  handleClose,
  title,
  description,
  primaryBtnAction,
  primaryBtnTxt,
  children,
  fromDate,
  toDate,
}: {
  show: any;
  handleClose: any;
  title: any;
  description: any;
  primaryBtnAction: any;
  primaryBtnTxt: any;
  children?: any;
  fromDate?: any;
  toDate?: any;
}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      {fromDate && <Modal.Body>Desde{fromDate}</Modal.Body>}
      {toDate && <Modal.Body>Hasta{toDate}</Modal.Body>}
      {/* {children && <Modal.Body>{children}</Modal.Body>} */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        {primaryBtnAction && primaryBtnTxt && (
          <Button onClick={primaryBtnAction} variant="primary">
            {primaryBtnTxt}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
