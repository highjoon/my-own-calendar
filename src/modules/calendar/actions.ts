import { createAction } from "typesafe-actions";
import { ICalendarState } from "@modules/calendar/types";

// Action Types
export const NEXT_MONTH = "calendar/NEXT_MONTH" as const;
export const PREV_MONTH = "calendar/PREV_MONTH" as const;
export const SET_TODAY = "calendar/SET_TODAY" as const;

// Action Creators
export const moveToNextMonth = createAction(NEXT_MONTH)<ICalendarState>();
export const moveToPrevMonth = createAction(PREV_MONTH)<ICalendarState>();
export const moveToToday = createAction(SET_TODAY)<ICalendarState>();
