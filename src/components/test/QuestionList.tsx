import styled from "styled-components";
import QuestionData from "./QuestionData.json";

export default function QuestionList({ progress }: props) {
  const data = QuestionData.questions[progress];

  return (
    <>
      <QueWrap>
        <QueNumDiv>{progress}.</QueNumDiv>
        <QueDiv>{data.quetitle}</QueDiv>
        <QueDiv>{data.quedetail}</QueDiv>
      </QueWrap>
    </>
  );
}

interface props {
  progress: number;
}

const QueWrap = styled.div`
  font-size: 100px;
  color: blue;
  background: darkgray;
`;
const QueNumDiv = styled.div``;
const QueDiv = styled.div``;
