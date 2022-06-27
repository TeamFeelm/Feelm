import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, resetAnsIdx } from "../store";
import styled from "styled-components";
import TestResultData from "../components/Test/Result/TestResultData.json";

export default function TestResult() {
  const ansIdxArray = useSelector((state: RootState) => state.progress.ansIdxArray);
  const dispatch = useDispatch();
  const [resultIdx, setResultIdx] = useState(0);
  const data = TestResultData[resultIdx];

  useEffect(() => {
    let drama = 0;
    let fantasy = 0;
    let hero = 0;
    let action = 0;
    let comedy = 0;
    let anime = 0;
    let music = 0;
    let horror = 0;
    let criminal = 0;
    let romance = 0;
    let sf = 0;
    let adult = 0;

    const verygood = 2;
    const good = 1.45;
    const soso = 0.9;
    const bad = 0.5;
    const verybad = -0.45;

    // 질문 1번
    if (ansIdxArray[1] === 0) {
      criminal += verygood;
      hero += good;
      action += soso;
      horror += bad;
      romance += verybad;
      drama += verybad;
    } else if (ansIdxArray[1] === 1) {
      comedy += verygood;
      drama += soso;
      hero += soso;
      music += verybad;
    } else if (ansIdxArray[1] === 2) {
      romance += verygood;
      drama += verygood;
      adult += good;
      action += verybad;
      criminal += verybad;
      horror += verybad;
    }

    // 질문 2번
    if (ansIdxArray[2] === 0) {
      fantasy += verygood;
      anime += soso;
      sf += verybad;
    } else if (ansIdxArray[2] === 1) {
      sf += verygood;
      romance += soso;
    } else if (ansIdxArray[2] === 2) {
      action += verygood;
      adult += soso;
    } else if (ansIdxArray[2] === 3) {
      anime += verygood;
      fantasy += soso;
    }

    // 질문 3번
    if (ansIdxArray[3] === 0) {
      drama += verygood;
      horror += soso;
      sf += verybad;
    } else if (ansIdxArray[3] === 1) {
      music += verygood;
      hero += soso;
    }

    // 질문 4번
    if (ansIdxArray[4] === 0) {
      comedy += verygood;
      music += soso;
      horror += verybad;
    } else if (ansIdxArray[4] === 1) {
      fantasy += verygood;
      drama += soso;
    }

    // 질문 5번
    if (ansIdxArray[5] === 0) {
      criminal += verygood;
      hero += soso;
      anime += verybad;
    } else if (ansIdxArray[5] === 1) {
      adult += verygood;
      criminal += soso;
    }

    // 질문 6번
    if (ansIdxArray[6] === 0) {
      sf += verygood;
      drama += soso;
      adult += verybad;
    } else if (ansIdxArray[6] === 1) {
      hero += verygood;
      comedy += soso;
    }

    // 질문 7번
    if (ansIdxArray[7] === 0) {
      comedy += verygood;
      romance += soso;
      horror += verybad;
    } else if (ansIdxArray[7] === 1) {
      action += verygood;
      fantasy += soso;
    }

    // 질문 8번
    if (ansIdxArray[8] === 0) {
      drama += verygood;
      action += soso;
      anime += verybad;
    } else if (ansIdxArray[8] === 1) {
      music += verygood;
      sf += soso;
    }
    const resultArr = [drama, fantasy, hero, action, comedy, anime, music, horror, criminal, romance, sf, adult];
    console.log(resultArr);

    setResultIdx(resultArr.findIndex((el) => el >= Math.max.apply(null, resultArr)));
    console.log(resultArr.findIndex((el) => el >= Math.max.apply(null, resultArr)));
    return () => {
      dispatch(resetAnsIdx());
    };
  }, [ansIdxArray]);

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
          {<span></span>}
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

const CharacterCard = styled.div``;

const CharacterImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  float: right;
`;
