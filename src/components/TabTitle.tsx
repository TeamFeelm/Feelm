import { useState } from "react";
import { TabContent } from "../components";
import styled from "styled-components";

export default function TabTitle({ movie }: movie) {
  const [tab, setTab] = useState(0);
  return (
    <>
      {/* 탭 헤드라인 영역 */}
      <TabBox>
        <Tab onClick={() => setTab(0)}>기본</Tab>
        <Tab onClick={() => setTab(1)}>출연</Tab>
        <Tab onClick={() => setTab(2)}>시놉시스</Tab>
      </TabBox>
      {/* 탭 클릭시 언더라인 애니메이션 적용(styled props를 이용한 동적 스타일링) */}
      <Underline>{(tab === 0 && <Lines />) || (tab === 1 && <Lines x={100} />) || (tab === 2 && <Lines x={200} />)}</Underline>
      {/* 탭별 세부내용 */}
      <TabContent movie={movie} tab={tab} />
    </>
  );
}

interface styleProps {
  bg?: string;
  color?: string;
  w?: string;
  x?: number;
}

interface movie {
  movie: {
    id: string;
    title: string;
    genre: string[];
    synop: string;
    director: string;
    cast: string[];
    rating: string;
    runTime: number;
    year: number;
    img: string;
  };
}

export const TabBox = styled.div<styleProps>`
  display: flex;
  width: 45%;
  padding-top: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 33.333333%;
`;

// 탭 타이틀 전체 박스
export const Underline = styled.div`
  display: flex;
  width: 45%;
  height: 1px;
`;

// 탭 타이틀 슬라이딩 언더라인
export const Lines = styled.div<styleProps>`
  flex-basis: 33.333333%;
  background-color: blue;
  transform: translateX(${(props) => props.x}%);
  transition: transform 0.6s;
`;
