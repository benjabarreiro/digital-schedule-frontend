import { useMemo, useState } from "react";
import CalendarGrid from "./CalendarGrid";
import { format, getDay, subMonths, addMonths } from "date-fns";
import { AppointmentSchedulerProps } from "./types";
import CalendarHeader from "./CalendarHeader";
import TimeSlotsList from "./TimeSlots";
import { motion } from "framer-motion";

export default function AppointmentScheduler({
  doctorId,
  blockedWeekdays = [],
  blockedDates = [],
  availability,
  onSelect,
  initiallyVisibleMonth,
  showMonthNav = true,
  className = "",
}: AppointmentSchedulerProps) {
  // mes visible
  const [monthDate, setMonthDate] = useState<Date>(
    initiallyVisibleMonth || new Date()
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // blockedDates pueden venir como strings; normalizarlos
  const normalizedBlockedDates = useMemo(
    () => blockedDates.map((d) => d),
    [blockedDates]
  );

  // obtener horarios según weekday
  const timesForSelected = useMemo(() => {
    if (!selectedDate) return [] as string[];
    const wd = getDay(selectedDate);
    return availability[wd] ?? [];
  }, [selectedDate, availability]);

  // handlers
  const handlePrev = () => setMonthDate((prev) => subMonths(prev, 1));
  const handleNext = () => setMonthDate((prev) => addMonths(prev, 1));
  const handleSelectDay = (d: Date) => setSelectedDate(d);
  const handleChooseTime = (time: string) => {
    if (!selectedDate) return;
    onSelect(selectedDate, time);
  };

  // Optional: si querés, podés fetch horarios reales por doctorId aquí
  // useEffect(() => { fetch(`/api/doctors/${doctorId}/availability?month=${...}`) ... }, [doctorId, monthDate])

  return (
    <div
      className={`bg-white rounded-2xl shadow p-4 w-full max-w-xl ${className}`}
    >
      <div className="flex flex-col gap-4">
        {showMonthNav && (
          <CalendarHeader
            monthDate={monthDate}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}

        <CalendarGrid
          monthDate={monthDate}
          selected={selectedDate}
          onSelectDay={handleSelectDay}
          blockedWeekdays={blockedWeekdays}
          blockedDates={normalizedBlockedDates}
        />

        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="mt-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Horarios para</div>
                <div className="font-medium">
                  {format(selectedDate, "eeee, dd MMMM yyyy")}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <TimeSlotsList
                date={selectedDate}
                times={timesForSelected}
                onChoose={handleChooseTime}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
