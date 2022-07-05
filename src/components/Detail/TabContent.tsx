import { useState } from "react";
import styled from "styled-components";
export default function TabTitle({ movie, info }: props) {
  const [tabTitle] = useState(["시놉시스", "배우/제작진", "etc"]);
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
          <ContentDetail>
            <strong>{info?.title}</strong>
            {info?.synops}
          </ContentDetail>
        )) ||
          (tab === 1 && <ContentDetail>{movie.cast}</ContentDetail>) ||
          (tab === 2 && <ContentDetail></ContentDetail>)}
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
  width: 700px;
  border-bottom: 1px solid black;
  font-family: "SSD";
  font-size: 1em;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Tab = styled.div`
  width: 33.33%;
  text-align: center;
  padding: 20px;
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

  background-color: #f5c443;
  transform: translateX(${(props) => props.x}%);
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    width: 33.33%;
  }
`;

export const ContentBox = styled.div`
  width: 700px;
  margin: auto;
  font-family: "SSD";
  font-size: 1em;
  word-break: keep-all;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ContentDetail = styled.p`
  width: 100%;
  line-height: 1.75em;
  transition: 0.5s;
`;
