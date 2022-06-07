import { useState } from "react";
import styled from "styled-components";
import TabContent from "../components/TabContent";

interface props {
  bg?: string;
  color?: string;
}

export default function Detail() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <ImgBox bg="blue">S P S P</ImgBox>
      <TabBox bg="white">
        <Tab onClick={() => setTab(0)}>기본</Tab>
        <Tab onClick={() => setTab(1)}>출연</Tab>
        <Tab onClick={() => setTab(2)}>줄거리</Tab>
      </TabBox>
      <ContentBox>
        <TabContent tab={tab} />
      </ContentBox>
    </>
  );
}

export const ImgBox = styled.div<props>`
  width: 40%;
  height: 500px;
  margin: auto;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  font-size: 100px;
`;
export const TabBox = styled.div<props>`
  padding-top: 50px;
  padding-bottom: 10px;
  width: 60%;
  margin: auto;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "white" ? "black" : "white")};
  border-bottom: 1px solid black;
`;
export const ContentBox = styled.div`
  width: 60%;
  padding: 20px;
  margin: auto;
`;
export const Tab = styled.span`
  padding: 20px;
  margin-right: 30px;
`;
