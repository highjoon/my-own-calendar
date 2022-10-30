import { createReducer } from "typesafe-actions";

import { DATE_TODAY, MONTH_TODAY, DAYS_IN_MONTH_TODAY, YEAR_TODAY } from "@constants";
import { ICalendarState, calendarAction } from "@modules/calendar/types";
import { NEXT_MONTH, PREV_MONTH, SET_TODAY } from "@modules/calendar/actions";

// InitialState
const initialState: ICalendarState = {
  year: YEAR_TODAY,
  month: MONTH_TODAY,
  date: DATE_TODAY,
  days: DAYS_IN_MONTH_TODAY,
};

// Reducer
const calendarReducer = createReducer<ICalendarState, calendarAction>(initialState, {
  [NEXT_MONTH]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [PREV_MONTH]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [SET_TODAY]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
});

export default calendarReducer;
