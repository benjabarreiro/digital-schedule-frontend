"use client";
export default function WeekDays() {
  const daysShort = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  return (
    <div className="grid grid-cols-7 text-center text-sm text-gray-500">
      {daysShort.map((d) => (
        <div key={d} className="py-2">
          {d}
        </div>
      ))}
    </div>
  );
}
