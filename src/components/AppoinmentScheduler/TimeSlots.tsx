"use client";
import { format } from "date-fns";

interface TimeSlotsProps {
  date: Date;
  times: string[];
  onSelectTime: (date: Date, time: string) => void;
}

export default function TimeSlotsList({
  date,
  times,
  onChoose,
}: {
  date: Date;
  times: string[];
  onChoose: (time: string) => void;
}) {
  if (!times || times.length === 0) {
    return (
      <div className="py-4">
        <p className="text-sm text-gray-500 text-center">
          No hay horarios disponibles para {format(date, "dd/MM/yyyy")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {times.map((t) => (
        <button
          key={t}
          onClick={() => onChoose(t)}
          className="py-2 px-3 rounded-lg border hover:bg-gray-50 transition"
        >
          {t}
        </button>
      ))}
    </div>
  );
}
