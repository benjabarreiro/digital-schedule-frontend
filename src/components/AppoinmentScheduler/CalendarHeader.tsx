"use client";

import { format } from "date-fns";

export default function CalendarHeader({
  monthDate,
  onPrev,
  onNext,
}: {
  monthDate: Date;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrev}
        aria-label="Mes anterior"
        className="p-2 rounded-md hover:bg-gray-100"
      >
        ←
      </button>
      <div className="text-lg font-semibold">
        {format(monthDate, "MMMM yyyy")}
      </div>
      <button
        onClick={onNext}
        aria-label="Mes siguiente"
        className="p-2 rounded-md hover:bg-gray-100"
      >
        →
      </button>
    </div>
  );
}
