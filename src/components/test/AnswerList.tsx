import styled from "styled-components";
import AnswerData from "./AnswerData.json";
import { incrementProgress } from "../../store";
import { useDispatch } from "react-redux";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers[progress];
  const dispatch = useDispatch();
  const click = () => {
    dispatch(incrementProgress());
  };

  return (
    <>
      <AnsWrap>
        {data.answer.map((a, idx) => (
          <AnsDiv key={idx} onClick={click}>
            {a}
          </AnsDiv>
        ))}
      </AnsWrap>
    </>
  );
}

interface props {
  progress: number;
}

const AnsWrap = styled.div`
  float: right;
  font-size: 50px;
  background: darkgray;
`;
const AnsDiv = styled.div`
  cursor: pointer;
`;
