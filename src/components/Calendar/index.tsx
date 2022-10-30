import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { DayContainer, DateContainer, CalendarContainer } from "@components/Calendar/styles";
import { Date, Modal } from "@components";
import { DAY_OF_WEEK, DATE_TODAY, MONTH_TODAY } from "@constants";
import { getDaysOfMonth } from "@utils";
import { IHoliday, IHolidayApiRequest, IModal } from "@typings";
import holidayApi from "@api/holiday";
import { RootState } from "@modules";

dayjs.locale("ko");

const Calendar = () => {
  const [holidayData, setHolidayData] = useState<IHoliday[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IModal>({ id: "", month: "", date: "", title: "", scheduleType: "" });
  const { year, month, days } = useSelector((state: RootState) => state.calendarReducer);

  const daysOfPrevMonth = getDaysOfMonth({ year, month, days, isPrev: true });
  const daysOfCurrentMonth = Array.from({ length: days }, (_, i) => i + 1);
  const daysOfNextMonth = getDaysOfMonth({ year, month, days, isPrev: false });

  const getholidayList = useCallback(async ({ solYear, solMonth }: IHolidayApiRequest) => {
    const prevHolidayData = await holidayApi({ solYear, solMonth: solMonth });
    const currentHolidayData = await holidayApi({ solYear, solMonth: solMonth + 1 });
    const nextHolidayData = await holidayApi({ solYear, solMonth: solMonth + 2 === 13 ? 1 : solMonth + 2 });

    setHolidayData([...prevHolidayData, ...currentHolidayData, ...nextHolidayData]);
  }, []);

  const onClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    getholidayList({ solYear: year, solMonth: month });
  }, [year, month, getholidayList]);

  return (
    <CalendarContainer>
      <DayContainer>
        {DAY_OF_WEEK.map(day => (
          <li key={`${year}${month}${day}`}>{day}</li>
        ))}
      </DayContainer>
      <DateContainer>
        {daysOfPrevMonth.map(day => (
          <Date
            key={`${year}${month}${day}`}
            fade={true}
            month={month}
            date={day}
            holidayData={holidayData}
            setModalData={setModalData}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
        {daysOfCurrentMonth.map(day => (
          <Date
            key={`${year}${month + 1}${day}`}
            isToday={month === MONTH_TODAY && day === DATE_TODAY}
            month={month + 1}
            date={day}
            holidayData={holidayData}
            setModalData={setModalData}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
        {daysOfNextMonth.map(day => (
          <Date
            key={`${year}${month + 2 === 13 ? 1 : month + 2}${day}`}
            fade={true}
            month={month + 2 === 13 ? 1 : month + 2}
            date={day}
            holidayData={holidayData}
            setModalData={setModalData}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
        {isModalOpen && <Modal modalData={modalData!} onClickHandleModal={onClickCloseModal} />}
      </DateContainer>
    </CalendarContainer>
  );
};

export default Calendar;
