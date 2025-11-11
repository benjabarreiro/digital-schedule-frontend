import { format, getDay, parseISO } from "date-fns";

export function isDateBlocked(
  day: Date,
  blockedWeekdays: number[],
  blockedDates: string[]
) {
  if (blockedWeekdays.includes(getDay(day))) return true;
  const iso = format(day, "yyyy-MM-dd");
  if (blockedDates.includes(iso)) return true;
  return false;
}

export function isoToDateOrNull(iso?: string) {
  try {
    if (!iso) return null;
    return parseISO(iso);
  } catch {
    return null;
  }
}
