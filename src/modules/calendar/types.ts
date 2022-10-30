import { ActionType } from "typesafe-actions";
import * as actions from "@modules/calendar/actions";

export interface ICalendarState {
  year: number;
  month: number;
  date: number;
  days: number;
}

export type calendarAction = ActionType<typeof actions>;
