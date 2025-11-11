export type AvailabilityMap = Record<number, string[]>; // key = weekday (0-6)

export interface AppointmentSchedulerProps {
  doctorId?: string; // opcional, para fetch real
  blockedWeekdays?: number[]; // ej. [0] domingo
  blockedDates?: string[]; // fechas ISO exactas: "2025-10-25"
  availability: AvailabilityMap; // horarios por día de la semana
  onSelect: (date: Date, time: string) => void;
  initiallyVisibleMonth?: Date; // para mostrar un mes distinto al actual
  showMonthNav?: boolean; // mostrar navegación de mes
  className?: string; // para composición
  showTime?: boolean;
  selectRange?: boolean;
}
