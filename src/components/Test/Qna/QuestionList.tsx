import styled from "styled-components";
import { QuestionData } from "../..";

export default function QuestionList({ progress }: props) {
  const data = QuestionData.questions[progress];

  return (
    <>
      <QueWrap>
        <QueNum>{progress + 1}.</QueNum>
        <QueTitle>{data.quetitle},</QueTitle>
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
  min-width: 80vw;
  max-width: 100vw;
  margin: auto;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    min-width: 100vw;
    padding-top: 30px;
  }
`;
const QueNum = styled.div`
  font-weight: bold;
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-size: 37px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
const QueTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
`;
const QueDetail = styled.div`
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
`;
