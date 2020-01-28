import { uuidv4 } from "@/helpers/uuid";
import { SickDay, WeekDay } from "@/tools/SickDays/interfaces";

export const weekDays: Array<WeekDay> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export function getWeekDay(date: string | Date): WeekDay {
  return weekDays[new Date(date).getDay()];
}

export function getNewDay(
  hours = 0,
  date = new Date(),
  generated = false
): SickDay {
  const weekDay = getWeekDay(date);
  return {
    id: uuidv4(),
    date,
    hours,
    weekDay,
    generated,
    history: {
      date,
      hours,
      weekDay,
      generated
    }
  };
}

export function getXDays(numberOfDays: number, date: string | Date) {
  const day = new Date(date);
  const backwards = numberOfDays >= 0;
  return Array.from(
    { length: Math.abs(numberOfDays) },
    () => new Date(day.setDate(day.getDate() + (backwards ? 1 : -1)))
  );
}
