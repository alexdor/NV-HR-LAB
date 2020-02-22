import { getNewDay } from "@/helpers/days";
import { SickDay, WeekDay } from "@/tools/SickDays/interfaces";
import {
  adjustWeekendsOnAddDate,
  adjustWeekendsOnDeleteDate,
  daysToCheck,
  findUTCDateInSickDays,
  getWeekendDays
} from "@/tools/SickDays/weekendLogic";

const today = new Date();
today.setHours(0, 0, 0, 0);
const workHours = 10;
const originalState = Array.from({ length: 50 }, () =>
  getNewDay(workHours, new Date(today.setDate(today.getDate() + 1)))
);

/**
 * Drop from thee original data the specified days
 * and repeats it for `number` of matches
 */
function excludeDays(days: WeekDay[]) {
  const originalDate = [...originalState];
  if (!days) return originalDate;
  const daysToKeep = [];
  let found = false;
  for (let i = 0; i < originalDate.length; i++) {
    const element = originalDate[i];
    // Push element and continue if the searching match has been found or the day isn't in the days we are interested
    if (!days.includes(element.weekDay)) {
      daysToKeep.push(element);
      continue;
    }

    // Check if we found the sequence of days
    found = days.every((val, index) => val === originalDate[index + i].weekDay);
    if (found) {
      // Skip elements matching the sequence
      i += days.length - 1; // Don't forget to account for the i++ at the end of the for loop
      continue;
    }

    daysToKeep.push(element);
  }

  return daysToKeep;
}

function getTestDate(
  days: WeekDay[],
  dayToGet: WeekDay,
  shouldBeContinue = false
) {
  const dayFind = (sickDays: SickDay[]) => {
    return sickDays.find(d => {
      if (d.weekDay !== dayToGet) return false;
      if (!shouldBeContinue || !daysToCheck.includes(dayToGet))
        return dayToGet === d.weekDay;

      const thirdDay = getWeekendDays(d.weekDay as any, d.date)[2];
      return !!findUTCDateInSickDays(sickDays, thirdDay.toUTCString());
    });
  };
  const data = excludeDays(days);
  const day = dayFind(data) || dayFind(originalState);
  if (!day) throw Error("Error while creating the data, couldn't find date");
  day.history = undefined;
  return {
    data,
    changedDateID: day.id
  };
}

type testData = {
  data: SickDay[];
  changedDateID: string;
  it: string;
  diff: number;
};

/**
 * Add actions
 */
const testsForDateAdd: testData[] = [
  {
    it: "Adds a weekend when Friday is added and Monday exists",
    ...getTestDate(["Saturday", "Sunday"], "Friday", true),
    diff: 2
  },
  {
    it: "Adds a weekend when Monday is added and Friday exists",
    ...getTestDate(["Saturday", "Sunday"], "Monday", true),
    diff: 2
  },
  {
    it: "Does nothing when Monday is added and Friday doesn't exists",
    ...getTestDate(["Friday"], "Monday"),
    diff: 0
  },
  {
    it:
      "Does nothing when a Friday is added, Monday exists but a weekend already exists",
    ...getTestDate([], "Friday"),
    diff: 0
  },
  {
    it:
      "Does nothing when a Monday is added, Friday exists but a weekend already exists",
    ...getTestDate([], "Monday"),
    diff: 0
  },
  {
    it: "Does nothing when Tuesday is added",
    ...getTestDate([], "Tuesday"),
    diff: 0
  }
];

/**
 * Delete actions
 */
const testsForDateDelete: testData[] = [
  {
    it: "Drops a weekend when Friday is deleted and Monday exists",
    ...getTestDate([], "Monday", true),
    diff: -3
  },
  {
    it: "Drops a weekend when Monday is deleted and Friday exists",
    ...getTestDate([], "Friday", true),
    diff: -3
  },
  {
    it: "Drops only Friday when Friday is deleted and Monday doesn't exists",
    ...getTestDate(["Monday"], "Friday", true),
    diff: -1
  },
  {
    it: "Drops only Monday when Monday is deleted and Friday doesn't exists",
    ...getTestDate(["Friday"], "Monday"),
    diff: -1
  },
  {
    it: "Drops only Tuesday when Tuesday is dropped",
    ...getTestDate([], "Tuesday"),
    diff: -1
  }
];

const validateTestResults = (result: SickDay[], test: testData) => {
  expect(result.length).toBe(test.data.length + test.diff);
};

describe("sick day weekend add logic", () => {
  testsForDateAdd.forEach(test => {
    it(test.it, () => {
      const result = adjustWeekendsOnAddDate(test.data, test.changedDateID);
      validateTestResults(result, test);
    });
  });
});

describe("sick day weekend delete logic", () => {
  testsForDateDelete.forEach(test => {
    it(test.it, () => {
      const result = adjustWeekendsOnDeleteDate(test.data, test.changedDateID);
      validateTestResults(result, test);
    });
  });
});
