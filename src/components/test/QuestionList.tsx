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
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  padding-bottom: 2vh;
`;
const QueNum = styled.div`
  color: white;
  font-weight: bold;
  font-size: 6vw;
  /* font-size: 70px; */
`;
const QueTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.5vw;
  /* font-size: 40px; */
`;
const QueDetail = styled.div`
  color: white;
  font-size: 2.5vw;
  /* font-size: 30px; */
`;
