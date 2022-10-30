import styled from "styled-components";

interface IDateProps {
  fade?: boolean;
  isToday?: boolean;
}

export const DateWrapper = styled.li<IDateProps>`
  padding: 0.5rem;
  text-align: end;
  background-color: #ffffff;
  border: 1px solid silver;
  border-right: none;
  border-bottom: none;
  cursor: pointer;

  &:nth-child(7n-6),
  &:nth-child(7n) {
    background-color: #e8e8e8;
    color: #696969;
  }

  &:hover {
    background-color: rgb(248, 250, 201, 0.5);
    transition: all ease 250ms 0s;
  }

  & span {
    padding: ${props => (props.isToday ? "0.2rem" : "")};
    font-size: 1rem;
    color: ${props => (props.fade ? "silver" : props.isToday ? "#ffffff" : "")};
    background-color: ${props => (props.isToday ? "#ff0000" : "")};
    border-radius: ${props => (props.isToday ? "50%" : "")};

    @media screen and (max-width: 512px) {
      font-size: 0.3rem;
    }
  }
`;
