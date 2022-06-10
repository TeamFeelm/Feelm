import { useState } from "react";
import styled from "styled-components";
import QuestionData from "./QuestionData.json";

export default function Questions() {
  const data = QuestionData.questions;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <QueWrap>
        <QueNumDiv>{progress}.</QueNumDiv>
        <QueDiv>{data[progress].question1}</QueDiv>
      </QueWrap>
    </>
  );
}

const QueWrap = styled.div`
  float: left;
`;
const QueNumDiv = styled.div``;
const QueDiv = styled.div``;
