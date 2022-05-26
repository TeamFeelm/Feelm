/* library import */
import { useState } from "react";
import styled from "styled-components";

/* component */
export default function Test() {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);

  return (
    <>
      <QueDiv bg="grey">

      </QueDiv>
    </>
  );
}

/* props */
interface props {
  bg?: string;
  color?: string;
}

/* styled-components */
const QueDiv = styled.div<props>`
  background-color: ${(props) => props.bg};
`
