import QuestionList from "./QuestionList";
import AnswerList from "./AnswerList";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Test() {
  const progress = useSelector((state: RootState) => state.progress.progress);

  return (
    <>
      <QuestionList progress={progress} />
      <AnswerList progress={progress} />
    </>
  );
}
