import { getNewDay, getXDays } from "@/helpers/days";
import { SickDay } from "./interfaces";

export function adjustWeekends(
  originalSickDays: SickDay[],
  sickDayID: string,
  workHours: number,
  newDate = false
) {
  const sickDays = [...originalSickDays];
  const index = sickDays.findIndex(day => day.id === sickDayID);
  const nextIndex = index + 1;
  const previousIndex = index - 1;
  const date = sickDays[index] || {};
  if (!newDate && date.date === date.history?.date) {
    date.history = { ...date, history: undefined };
    return sickDays;
  }
  switch (date.weekDay) {
    case "Friday":
      if (
        index === sickDays.length - 1 ||
        sickDays[nextIndex].weekDay !== "Monday"
      ) {
        break;
      }
      // eslint-disable-next-line no-case-declarations
      const [sat, sun, mon] = getXDays(3, date.date);
      if (sickDays[nextIndex].date.toUTCString() !== mon.toUTCString()) {
        break;
      }
      sickDays.splice(
        nextIndex,
        0,
        getNewDay(workHours, sat, true),
        getNewDay(workHours, sun, true)
      );
      break;

    case "Monday":
      if (previousIndex < 0 || sickDays[previousIndex].weekDay !== "Friday") {
        break;
      }
      // eslint-disable-next-line no-case-declarations
      const [sunday, saturday, fri] = getXDays(-3, date.date);
      if (sickDays[previousIndex].date.toUTCString() !== fri.toUTCString()) {
        break;
      }
      sickDays.splice(
        index,
        0,
        getNewDay(workHours, saturday, true),
        getNewDay(workHours, sunday, true)
      );
      break;
  }

  const updateDate = sickDays.find(el => el.id === date.id) as SickDay;
  updateDate.history = { ...date, history: undefined };
  return sickDays;
}
