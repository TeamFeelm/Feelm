import styled from "styled-components";
import { AnswerData } from "../..";
import { RootState, incrementProgress, decrementProgress, onChangeAnsIdx, delLastAnsIdx, testResultCalc } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers[progress];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const testResultIdx = useSelector((state: RootState) => state.progress.testResultIdx);

  const next = (idx: any) => {
    if (progress < 9) {
      dispatch(incrementProgress(1));
      dispatch(onChangeAnsIdx(idx));
    } else {
      dispatch(testResultCalc());
      navigate(`/test/result/${testResultIdx}`);
    }
  };
  const prev = () => {
    if (progress > 0) {
      dispatch(decrementProgress(1));
      dispatch(delLastAnsIdx());
    }
  };

  return (
    <>
      <AnsWrap>
        {data.answer.map((ans, idx) => (
          <AnsNextDiv
            onClick={() => {
              next(idx);
            }}
            key={idx}
          >
            {ans}
          </AnsNextDiv>
        ))}
        {progress > 0 && (
          <AnsPrevDiv onClick={prev}>
            뒤로 가기<RiArrowGoBackLine className="prev_btn"></RiArrowGoBackLine>
          </AnsPrevDiv>
        )}
      </AnsWrap>
    </>
  );
}

interface props {
  progress: number;
}

const AnsWrap = styled.div`
  font-size: 25px;
  color: white;
  text-align: center;
  position: absolute;
  width: 0;
  bottom: 15%;
  left: 50%;
  margin: auto;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 10vh;
    left: 0;
    font-size: 19px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
const AnsNextDiv = styled.div`
  padding: 15px 30px;
  margin-top: 5px;
  transform: translate(-50%, 0);
  width: fit-content;
  min-width: 640px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 768px) {
    &:hover {
      background-color: white;
      color: rgba(1, 5, 27, 1);
    }
  }
  @media screen and (max-width: 768px) {
    min-width: 480px;
  }
  @media screen and (max-width: 480px) {
    min-width: 320px;
  }
`;
const AnsPrevDiv = styled.div`
  width: 5.5rem;
  height: fit-content;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: darkgray;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
