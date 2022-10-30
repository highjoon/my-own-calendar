import dayjs from "dayjs";

interface IDaysInfo {
  year: number;
  month: number;
  days: number;
  isPrev: boolean;
}

const getDaysOfMonth = ({ year, month, days, isPrev }: IDaysInfo): Array<number> => {
  const monthInfo = isPrev ? dayjs(`${year}-${month + 1}-1`) : dayjs(`${year}-${month + 1}-${days}`);
  const daysArray = Array.from({ length: isPrev ? monthInfo.day() : 13 - monthInfo.day() }, (_, i) => i);
  const daysOfMonth = daysArray.map(i =>
    isPrev ? monthInfo.subtract(monthInfo.day() - i, "day").date() : monthInfo.add(i + 1, "day").date(),
  );

  return daysOfMonth;
};

export default getDaysOfMonth;
