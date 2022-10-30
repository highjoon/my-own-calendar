import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 64px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: 512px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  & button {
    font-weight: bold;
    background-color: white;
    border: 1px solid silver;
    border-radius: 0.3rem;
    cursor: pointer;

    &:nth-child(2) {
      padding-left: 0.6rem;
      padding-right: 0.6rem;
    }
  }
`;
