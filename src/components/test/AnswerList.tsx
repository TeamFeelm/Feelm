import { useState } from "react";
import styled from "styled-components";
import AnswerData from "./AnswerData.json";

export default function AnswerList() {
  const data = AnswerData.answers;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <AnsWrap>
        <AnsDiv>{data[progress].answer1}</AnsDiv>
      </AnsWrap>
    </>
  );
}

const AnsWrap = styled.div``;
const AnsDiv = styled.div``;
