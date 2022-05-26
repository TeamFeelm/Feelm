/* library import */
import { useState } from "react";
import styled from 'styled-components';

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
`
const AnsBox = styled.div<props>`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`
