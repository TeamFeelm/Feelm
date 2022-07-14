import { QuestionList, AnswerList, ProgressBar } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";
import { useEffect } from "react";

export default function TestPage() {
  const progress = useSelector((state: RootState) => state.progress.progress);
  useEffect(() => {
    window.scroll(0, 0);
  }, [progress]);

  return (
    <>
      <QuestionsWrap>
        <VideoBg
          src="https://user-images.githubusercontent.com/99634778/177473951-d118fcba-959c-48a8-aa0e-d5d87dece53b.mp4"
          muted
          autoPlay
          loop
          playsInline
        >
          <strong>Your browser does not support the video tag.</strong>
        </VideoBg>
        <ProgressBar progress={progress} />
        <QuestionList progress={progress} />
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
  position: fixed;
  opacity: 0.05;
  width: 100%;
  object-fit: cover;
  width: 100%;
`;
