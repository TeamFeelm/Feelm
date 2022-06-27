import styled from "styled-components";
import QuestionData from "./QuestionData.json";

export default function QuestionList({ progress }: props) {
  const data = QuestionData.questions[progress];

  return (
    <>
      <QueWrap>
        <QueNum>{progress}.</QueNum>
        <QueTitle>{data.quetitle}</QueTitle>
        <QueDetail>{data.quedetail}</QueDetail>
      </QueWrap>
    </>
  );
}

interface props {
  progress: number;
}

const QueWrap = styled.div`
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  word-break: normal;
  width: fit-content;
  min-width: 80%;
  max-width: 80%;
  margin: auto;
  padding-bottom: 20px;
  @media screen and (max-width: 525px) {
    min-width: 100%;
    max-width: 100%;
  }
`;
const QueNum = styled.div`
  font-weight: bold;
  font-size: 4rem;
`;
const QueTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;
const QueDetail = styled.div`
  font-size: 2rem;
`;
