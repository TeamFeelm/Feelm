/* library import */
import { useState } from "react";
import styled from "styled-components";

/* component */
export default function Test() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  return (
    <>
      <h1>Test.tsx</h1>
      <QueBox bg="blue" color="white">
        question
      </QueBox>
      <AnsBox bg="red" color="black">
        answer
      </AnsBox>

      <h2>글로벌 styled 테스트</h2>
      <제목>테마 styled 테스트</제목>
    </>
  );
}

/* props */
interface props {
  bg?: string;
  color?: string;
}

/* styled-components */
const QueBox = styled.div<props>`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`;
const AnsBox = styled.div<props>`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`;

const 제목 = styled.h1`
  ${(props) => props.theme.fonts.h1}
`;
