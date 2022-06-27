import { useState } from "react";
import { TabContent } from "../components";
import styled from "styled-components";
export default function TabTitle({ movie }: movie) {
  const [tabTitle] = useState(["기본", "출연", "시놉시스"]);
  const [tab, setTab] = useState(0);
  return (
    <>
      {/* 탭 헤드라인 */}
      <TabBox>
        {tabTitle.map((heading, i) => {
          return (
            <Tab onClick={() => setTab(i)} key={i}>
              {heading}
            </Tab>
          );
        })}
      </TabBox>
      {/* 탭 클릭 언더라인 애니메이션 */}
      <Underline>{<Lines x={tab * 100}></Lines>}</Underline>
      {/* 탭별 세부내용 */}
      <TabContent movie={movie} tab={tab} />
    </>
  );
}

interface styleProps {
  bg?: string;
  color?: string;
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
  width: 45vw;
  padding-top: 40px;
  border-bottom: 1px solid black;
  font-family: "SSD";
  font-size: 0.8em;
  @media screen and (max-width: 768px) {
    width: 65%;
  }
`;

export const Tab = styled.div<styleProps>`
  display: flex;
  flex-basis: 33.333333%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  :hover {
    background-color: #5f5fc7;
    transition: all 0.5s;
    color: white;
  }
`;

// 탭 타이틀 전체 박스
export const Underline = styled.div`
  display: flex;
  width: 45vw;
  height: 2px;
  position: relative;
  bottom: 2px;
  @media screen and (max-width: 768px) {
    width: 65%;
  }
`;

// 탭 타이틀 슬라이딩 언더라인
export const Lines = styled.div<styleProps>`
  flex-basis: 33.333333%;
  background-color: #f5c443;
  transform: translateX(${(props) => props.x}%);
  transition: transform 0.6s;
`;
