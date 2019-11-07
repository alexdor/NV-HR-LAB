import { OBInput, OBResult } from "./interfaces";

export const calculate = (input: OBInput): OBResult => {
  const monthsEmployed =
    (input.terminationDate.getFullYear() - input.employmentDate.getFullYear()) *
      12 +
    (input.terminationDate.getMonth() - input.employmentDate.getMonth());
  let terminationNotice = 0;

  if (monthsEmployed < 6) {
    terminationNotice = 1;
  } else if (monthsEmployed >= 6 && monthsEmployed < 12 * 2 + 9) {
    terminationNotice = 3;
  } else if (monthsEmployed >= 12 * 2 + 9 && monthsEmployed < 12 * 5 + 8) {
    terminationNotice = 4;
  } else if (monthsEmployed >= 12 * 5 + 8 && monthsEmployed < 12 * 8 + 7) {
    terminationNotice = 5;
  } else if (monthsEmployed >= 12 * 8 + 7) {
    terminationNotice = 6;
  }

  terminationNotice += input.extension;

  const tempDate = new Date(input.terminationDate);
  tempDate.setMonth(tempDate.getMonth() + terminationNotice);
  const terminationDate = new Date(
    tempDate.getFullYear(),
    tempDate.getMonth() + 1,
    0
  );

  return { terminationDate, terminationNotice };
};
