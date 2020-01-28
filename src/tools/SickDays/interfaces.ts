export interface SickDay {
  id: string;
  date: Date;
  hours: number;
  weekDay: WeekDay;
  history?: Omit<SickDay, "id">;
  generated: boolean;
}

export type WeekDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
