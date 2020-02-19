import { getNewDay, getXDays } from "@/helpers/days";
import { SickDay } from "./interfaces";

export const findUTCDateInSickDays = (sickDays: SickDay[], value: string) =>
  sickDays.find(sickDay => sickDay.date.toUTCString() === value);

const daysConfig = {
  Friday: {
    positionRelativeToCurrent: 1,
    daysToGet: 3
  },
  Monday: {
    positionRelativeToCurrent: 0,
    daysToGet: -3
  }
};

type DaysConfigKey = keyof typeof daysConfig;

/**
 * Returns the weekend and the thirdDay(Monday or Friday)
 * that is related with date passed
 * @return [saturday, sunday, thirdDay]
 */
function getWeekendDays(weekDay: DaysConfigKey, date: Date) {
  const { daysToGet } = daysConfig[weekDay];
  if (daysToGet > 0) return getXDays(daysToGet, date);
  const [sun, sat, thirdDay] = getXDays(daysToGet, date);
  return [sat, sun, thirdDay];
}

const returnSickDays = (sickDays: SickDay[], date?: SickDay) => {
  if (date) {
    const updateDate = sickDays.find(el => el.id === date.id) as SickDay;
    updateDate.history = { ...date, history: undefined };
  }
  return sickDays;
};
export function adjustWeekendsOnAddDate(
  originalSickDays: SickDay[],
  sickDayID: string,
  newDate = false
): SickDay[] {
  const sickDays = [...originalSickDays];
  const index = sickDays.findIndex(day => day.id === sickDayID);
  const date = sickDays[index];

  const handleError = (errorMessage: string) => {
    console.error(errorMessage);
    return returnSickDays(sickDays, date);
  };

  if (!date) return handleError("Failed to find date");

  // If date changed isn't Monday or Friday just return
  if (!["Monday", "Friday"].includes(date.weekDay))
    return returnSickDays(sickDays);

  // Make types happy :)
  const weekDay = date.weekDay as DaysConfigKey;

  const [sat, sun, thirdDay] = getWeekendDays(weekDay, date.date);
  const continueDay = findUTCDateInSickDays(sickDays, thirdDay.toUTCString());

  // Check if next Monday or previous Friday exists
  if (!continueDay) {
    return returnSickDays(sickDays, date);
  }

  // Get config for current date
  const { positionRelativeToCurrent } = daysConfig[weekDay];
  const workHours = (positionRelativeToCurrent === 0 ? date : continueDay)
    .hours;

  // If the date isn't a newly created date
  // and the date hasn't change (compare to the previous time)
  // check if workHours changed, and return data
  if (!newDate && date.date === date.history?.date) {
    if (date.hours !== date.history?.hours) {
      const saturday = findUTCDateInSickDays(sickDays, sat.toUTCString());
      const sunday = findUTCDateInSickDays(sickDays, sun.toUTCString());
      if (!saturday || !sunday) {
        return handleError("Something went wrong during weekend search");
      }
      saturday.hours = workHours;
      sunday.hours = workHours;
    }
    return returnSickDays(sickDays, date);
  }

  // Add new days to the sickDays array
  sickDays.splice(
    index + positionRelativeToCurrent,
    0,
    getNewDay(workHours, sat, true),
    getNewDay(workHours, sun, true)
  );

  return returnSickDays(sickDays, date);
}

export function adjustWeekendsOnDeleteDate(
  originalSickDays: SickDay[],
  sickDayToDeleteID: string
): SickDay[] {
  const sickDays = [...originalSickDays];
  // A list of ids with all the days to delete
  const daysToFilter = [sickDayToDeleteID];

  // The final filter that is done to drop the deleted dates
  const returnStatement = () =>
    sickDays.filter(day => !daysToFilter.includes(day.id));

  const handleError = (errorMessage: string) => {
    console.error(errorMessage);
    return returnStatement();
  };

  const date = sickDays.find(day => day.id === sickDayToDeleteID);
  if (!date) return handleError("Failed to find date for delete");

  // If date changed isn't Monday or Friday just return
  if (!["Monday", "Friday"].includes(date.weekDay)) return returnStatement();

  const [sat, sun, thirdDay] = getWeekendDays(
    date.weekDay as DaysConfigKey,
    date.date
  );

  // If the thirdDay doesn't exist in the days, return
  if (!findUTCDateInSickDays(sickDays, thirdDay.toUTCString())) {
    return returnStatement();
  }

  const saturday = findUTCDateInSickDays(sickDays, sat.toUTCString());
  const sunday = findUTCDateInSickDays(sickDays, sun.toUTCString());
  if (!saturday || !sunday) {
    return handleError("Something went wrong during weekend search");
  }
  daysToFilter.push(saturday.id, sunday.id);
  return returnStatement();
}
