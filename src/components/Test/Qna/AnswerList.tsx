import styled from "styled-components";
import AnswerData from "./AnswerData.json";
import { incrementProgress, decrementProgress, resetProgress, saveAnsIdx, delLastAnsIdx } from "../../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function AnswerList({ progress }: props) {
  const data = AnswerData.answers[progress];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const next = (idx: any) => {
    if (progress < 7) {
      dispatch(incrementProgress(1));
      dispatch(saveAnsIdx(idx));
    } else {
      navigate(`/test/result`);
      dispatch(resetProgress());
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
          <AnsPrevDiv>
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
  font-size: 1.5vw;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;

  position: fixed;
  width: 80%;
  bottom: 20%;
  left: 10%;
`;
const AnsNextDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
`;
const AnsPrevDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  right: 0;
  .prev_btn {
  }
`;
