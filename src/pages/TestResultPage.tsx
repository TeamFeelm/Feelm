import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, resetAnsIdx, testResultCalc } from "../store";
import styled from "styled-components";
import TestResultData from "../components/Test/Result/TestResultData.json";

export default function TestResult() {
  const testResultIdx = useSelector((state: RootState) => state.progress.testResultIdx);
  const dispatch = useDispatch();
  const data = TestResultData[testResultIdx];

  useEffect(() => {
    dispatch(resetAnsIdx());
  });

  return (
    <>
      <TestResultWrap>
        <TestResultList>
          <tr>
            <Chracter>{data.name}</Chracter>
          </tr>
          <tr>
            <Detail>{data.title1},</Detail>
          </tr>
          <tr>
            <Detail>{data.title2}!</Detail>
          </tr>
          <tr>
            <Genre>{data.genre}</Genre>
          </tr>
        </TestResultList>
        <CharacterCard>
          <CharacterImg src={`/src/assets/characters/${data.img}`} />
        </CharacterCard>
      </TestResultWrap>
    </>
  );
}

const TestResultWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw;
`;

const TestResultList = styled.table`
  height: auto;
  float: left;
`;
const Chracter = styled.th`
  font-size: 2vw;
`;
const Detail = styled.td`
  font-size: 1vw;
`;
const Genre = styled.td`
  font-size: 1vw;
`;

const CharacterCard = styled.div`
  perspective: 1500px;
`;

const CharacterImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  float: right;
  transform-style: preserve-3d;
  transition: transform 0.05s linear;
  box-shadow: -20px 40px 80px -50px blue;
`;
