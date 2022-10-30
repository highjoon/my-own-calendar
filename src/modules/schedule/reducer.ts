import { createReducer } from "typesafe-actions";
import { IScheduleState, scheduleAction } from "@modules/schedule/types";
import { ADD_SCHEDULE, DELETE_SCHEDULE } from "@modules/schedule/actions";

// InitialState
const initialState: IScheduleState = {
  schedule: [],
};

// Reducer
const scheduleReducer = createReducer<IScheduleState, scheduleAction>(initialState, {
  [ADD_SCHEDULE]: (state, action) => ({
    ...state,
    schedule: [...state.schedule, action.payload],
  }),
  [DELETE_SCHEDULE]: (state, action) => ({
    ...state,
    schedule: state.schedule.filter(item => item.id !== action.payload),
  }),
});

export default scheduleReducer;
