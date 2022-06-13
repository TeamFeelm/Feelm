import styled from "styled-components";
import AnswerData from "./AnswerData.json";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers[progress];

  return (
    <>
      <AnsWrap>
        {data.answer.map((a, idx) => (
          <AnsDiv key={idx}>{a}</AnsDiv>
        ))}
      </AnsWrap>
    </>
  );
}

interface props {
  progress: number;
}

const AnsWrap = styled.div`
  font-size: 50px;
  background: darkgray;
`;
const AnsDiv = styled.div`
  cursor: pointer;
`;
