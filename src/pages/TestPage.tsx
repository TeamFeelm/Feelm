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
          src="https://user-images.githubusercontent.com/104556563/177116228-11a7f238-22a0-40d7-b359-b288c8c03f32.mp4"
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
  width: 100%;
  height: 100%;
  background-color: rgb(3, 10, 46);
  opacity: 1;
`;

const VideoBg = styled.video`
  opacity: 0.1;
  object-fit: cover;
`;
