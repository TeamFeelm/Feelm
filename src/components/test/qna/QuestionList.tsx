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

  position: fixed;
  width: 80%;
  left: 10%;
`;
const QueNum = styled.div`
  font-weight: bold;
  font-size: 6vw;
`;
const QueTitle = styled.div`
  font-weight: bold;
  font-size: 3vw;
`;
const QueDetail = styled.div`
  font-size: 3vw;
`;
