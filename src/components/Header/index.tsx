import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { HeaderContainer, Title, ButtonContainer } from "@components/Header/styles";
import { DATE_TODAY, MONTH_TODAY, DAYS_IN_MONTH_TODAY, YEAR_TODAY } from "@constants";
import { RootState } from "@modules";
import { moveToNextMonth, moveToPrevMonth, moveToToday } from "@modules/calendar";

const Header = () => {
  const { year, month, date } = useSelector((state: RootState) => state.calendarReducer);
  const dispatch = useDispatch();

  const onClickMoveToToday = useCallback(() => {
    dispatch(
      moveToToday({
        year: YEAR_TODAY,
        month: MONTH_TODAY,
        date: DATE_TODAY,
        days: DAYS_IN_MONTH_TODAY,
      }),
    );
  }, [dispatch]);

  const onClickMoveToPrevMonth = () => {
    const newDay = dayjs(`${year}-${month + 1}-${date}`).subtract(1, "month");

    dispatch(
      moveToPrevMonth({
        year: newDay.year(),
        month: newDay.month(),
        date: newDay.date(),
        days: newDay.daysInMonth(),
      }),
    );
  };

  const onClickMoveToNextMonth = () => {
    const newDay = dayjs(`${year}-${month + 1}-${date}`).add(1, "month");

    dispatch(
      moveToNextMonth({
        year: newDay.year(),
        month: newDay.month(),
        date: newDay.date(),
        days: newDay.daysInMonth(),
      }),
    );
  };

  return (
    <HeaderContainer>
      <Title>
        {year}년 {month + 1}월
      </Title>
      <ButtonContainer>
        <button onClick={onClickMoveToPrevMonth}>❮</button>
        <button onClick={onClickMoveToToday}>오늘</button>
        <button onClick={onClickMoveToNextMonth}>❯</button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
