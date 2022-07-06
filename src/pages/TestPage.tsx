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
        <VideoBg
          src="https://user-images.githubusercontent.com/99634778/177473951-d118fcba-959c-48a8-aa0e-d5d87dece53b.mp4"
          muted
          autoPlay
          loop
          playsInline
        >
          <strong>Your browser does not support the video tag.</strong>
        </VideoBg>
        <AnswerList progress={progress} />
      </QuestionsWrap>
    </>
  );
}

const QuestionsWrap = styled.div`
  width: 100vw;
  height: fit-content;
`;

const VideoBg = styled.video`
  position: absolute;
  opacity: 0.1;
  width: 100%;
  object-fit: cover;
  width: 100%;
  height: 70vh;
`;
