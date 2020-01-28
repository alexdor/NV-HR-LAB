import { getNewDay } from "@/helpers/days";
import { WeekDay } from "@/tools/SickDays/interfaces";
import { adjustWeekends } from "@/tools/SickDays/weekendLogic";

const today = new Date();
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
  const daysToKeep = [];
  let found = false;
  for (let i = 0; i < originalDate.length; i++) {
    const element = originalDate[i];
    // Push element and continue if the searching match has been found or the day isn't in the days we are interested
    if (found || !days.includes(element.weekDay)) {
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

function getTestDate(days: WeekDay[], dayToGet: WeekDay) {
  const data = excludeDays(days);
  const day = data.find(d => dayToGet === d.weekDay);
  if (!day) throw Error("Error while creating the data, couldn't find date");
  day.history = undefined;
  return {
    data,
    newDateID: day.id
  };
}

// TODO: Evaluate that the days are actually added properly
const tests = [
  {
    it: "Adds a weekend when Friday is added and Monday exists",
    ...getTestDate(["Saturday", "Sunday"], "Friday"),
    diff: 2
  },

  {
    it: "Adds a weekend when Monday is added and Friday exists",
    ...getTestDate(["Saturday", "Sunday"], "Monday"),
    diff: 2
  }

  // { it: "Drops a weekend when Friday is deleted and Monday exists" },

  // { it: "Drops a weekend when Monday is deleted and Friday exists" },
  // {
  //   it: "Does nothing when Monday is deleted and Friday doesn't exists"
  // },
  // {
  //   it: "Does nothing when Friday is deleted and Monday doesn't exists"
  // },
  // {
  //   it: "Does nothing a weekend when Tuesday is added"
  // },

  // {
  //   it: "Does nothing a weekend when Tuesday is dropped"
  // },
  // {
  //   it:
  //     "Does nothing when a Friday is added, Monday exists but a weekend already exists"
  // }
];

describe("sick day weekend logic", () => {
  tests.forEach(test => {
    it(test.it, () => {
      const result = adjustWeekends(test.data, test.newDateID, workHours);

      expect(result.length).toBe(test.data.length + test.diff);
    });
  });
});
