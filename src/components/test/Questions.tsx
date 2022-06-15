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
        <VideoBg src="src\components\test\testbg.mp4" muted autoPlay loop>
          <strong>Your browser does not support the video tag.</strong>
        </VideoBg>
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
  opacity: 1;
`;

const VideoBg = styled.video`
  opacity: 0.1;
  object-fit: cover;
`;
