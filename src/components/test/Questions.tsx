import QuestionList from "./QuestionList";
import AnswerList from "./AnswerList";
import { useState } from "react";

export default function Test() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <QuestionList progress={progress} />
      <AnswerList progress={progress} />
    </>
  );
}
