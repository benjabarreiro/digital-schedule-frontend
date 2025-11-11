"use client";
import { isDateBlocked } from "@/lib/utils/calendar";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  startOfMonth,
} from "date-fns";
import WeekDays from "./WeekDays";

interface CalendarGridProps {
  days: Date[];
  blockedDays: number[];
  selectedDate: Date | null;
  onDayClick: (day: Date) => void;
}

export default function CalendarGrid({
  monthDate,
  selected,
  onSelectDay,
  blockedWeekdays,
  blockedDates,
}: {
  monthDate: Date;
  selected: Date | null;
  onSelectDay: (d: Date) => void;
  blockedWeekdays: number[];
  blockedDates: string[];
}) {
  const start = startOfMonth(monthDate);
  const end = endOfMonth(monthDate);
  const allDays = eachDayOfInterval({ start, end });

  // calcular offset inicial para que el primer día caiga en su columna (grid)
  const firstWeekday = getDay(start); // 0..6
  const blanks = Array.from({ length: firstWeekday }).map((_, i) => (
    <div key={`b-${i}`} />
  ));

  return (
    <div>
      <WeekDays />
      <div className="grid grid-cols-7 gap-2 mt-2">
        {blanks}
        {allDays.map((day) => {
          const disabled = isDateBlocked(day, blockedWeekdays, blockedDates);
          const isSelected = selected ? isSameDay(day, selected) : false;

          return (
            <button
              key={day.toISOString()}
              onClick={() => !disabled && onSelectDay(day)}
              disabled={disabled}
              aria-pressed={isSelected}
              className={`p-2 rounded-lg aspect-square flex items-center justify-center select-none transition-shadow focus:outline-none
                ${
                  disabled
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "hover:shadow-md"
                }
                ${isSelected ? "bg-blue-600 text-white" : "bg-white"}
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
