import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Background, Content, Title, ScheduleForm, ScheduleInput, SubmitBtn } from "@components/Modal/styles";
import { IModal } from "@typings";
import { RootState } from "@modules";
import { addSchedule, deleteSchedule } from "@modules/schedule";

interface IProps {
  modalData: IModal;
  onClickHandleModal: () => void;
}

const Modal = ({ modalData, onClickHandleModal }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { year } = useSelector((state: RootState) => state.calendarReducer);
  const { schedule } = useSelector((state: RootState) => state.scheduleReducer);
  const dispatch = useDispatch();

  const onClickCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e?.target instanceof HTMLElement && e.target.classList[e.target.classList.length - 1] !== "Background") return;

    onClickHandleModal();
  };

  const onSubmitSchedule = (e: any) => {
    e.preventDefault();

    if (!inputRef.current?.value) {
      window.alert("제목을 입력해주세요.");
      return;
    }

    dispatch(
      addSchedule({
        id: `schedule${schedule.length + 1}`,
        year: Number(year),
        month: Number(modalData.month),
        date: Number(modalData.date),
        title: inputRef.current.value,
      }),
    );

    onClickHandleModal();
  };

  const onClickDeleteSchedule = () => {
    dispatch(deleteSchedule(modalData.id!));

    onClickHandleModal();
  };

  return (
    <Background className="Background" onClick={onClickCloseModal}>
      <Content>
        <Title>
          {modalData.month}월 {modalData.date}일
        </Title>
        {modalData.scheduleType === "schedule" ? (
          <>
            <Title>{modalData?.title}</Title>
            <SubmitBtn onClick={onClickDeleteSchedule}>삭제</SubmitBtn>
          </>
        ) : (
          <ScheduleForm onSubmit={onSubmitSchedule}>
            <ScheduleInput type="text" ref={inputRef} />
            <SubmitBtn>제출</SubmitBtn>
          </ScheduleForm>
        )}
      </Content>
    </Background>
  );
};

export default Modal;
