import { useState } from "react";
import { TabContent } from "..";
import styled from "styled-components";
export default function TabTitle({ movie, info }: props) {
  const [tabTitle] = useState(["시놉시스", "출연", "asd"]);
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
        {/* 탭 클릭 언더라인 애니메이션 */}
        {/* <Underline>{<Lines x={tab * 100}></Lines>}</Underline> */}
        <Underline x={tab * 100}></Underline>
      </TabBox>
      {/* 탭별 세부내용 */}
      <ContentBox>
        {(tab === 0 && (
          <>
            <P>
              {info?.title}
              {info?.synops}
            </P>
          </>
        )) ||
          (tab === 1 && <P>{movie.cast}</P>) ||
          (tab === 2 && <P></P>)}
      </ContentBox>
    </>
  );
}

interface styleProps {
  x?: number;
}

interface props {
  movie: {
    id: string;
    title: string;
    genre: string[];
    synop: string;
    director: string;
    cast: string[];
    runTime: number;
    year: number;
    img: string;
  };
  info?: {
    enTitle: string;
    title: string;
    synops: string;
    lines: string;
    runtime: string;
    grade: string;
    peopleImg: string[];
    ntzRating: string;
    spcRating: string;
    genre: string;
    cast: string;
  };
}

export const TabBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 45vw;
  padding-top: 40px;
  border-bottom: 1px solid black;
  font-family: "SSD";
  font-size: 0.8em;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 65%;
  }
`;

export const Tab = styled.div`
  flex-basis: 33.33%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background-color: white;
    color: rgba(1, 5, 27, 1);
  }
`;

// 탭 타이틀 전체 박스
export const Underline = styled.div<styleProps>`
  width: 33.33%;
  height: 2px;
  bottom: 2px;

  background-color: #f5c443;
  transform: translateX(${(props) => props.x}%);
  transition: transform 0.6s;
  @media screen and (max-width: 768px) {
    width: 65%;
  }
`;

// 탭 타이틀 슬라이딩 언더라인
export const Lines = styled.div<styleProps>`
  flex-basis: 33.333333%;
`;

export const ContentBox = styled.div`
  width: 50vw;
  padding: 20px;
  margin: auto;
  font-family: "SSD";
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const P = styled.p`
  line-height: 1.7em;
`;
