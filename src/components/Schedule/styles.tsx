import styled from "styled-components";

interface IProps {
  isHoliday?: boolean;
  isSchedule?: boolean;
}

export const ScheduleWrapper = styled.div<IProps>`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 0.2rem 0 0.2rem 0.2rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${props => (props.isHoliday ? "#696969" : "#ffffff")};
  background-color: ${props => (props.isHoliday ? "pink" : props.isSchedule ? "#0BA8E6" : "")};
  border-radius: 0.25rem;

  &:hover {
    transform: ${props => (props.isSchedule ? "scale(1.1)" : "")};
  }

  & span {
    @media screen and (max-width: 512px) {
      font-size: 0.2rem;
    }

    @media screen and (max-width: 375px) {
      display: none;
    }
  }
`;
