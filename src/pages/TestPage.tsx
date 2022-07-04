import { QuestionList, AnswerList, ProgressBar } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

export default function TestPage() {
  const progress = useSelector((state: RootState) => state.progress.progress);

  return (
    <>
      <QuestionsWrap>
        <ProgressBar progress={progress} />
        <QuestionList progress={progress} />
        <VideoBg src="src\assets\videos\testbg.mp4" muted autoPlay loop playsInline>
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
  background-color: rgb(3, 10, 46);
  opacity: 1;
`;

const VideoBg = styled.video`
  opacity: 0.1;
  object-fit: cover;
`;
