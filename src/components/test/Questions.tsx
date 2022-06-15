import QuestionList from "./QuestionList";
import AnswerList from "./AnswerList";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";

export default function Test() {
  const progress = useSelector((state: RootState) => state.progress.progress);

  return (
    <>
      <QuestionsWrap>
        <QuestionList progress={progress} />
        <AnswerList progress={progress} />
      </QuestionsWrap>
    </>
  );
}

const QuestionsWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 35, 57, 1);
  padding-left: 5vw;
  padding-right: 5vw;
`;
