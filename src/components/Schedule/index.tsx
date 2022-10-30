import React from "react";
import { ScheduleWrapper } from "@components/Schedule/styles";

interface IProps {
  children?: React.ReactNode;
  id?: string;
  month: number;
  date: number;
  isHoliday?: boolean;
  isSchedule?: boolean;
  title?: string;
}

const Schedule = ({ children, id, month, date, isHoliday, isSchedule, title }: IProps) => {
  return (
    <ScheduleWrapper
      data-schedule-id={id}
      data-month={month}
      data-date={date}
      data-title={title}
      data-schedule-type={isSchedule ? "schedule" : isHoliday ? "holiday" : ""}
      isHoliday={isHoliday}
      isSchedule={isSchedule}
    >
      <span
        data-schedule-id={id}
        data-month={month}
        data-date={date}
        data-title={title}
        data-schedule-type={isSchedule ? "schedule" : isHoliday ? "holiday" : ""}
      >
        {title ? `⚬ ${title}` : children}
      </span>
    </ScheduleWrapper>
  );
};

export default Schedule;
