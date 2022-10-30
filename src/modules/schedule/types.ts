import { ActionType } from "typesafe-actions";
import * as actions from "@modules/schedule/actions";

export interface ISchedule {
  id: string;
  year: number;
  month: number;
  date: number;
  title: string;
}

export interface IScheduleState {
  schedule: ISchedule[];
}

export type scheduleAction = ActionType<typeof actions>;
