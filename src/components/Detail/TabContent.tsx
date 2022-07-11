import { useState } from "react";
import styled from "styled-components";
export default function TabContent({ movie, info, peopleImgs }: props) {
  const tabTitle = ["줄거리", "감독/배우"];
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
        <Underline x={tab * 100}></Underline>
      </TabBox>
      {/* 탭별 세부내용 */}
      <ContentBox>
        {(tab === 0 && (
          <div>
            <h3>{info?.synTitle}</h3>
            {info?.synops}
          </div>
        )) ||
          (tab === 1 && (
            <ContentDetail>
              <Staff>
                <CastImg src={peopleImgs![0]}></CastImg>감독: {movie.director}
              </Staff>
              {movie.cast.map((cast, i) => (
                <Staff key={i}>
                  <CastImg src={peopleImgs![i + 1]}></CastImg>
                  {cast}
                </Staff>
              ))}
            </ContentDetail>
          ))}
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
    synTitle: string;
    synops: string;
    runtime: string;
    ntzRating: string;
    spcRating: string;
  };
  peopleImgs?: string[];
}

const TabBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  border-bottom: 1px solid black;
  font-family: "SSD";
  font-size: 18px;
  margin: auto;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Tab = styled.div`
  width: 50%;
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
const Underline = styled.div<styleProps>`
  width: 50%;
  height: 2px;

  background-color: #f5c443;
  transform: translateX(${(props) => props.x}%);
  transition: 0.5s;
`;

const ContentBox = styled.div`
  width: 700px;
  margin: auto;
  font-family: "SSD";
  font-size: 16px;
  word-break: keep-all;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ContentDetail = styled.div`
  width: 100%;
  line-height: 25px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Staff = styled.div`
  width: max-content;
  margin: 13px;
`;

const CastImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 9999px;
  display: block;
  margin: auto;
`;
