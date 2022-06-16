import styled from "styled-components";
import AnswerData from "./AnswerData.json";
import { incrementProgress, decrementProgress, resetProgress } from "../../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers[progress];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const next = () => {
    if (progress < 7) {
      dispatch(incrementProgress(1));
    } else {
      navigate(`/test/result`);
      dispatch(resetProgress());
    }
  };
  const prev = () => {
    dispatch(decrementProgress(1));
  };

  return (
    <>
      <AnsWrap>
        {data.answer.map((a, idx) => (
          <AnsNextDiv onClick={next} key="idx">
            {idx}.{a}
          </AnsNextDiv>
        ))}
        <AnsPrevDiv onClick={prev}>back</AnsPrevDiv>
      </AnsWrap>
    </>
  );
}

interface props {
  progress: number;
}

interface styleProps {
  x?: number;
}

const AnsWrap = styled.div`
  font-size: 1.5vw;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;

  position: fixed;
  width: 80%;
  bottom: 10%;
  left: 10%;
`;
const AnsNextDiv = styled.div<styleProps>`
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
`;
const AnsPrevDiv = styled.div<styleProps>`
  background-color: rgba(255, 255, 255, 0.1);
  right: 0;
`;
