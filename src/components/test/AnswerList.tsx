import styled from "styled-components";
import AnswerData from "./AnswerData.json";
import { incrementProgress, decrementProgress } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers[progress];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const next = () => {
    if (progress < 7) {
      dispatch(incrementProgress());
    } else {
      navigate(`/test/result`);
      dispatch(decrementProgress(7));
    }
  };
  const prev = () => {
    dispatch(decrementProgress(1));
  };

  return (
    <>
      <AnsWrap>
        {data.answer.map((a, idx) => (
          <AnsDiv key={idx} onClick={next}>
            {a}
          </AnsDiv>
        ))}
        <AnsDiv onClick={prev}>back</AnsDiv>
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
