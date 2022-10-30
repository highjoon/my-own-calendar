import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(211, 211, 211, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 300px;
  padding: 1.5rem;
  background-color: #ffffff;
  border: 1px solid silver;
  border-radius: 0.5rem;
  position: relative;
  overflow: scroll;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const ScheduleForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 1rem;
  gap: 2rem;
`;

export const ScheduleInput = styled.input`
  width: 100%;
  flex: 1;
  border: 1px solid silver;
  border-radius: 0.5rem;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid silver;
  border-radius: 0.5rem;
  cursor: pointer;
`;
