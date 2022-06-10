import { useState } from "react";
import styled from "styled-components";
import AnswerData from "./AnswerData.json";

export default function AnswerList() {
  const data = AnswerData.answers;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <AnsWrap>
        <AnsDiv></AnsDiv>
        {/* <AnsDiv>{data[progress].answer[i]}</AnsDiv> */}
        {/* map이든 for이든 돌려서 answer배열 뽑기 나중에 ^^ */}
      </AnsWrap>
    </>
  );
}

const AnsWrap = styled.div``;
const AnsDiv = styled.div``;
