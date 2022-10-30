import { combineReducers } from "redux";
import calendarReducer from "@modules/calendar/reducer";
import scheduleReducer from "@modules/schedule/reducer";

const rootReducer = combineReducers({ calendarReducer, scheduleReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
