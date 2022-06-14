import styled from "styled-components";
import AnswerData from "./AnswerData.json";
import { incrementProgress, decrementProgress } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers;
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
        <AnsList>
          <AnsDiv>
            {data[0].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[1].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[2].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[3].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[4].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[5].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[6].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsDiv x={progress}>
            {data[7].answer.map((a) => (
              <div onClick={next}>{a}</div>
            ))}
          </AnsDiv>
          <AnsPrev onClick={prev}>back</AnsPrev>
        </AnsList>
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
  font-size: 50px;
  background-color: darkgray;
`;
const AnsList = styled.div`
  overflow: hidden;
`;
const AnsDiv = styled.div<styleProps>`
  background-color: green;
  margin-bottom: 1px;
  right: 0;

  width: 50%;
  justify-content: right;
  div {
    text-align: left;
  }
`;
const AnsPrev = styled.div<styleProps>`
  background-color: red;
  position: fixed;
  right: 0;
  bottom: 0;
`;
