import { createAction } from "typesafe-actions";
import { ISchedule } from "@modules/schedule/types";

// Action Types
export const ADD_SCHEDULE = "schedule/ADD_SCHEDULE" as const;
export const DELETE_SCHEDULE = "schedule/DELETE_SCHEDULE" as const;

// Action Creators
export const addSchedule = createAction(ADD_SCHEDULE)<ISchedule>();
export const deleteSchedule = createAction(DELETE_SCHEDULE)<string>();
