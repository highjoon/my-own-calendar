import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useSelector } from "react-redux";
import { DateWrapper } from "@components/Date/styles";
import { Schedule } from "@components";
import { IHoliday, IModal } from "@typings";
import { RootState } from "@modules";

interface IProps {
  fade?: boolean;
  month: number;
  date: number;
  holidayData: IHoliday[];
  isToday?: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalData: Dispatch<SetStateAction<IModal>>;
}

const Date = ({ fade, month, date, holidayData, setModalData, setIsModalOpen, isToday }: IProps) => {
  const { schedule } = useSelector((state: RootState) => state.scheduleReducer);

  const onClickHandleModal = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target instanceof HTMLElement && e.target.dataset) {
        if (e.target.dataset.scheduleType === "schedule") {
          setModalData({
            id: e.target.dataset.scheduleId,
            month: e.target.dataset.month,
            date: e.target.dataset.date,
            title: e.target.dataset.title,
            scheduleType: e.target.dataset.scheduleType,
          });
        } else {
          setModalData({
            month: e.target.dataset.month,
            date: e.target.dataset.date,
          });
        }
        setIsModalOpen(true);
      }
    },
    [setIsModalOpen, setModalData],
  );

  return (
    <DateWrapper fade={fade} data-month={month} data-date={date} isToday={isToday} onClick={onClickHandleModal}>
      <span data-month={month} data-date={date}>
        {date === 1 ? `${month}월 ${date}` : date}일
      </span>
      {holidayData?.map(
        holiday =>
          holiday.holMonth === month &&
          holiday.holDate === date && (
            <Schedule key={holiday.holDate} month={month} date={date} isHoliday={true}>
              {holiday.holName}
            </Schedule>
          ),
      )}
      {schedule?.map(
        schedule =>
          schedule.month === month &&
          schedule.date === date && (
            <Schedule
              key={schedule.id}
              id={schedule.id}
              month={month}
              date={date}
              title={schedule.title}
              isSchedule={true}
            />
          ),
      )}
    </DateWrapper>
  );
};

export default Date;
