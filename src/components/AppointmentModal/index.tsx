"use client";

import { motion } from "framer-motion";
import "./appointment-modal.css";
import { AppointmentSchedulerProps } from "../AppoinmentScheduler/types";
import AppointmentScheduler from "../AppoinmentScheduler";

export function AppointmentModal({
  open,
  onClose,
  ...props
}: { open: boolean; onClose: () => void } & AppointmentSchedulerProps) {
  if (!open) return null;

  return (
    <div className="appointment-modal-wrapper">
      <div className="appointment-modal-overlay" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="appointment-modal-motion"
      >
        <div className="appointment-modal-container">
          <div className="appointment-modal-header">
            <h3 className="appointment-modal-title">Agendar turno</h3>
            <button
              onClick={onClose}
              className="appointment-modal-close"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>

          <div className="appointment-modal-body">
            <AppointmentScheduler {...props} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
