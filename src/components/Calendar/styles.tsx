import styled from "styled-components";

export const CalendarContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const DayContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid none;
  height: 30px;

  & li {
    text-align: end;
    padding: 0 0.5rem 0.5rem 0;

    &:first-child,
    &:last-child {
      color: gray;
    }
  }
`;

export const DateContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 100%;
`;
